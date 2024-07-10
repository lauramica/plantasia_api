const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const { expressjwt: checkJwt } = require("express-jwt");
const permissionRequired = require("../middlewares/permissionRequired");

router.get("/", ProductController.showList);
router.get("/:id", ProductController.show);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);
router.post("/create", permissionRequired.admin, ProductController.store);
router.post("/edit/:id", permissionRequired.admin, ProductController.update);
router.get("/delete/:id", permissionRequired.admin, ProductController.destroy);

module.exports = router;
