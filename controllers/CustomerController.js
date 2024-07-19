const { nanoid } = require("nanoid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { Customer, Order } = require("../models");

const CustomerController = {
    showList: async (req, res) => {
        try {
            const options = {};
            const limit = Number(req.query.limit);
            const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;

            if (limit) options.limit = limit;
            if (offset) options.offset = offset;

            const customers = await Customer.findAll(options);
            return res.json({ customers });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "There was a mistake showing the customers" });
        }
    },
    show: async (req, res) => {
        try {
            const customer = await Customer.findByPk(req.params.id, {
                attributes: { exclude: ["password"] },
                include: [{ model: Order }],
                order: [[Order, "createdAt", "DESC"]],
            });

            return res.json({ customer });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "There was an error finding the customer" });
        }
    },
    create: async (req, res) => {
        try {
            await Customer.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 12),
            });

            return res.json({ msg: "Customer successfully created" });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "There was an error creating the customer" });
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
                cart: req.body.cart,
            });

            await customer.save();
            return res.json({ msg: "Customer successfully updated" });
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: "There was an error updating the customer" });
        }
    },
    destroy: async (req, res) => {
        if (req.params.id !== 1) {
            try {
                const customer = await Customer.findByPk(req.params.id);
                const secretPassword = nanoid();

                await customer.update({
                    email: `deleted_${nanoid()}@customer.com`,
                    firstname: "deleted",
                    lastname: "customer",
                    address: {
                        address: "-",
                        state: "-",
                        city: "-",
                        country: "-",
                        postalcode: "-",
                    },
                    phone: "-",
                    cart: [],
                    password: await bcrypt.hash(secretPassword, 12),
                });

                await Customer.destroy({ where: { id: req.params.id } });
                return res.json({ msg: "Customer successfully deleted" });
            } catch (err) {
                console.error(err);
                return res.status(400).json({ error: "There was a mistake deleting the customer" });
            }
        }
        return res.status(401).json({ error: "You cannot delete the default customer" });
    },
    getToken: async (req, res) => {
        try {
            const customer = await Customer.findOne({ where: { email: req.body.email } });
            if (!customer) return res.status(403).json({ error: "Verify your credentials" });

            const match = await bcrypt.compare(req.body.password, customer.password);
            if (!match) return res.status(403).json({ error: "Verifique sus credenciales" });

            const token = jwt.sign({ sub: customer.id, role: "customer" }, process.env.JWT_SECRET);

            return res.json({
                token,
                id: customer.id,
                firstname: customer.firstname,
                lastname: customer.lastname,
                email: customer.email,
                address: customer.address,
                phone: customer.phone,
            });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "There was a mistake verifing the credentials" });
        }
    },
};

module.exports = CustomerController;
