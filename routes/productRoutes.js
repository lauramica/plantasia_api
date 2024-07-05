const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.showList);

module.exports = router;
