const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.showList);
router.get("/:id", CustomerController.show);
router.post("/", CustomerController.create);
router.post("/:id", CustomerController.update);
// router.get("/:id", CustomerController.destroy);

module.exports = router;
