const { Type } = require("../models");

const TypeController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const types = await Type.findAll({ offset: offset, limit: limit });
        return res.json({ types: types });
    },
};

module.exports = TypeController;
