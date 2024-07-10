const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { expressjwt: checkJwt } = require("express-jwt");
const permissionRequired = require("../middlewares/permissionRequired");

router.post("/tokens", AdminController.getToken);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET,
        algorithms: ["HS256"],
    }),
);
router.use(permissionRequired.admin);
router.get("/", AdminController.showList);
router.post("/", AdminController.create);
router.get("/:id/delete", AdminController.destroy);
router.get("/:id", AdminController.show);
router.post("/:id", AdminController.update);

module.exports = router;
