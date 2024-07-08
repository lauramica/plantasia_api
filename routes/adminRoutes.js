const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.showList);

module.exports = router;