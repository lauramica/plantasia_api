const { Customer } = require("../models");

const CustomerController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const customers = await Customer.findAll({ offset: offset, limit: limit });
        return res.json({ customers: customers });
    },
    show: async (req, res) => {
        const customer = await Customer.findByPk(req.params.id, {
            attributes: { exclude: ["password"] },
        });
        return res.json({
            user: customer,
        });
    },
    create: async (req, res) => {
        await Customer.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        });
        return res.json({ message: "Customer successfully created" });
    },

    update: async (req, res) => {
        const customer = await Customer.findByPk(req.params.id);
        await customer.update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            phone: req.body.phone,
        });
        return res.json({ message: "Usuario editado" });
    },
};

module.exports = CustomerController;
