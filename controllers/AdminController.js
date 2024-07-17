const formidable = require("formidable");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

const { Admin } = require("../models");

const AdminController = {
    showList: async (req, res) => {
        try {
            const options = {};
            const limit = Number(req.query.limit);
            const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;

            if (limit) options.limit = limit;
            if (offset) options.offset = offset;

            const admins = await Admin.findAll(options);
            return res.json({ admins });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "There was a mistake showing the admins" });
        }
    },
    show: async (req, res) => {
        try {
            const admin = await Admin.findByPk(req.params.id, {
                attributes: { exclude: ["password"] },
            });

            return res.json({ admin });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "There was a mistake finding the admin" });
        }
    },
    create: async (req, res) => {
        try {
            const supabase = createClient(process.env.DB_URL, process.env.DB_KEY);

            const form = formidable({
                multiples: true,
                keepExtensions: true,
            });

            form.parse(req, async (err, fields, files) => {
                try {
                    const { firstname, lastname, password, email } = fields;
                    const ext = path.extname(files.image.filepath);
                    const avatar = `image_${Date.now()}${ext}`;

                    const hash = await bcrypt.hash(password, 12);

                    const { data, error } = await supabase.storage
                        .from("images")
                        .upload(`avatars/${avatar}`, fs.createReadStream(files.avatar.filepath), {
                            cacheControl: "3600",
                            upsert: false,
                            contentType: files.avatar.mimetype,
                            duplex: "half",
                        });

                    if (error) {
                        console.log(error);
                        return res
                            .status(500)
                            .json({ error: "There was an issue with the server" });
                    }

                    await Admin.create({
                        firstname,
                        lastname,
                        password: hash,
                        email,
                        avatar,
                    });

                    return res.json({ msg: "Admin successfully created" });
                } catch (err) {
                    console.log(err);
                    return res.status(400).json({ error: "There was an error on the request" });
                }
            });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "There was a mistake creating the admin" });
        }
    },
    update: async (req, res) => {
        try {
            const supabase = createClient(process.env.DB_URL, process.env.DB_KEY);

            const form = formidable({
                uploadDir: __dirname + `${process.env.IMAGES_URL}/avatars`,
                keepExtensions: true,
            });

            form.parse(req, async (err, fields, files) => {
                try {
                    const { firstname, lastname, password, email } = fields;
                    const ext = path.extname(files.image.filepath);
                    const avatar = `image_${Date.now()}${ext}`;

                    const admin = await Admin.findByPk(req.params.id);

                    const removeImage = await supabase.storage
                        .from("images")
                        .remove([`avatars/${product.image}`]);

                    if (removeImage.error) {
                        console.log(removeImage.error);
                        return res
                            .status(500)
                            .json({ error: "There was an issue with the server" });
                    }

                    const uploadImage = await supabase.storage
                        .from("images")
                        .upload(`avatars/${avatar}`, fs.createReadStream(files.avatar.filepath), {
                            cacheControl: "3600",
                            upsert: false,
                            contentType: files.avatar.mimetype,
                            duplex: "half",
                        });

                    if (uploadImage.error) {
                        console.log(uploadImage.error);
                        return res
                            .status(500)
                            .json({ error: "There was an issue with the server" });
                    }

                    await admin.update({
                        firstname,
                        lastname,
                        password,
                        email,
                        avatar,
                    });

                    return res.json({ msg: "Admin successfully updated" });
                } catch (err) {
                    console.log(err);
                    return res.status(400).json({ error: "There was an error on the request" });
                }
            });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "There was a mistake updating the admin" });
        }
    },
    destroy: async (req, res) => {
        try {
            const supabase = createClient(process.env.DB_URL, process.env.DB_KEY);
            const admin = await Admin.findByPk(req.params.id);

            const { data, error } = await supabase.storage
                .from("images")
                .remove([`avatars/${product.image}`]);

            if (error) {
                console.log(error);
                return res.status(500).json({ error: "There was an issue with the server" });
            }

            await admin.destroy();
            return res.json({ msg: "Admin successfully deleted" });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "There was a mistake deleting the admin" });
        }
    },
    getToken: async (req, res) => {
        try {
            const admin = await Admin.findOne({ where: { email: req.body.email } });

            if (!admin) return res.status(403).json({ error: "Verify your credentials" });

            const match = await bcrypt.compare(req.body.password, admin.password);
            if (!match) return res.status(403).json({ error: "Verify your credentials" });

            const token = jwt.sign({ sub: admin.id, role: "admin" }, process.env.JWT_SECRET);

            return res.json({ token });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ msg: "There was a mistake verifing the credentials" });
        }
    },
};

module.exports = AdminController;
