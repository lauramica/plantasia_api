const pageRoutes = require("./pageRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const customerRoutes = require("./customerRoutes");
const orderRoutes = require("./orderRoutes");
const typeRoutes = require("./typeRoutes");

module.exports = (app) => {
    app.use("/", pageRoutes);
    app.use("/products", productRoutes);
    app.use("/admins", adminRoutes);
    app.use("/customers", customerRoutes);
    app.use("/orders", orderRoutes);
    app.use("/types", typeRoutes);
    app.get("*", (req, res) => res.status(404).json({ msg: "404 - page not found" }));
};
