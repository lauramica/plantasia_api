const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const CustomerController = require("../controllers/CustomerController");
const { admin, customer } = require("../middlewares/permissionRequired");

router.post("/tokens", CustomerController.getToken);
router.post("/", CustomerController.create);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);

router.get("/", admin, CustomerController.showList);
router.post("/:id", customer, CustomerController.update);

router.get("/:id/delete", CustomerController.destroy);
router.get("/:id", CustomerController.show);

module.exports = router;
