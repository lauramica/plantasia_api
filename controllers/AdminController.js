const formidable = require("formidable");
const { Admin } = require("../models");

const AdminController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const admins = await Admin.findAll({ offset: offset, limit: limit });
        return res.json({ admins: admins });
    },
    show: async (req, res) => {
        try {
            const admin = await Admin.findByPk(req.params.id, {
                attributes: { exclude: ["password"] },
            });
            return res.json({
                user: admin,
            });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake creating the admin" });
        }
    },
    create: async (req, res) => {
        try {
            const form = formidable({
                uploadDir: __dirname + "/../public/images/avatars",
                keepExtensions: true,
            });
            form.parse(req, async (err, fields, files) => {
                const { firstname, lastname, password, email } = fields;
                const avatar = files.avatar.newFilename;
                await Admin.create({
                    firstname,
                    lastname,
                    password,
                    email,
                    avatar,
                });
            });
            return res.json({ message: "Admin successfully created" });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake creating the admin" });
        }
    },

    update: async (req, res) => {
        try {
            const form = formidable({
                uploadDir: __dirname + "/../public/images/avatars",
                keepExtensions: true,
            });
            form.parse(req, async (err, fields, files) => {
                const admin = await Admin.findByPk(req.params.id);
                const { firstname, lastname, password, email } = fields;
                const avatar = files.avatar.newFilename;
                await admin.update({
                    firstname,
                    lastname,
                    password,
                    email,
                    avatar,
                });
                return res.json({ message: "Admin successfully updating" });
            });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake updating the admin" });
        }
    },
    destroy: async (req, res) => {
        try {
            await Admin.destroy({ where: { id: req.params.id } });
            return res.json({ message: "Admin successfully deleted" });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake deleting the admin" });
        }
    },
};

module.exports = AdminController;
