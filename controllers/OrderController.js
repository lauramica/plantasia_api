const { Order } = require("../models");

const OrderController = {
    showList: async (req, res) => {
        const limit = req.query.limit ? Number(req.query.limit) : 10;
        const offset = req.query.page ? (Number(req.query.page) - 1) * limit : 0;
        const orders = await Order.findAll({ offset: offset, limit: limit });
        return res.json({ orders: orders });
    },
};

module.exports = OrderController;
