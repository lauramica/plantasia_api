const pageRoutes = require("./pageRoutes");
const productRoutes = require("./productRoutes");

module.exports = (app) => {
    app.use("/", pageRoutes);
    app.use("/products", productRoutes);
    app.get("*", (req, res) => res.status(404).json({ msg: "404 - page not found" }));
};
