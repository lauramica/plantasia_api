const { Category } = require("../models");

const CategoryController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const categories = await Category.findAll({ offset: offset, limit: limit });
        return res.json({ categories: categories });
    },
};

module.exports = CategoryController;
