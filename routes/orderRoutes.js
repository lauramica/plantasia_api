const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/", OrderController.showList);

module.exports = router;
