const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.showList);

module.exports = router;
