const { Product } = require("../models");

const ProductController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const products = await Product.findAll({ offset: offset, limit: limit });
        return res.json({ products: products });
    },
};

module.exports = ProductController;
