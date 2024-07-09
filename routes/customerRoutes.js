const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");
const permissionRequired = require("../middlewares/permissionRequired");

router.post("/tokens", CustomerController.getToken);
router.post("/", CustomerController.create);

router.get("/", permissionRequired.admin, CustomerController.showList);
router.post("/:id", permissionRequired.customer, CustomerController.update);

router.use(permissionRequired.admin || permissionRequired.customer);

router.get("/:id/delete", CustomerController.destroy);
router.get("/:id", CustomerController.show);

module.exports = router;
