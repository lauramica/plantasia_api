const { customAlphabet } = require("nanoid");

const { Order, Product } = require("../models");

const OrderController = {
    showList: async (req, res) => {
        try {
            const options = { order: [["createdAt", "DESC"]] };
            const limit = Number(req.query.limit);
            const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;

            if (limit) options.limit = limit;
            if (offset) options.offset = offset;

            const orders = await Order.findAll(options);
            return res.json({ orders });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "Failed to show orders" });
        }
    },
    show: async (req, res) => {
        try {
            const order = await Order.find(req.params.id);
            return res.json({ order });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "Failed to find order" });
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
            return res.json({ msg: "Order successfully created", id: order.order_id });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ error: "Failed to create order" });
        }
    },
    update: async (req, res) => {
        try {
            await Order.update({ state: req.body.state }, { where: { id: req.params.id } });
            return res.json({ msg: "Order successfully updated" });
        } catch (err) {
            console.error(err);
            return res.status(400).json({ msg: "Failed to update order" });
        }
    },
};

module.exports = OrderController;
