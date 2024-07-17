const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");
const { admin } = require("../middlewares/permissionRequired");

router.get("/", ProductController.showList);
router.get("/:id", ProductController.show);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);
router.use(admin);

router.post("/create", ProductController.store);
router.post("/edit/:id", ProductController.update);
router.get("/delete/:id", ProductController.destroy);

module.exports = router;
