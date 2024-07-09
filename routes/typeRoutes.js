const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/TypeController");

router.get("/", TypeController.showList);
/*router.post("/create", TypeController.store);
router.post("/edit/:id", TypeController.update);
router.delete("/delete:id", TypeController.destroy);
router.get("/:id", TypeController.show); */

module.exports = router;
