const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.showList);
router.post("/create", ProductController.store);
router.post("/edit/:id", ProductController.update);
router.get("/delete/:id", ProductController.destroy);
router.get("/:id", ProductController.show);

module.exports = router;
