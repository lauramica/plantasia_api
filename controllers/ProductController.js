const { default: slugify } = require("slugify");
const { Product, Type } = require("../models");
const formidable = require("formidable");

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
            console.log(process.env.IMAGES_URL);
            const form = formidable({
                uploadDir: __dirname + `${process.env.IMAGES_URL}/products`,
                keepExtensions: true,
            });

            form.parse(req, async (err, fields, files) => {
                const { name, description, typeId, stock, price } = fields;
                const image = files.image.newFilename;
                const slug = slugify(name, { lower: true });
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
            });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to create product" });
        }
    },
    update: async (req, res) => {
        try {
            const form = formidable({
                keepExtensions: true,
                uploadDir: __dirname + "/../public/images/products",
            });

            form.parse(req, async (err, fields, files) => {
                const { name, description, typeId, stock, price, trending, slug } = fields;
                const image = files.image && files.image.newFilename;
                await Product.update(
                    {
                        name,
                        description,
                        image,
                        typeId,
                        stock,
                        price,
                        trending,
                        slug,
                    },
                    { where: { id: req.params.id } },
                );
                return res.send({ msg: "Product successfully updated" });
            });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to update product" });
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
