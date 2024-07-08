const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/TypeController");

router.get("/", TypeController.showList);

module.exports = router;
