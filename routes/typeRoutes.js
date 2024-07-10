const express = require("express");
const router = express.Router();
const TypeController = require("../controllers/TypeController");
const { expressjwt: checkJwt } = require("express-jwt");
const permissionRequired = require("../middlewares/permissionRequired");

router.get("/", TypeController.showList);
router.get("/:id", TypeController.show);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);
router.post("/create", permissionRequired.admin, TypeController.store);
router.post("/edit/:id", permissionRequired.admin, TypeController.update);
router.get("/delete/:id", permissionRequired.admin, TypeController.destroy);

module.exports = router;
