const { Customer } = require("../models");

const CustomerController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const customers = await Customer.findAll({ offset: offset, limit: limit });
        return res.json({ customers: customers });
    },
};

module.exports = CustomerController;