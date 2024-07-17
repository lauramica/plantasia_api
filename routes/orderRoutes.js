const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/OrderController");
const { admin, customer } = require("../middlewares/permissionRequired");

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);

router.post("/create", customer, OrderController.store);

router.use(admin);

router.get("/", OrderController.showList);
router.post("/edit/:id", OrderController.update);
router.get("/:id", OrderController.show);

module.exports = router;
