const { Admin } = require("../models");

const AdminController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const admins = await Admin.findAll({ offset: offset, limit: limit });
        return res.json({ admins: admins });
    },
};

module.exports = AdminController;
