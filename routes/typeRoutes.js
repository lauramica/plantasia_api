const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();

const TypeController = require("../controllers/TypeController");
const { admin } = require("../middlewares/permissionRequired");

router.get("/", TypeController.showList);
router.get("/:id", TypeController.show);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);
router.use(admin);

router.post("/create", TypeController.store);
router.post("/edit/:id", TypeController.update);
router.get("/delete/:id", TypeController.destroy);

module.exports = router;
