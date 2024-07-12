const { customAlphabet } = require("nanoid");
const { Order } = require("../models");
const formidable = require("formidable");

const OrderController = {
    showList: async (req, res) => {
        try {
            const orders = await Order.findAll();
            return res.json({ orders });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to show orders" });
        }
    },
    show: async (req, res) => {
        try {
            const order = await Order.findByPk(req.params.id);
            return res.json({ order });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to show order" });
        }
    },
    store: async (req, res) => {
        try {
            const { total_price, order_address, products, buyer, payment } = req.body;
            const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);
            const customerId = req.auth.sub;
            const order_id = nanoid();
            const order = await Order.create({
                order_id,
                total_price,
                order_address,
                products,
                buyer,
                payment,
                customerId,
            });
            return res.send({ msg: "Order successfully created", id: order.id });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to create order" });
        }
    },
    update: async (req, res) => {
        try {
            const { state } = req.body;

            await Order.update(
                {
                    state,
                },
                { where: { id: req.params.id } },
            );
            return res.send({ msg: "Order successfully updated" });
        } catch (err) {
            console.error(err);
            return res.send({ msg: "Failed to update order" });
        }
    },
};

module.exports = OrderController;
