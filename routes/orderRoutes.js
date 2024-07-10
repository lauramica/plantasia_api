const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const { expressjwt: checkJwt } = require("express-jwt");
const permissionRequired = require("../middlewares/permissionRequired");

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);
router.get("/", permissionRequired.admin, OrderController.showList);
router.post("/create", permissionRequired.customer, OrderController.store);
router.post("/edit/:id", permissionRequired.admin, OrderController.update);
router.get("/:id", permissionRequired.admin, OrderController.show);

module.exports = router;
