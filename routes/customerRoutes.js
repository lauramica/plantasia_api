const express = require("express");
const router = express.Router();
const { expressjwt: checkJwt } = require("express-jwt");
const CustomerController = require("../controllers/CustomerController");
const permissionRequired = require("../middlewares/permissionRequired");

router.post("/tokens", CustomerController.getToken);
router.post("/", CustomerController.create);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);

router.get("/", permissionRequired.admin, CustomerController.showList);
router.post("/:id", permissionRequired.customer, CustomerController.update);

router.get("/:id/delete", CustomerController.destroy);
router.get("/:id", CustomerController.show);

module.exports = router;
