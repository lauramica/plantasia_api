const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.get("/", OrderController.showList);
router.post("/create", OrderController.store);
router.post("/edit/:id", OrderController.update);
router.get("/:id", OrderController.show);

module.exports = router;
