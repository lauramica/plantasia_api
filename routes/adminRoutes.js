const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");

router.get("/", AdminController.showList);
router.get("/:id", AdminController.show);
router.post("/", AdminController.create);
router.post("/:id", AdminController.update);
router.get("/:id/delete", AdminController.destroy);

module.exports = router;
