const { Customer, Order } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const CustomerController = {
    showList: async (req, res) => {
        try {
            const limit = req.query.limit ? Number(req.query.limit) : 10;
            const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
            const customers = await Customer.findAll({ offset: offset, limit: limit });
            return res.json({ customers: customers });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake showing the customers" });
        }
    },
    show: async (req, res) => {
        try {
            const customer = await Customer.findByPk(req.params.id, {
                attributes: { exclude: ["password"] },
                include: Order,
            });
            return res.json({
                user: customer,
            });
        } catch (err) {
            console.log(err);
            return res.json({ error: "There was an error finding the customer" });
        }
    },
    create: async (req, res) => {
        try {
            await Customer.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
            });
            return res.json({ message: "Customer successfully created" });
        } catch (err) {
            console.log(err);
            return res.json({ error: "There was an error creating the customer" });
        }
    },

    update: async (req, res) => {
        try {
            const customer = await Customer.findByPk(req.params.id);
            await customer.update({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                phone: req.body.phone,
            });
            return res.json({ message: "Customer successfully updated" });
        } catch (err) {
            console.log(err);
            return res.json({ error: "There was an error updating the customer" });
        }
    },
    destroy: async (req, res) => {
        try {
            await Customer.destroy({ where: { id: req.params.id } });
            return res.json({ message: "Customer successfully deleted" });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake deleting the customer" });
        }
    },
    getToken: async (req, res) => {
        try {
            const customer = await Customer.findOne({ where: { email: req.body.email } });
            if (!customer) return res.json({ msg: "Verify your credentials" });

            const match = await bcrypt.compare(req.body.password, customer.password);
            if (!match) return res.json({ msg: "Verifique sus credenciales" });

            const token = jwt.sign({ sub: customer.id, role: "customer" }, process.env.JWT_SECRET);
            return res.json({
                token,
            });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake verifing the credentials" });
        }
    },
};

module.exports = CustomerController;
