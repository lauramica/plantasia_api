const { createClient } = require("@supabase/supabase-js");
const { default: slugify } = require("slugify");
const { Product, Type } = require("../models");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

const ProductController = {
    showList: async (req, res) => {
        try {
            const limit = Number(req.query.limit);
            const typeId = Number(req.query.typeId);
            /*             const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
            const products = await Product.findAll({ offset: offset, limit: limit, include: Type }); */
            const options = { include: Type };
            if (limit) options.limit = limit;
            if (typeId) {
                if (await Type.findByPk(typeId)) options.where = { typeId };
            }
            const products = await Product.findAll(options);
            return res.json({ products });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to show products" });
        }
    },
    show: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id, { include: Type });
            return res.json({ product });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to show product" });
        }
    },
    store: async (req, res) => {
        try {
            const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

            const form = formidable({
                keepExtensions: true,
            });

            form.parse(req, async (err, fields, files) => {
                try {
                    const { name, description, typeId, stock, price } = fields;
                    const ext = path.extname(files.image.filepath);
                    const image = `image_${Date.now()}${ext}`;

                    const slug = slugify(name, { lower: true });

                    const { data, error } = await supabase.storage
                        .from("images")
                        .upload(`products/${image}`, fs.createReadStream(files.image.filepath), {
                            cacheControl: "3600",
                            upsert: false,
                            contentType: files.image.mimetype,
                            duplex: "half",
                        });

                    await Product.create({
                        name,
                        description,
                        image,
                        typeId,
                        stock,
                        price,
                        slug,
                    });
                    return res.send({ msg: "Product successfully created" });
                } catch (err) {
                    console.log(err);
                    return res.status(400).json({ error: "There was a mistake on the request" });
                }
            });
        } catch (err) {
            console.error(err);
            return res.status(400).send({ error: "Failed to create product" });
        }
    },
    update: async (req, res) => {
        try {
            const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

            const form = formidable({
                keepExtensions: true,
            });

            form.parse(req, async (err, fields, files) => {
                try {
                    const { name, description, typeId, stock, price, trending, slug } = fields;
                    const ext = path.extname(files.image.filepath);
                    const image = `image_${Date.now()}${ext}`;

                    const product = await Product.findByPk(req.params.id);

                    const { data, error } = await supabase.storage
                        .from("images")
                        .remove([`products/${product.image}`])
                        .upload(`products/${image}`, fs.createReadStream(files.image.filepath), {
                            cacheControl: "3600",
                            upsert: false,
                            contentType: files.image.mimetype,
                            duplex: "half",
                        });

                    await product.update({
                        name,
                        description,
                        image,
                        typeId,
                        stock,
                        price,
                        trending,
                        slug,
                    });
                    return res.send({ msg: "Product successfully updated" });
                } catch (err) {
                    console.log(err);
                    return res.status(400).send({ error: "There was a mistake in the request" });
                }
            });
        } catch (err) {
            console.error(err);
            return re.status(400).send({ error: "Failed to update product" });
        }
    },
    destroy: async (req, res) => {
        try {
            await Product.destroy({ where: { id: req.params.id } });
            return res.send({ msg: "Product successfully deleted" });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to delete product" });
        }
    },
};

module.exports = ProductController;
