const { Customer } = require("../models");
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
            });
            return res.json({
                user: customer,
            });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake showing the customer" });
        }
    },
    create: async (req, res) => {
        try {
            const { firstname, lastname, email, password } = req.body;
            await Customer.create({
                firstname,
                lastname,
                email,
                password: await bcrypt.hash(password, 12),
            });
            return res.json({ message: "Customer successfully created" });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake creating the customer" });
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
            return res.json({ message: "Customer updated" });
        } catch (err) {
            console.error(err);
            res.json({ message: "There was a mistake updating the customer" });
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
            const costumer = await Costumer.findOne({ where: { email: req.body.email } });
            if (!costumer) return res.json({ msg: "Verify your credentials" });

            const match = await bcrypt.compare(req.body.password, costumer.password);
            if (!match) return res.json({ msg: "Verifique sus credenciales" });

            const token = jwt.sign({ sub: costumer.id }, process.env.JWT_SECRET_CUSTOMER);
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
