const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.showList);
router.get("/:id", CustomerController.show);

module.exports = router;
