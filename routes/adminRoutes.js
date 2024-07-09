const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { expressjwt: checkJwt } = require("express-jwt");

router.post("/tokens", AdminController.getToken);

router.use(
    checkJwt({
        secret: process.env.JWT_SECRET_ADMIN,
        algorithms: ["HS256"],
    }),
);

router.get("/", AdminController.showList);
router.post("/", AdminController.create);
router.get("/:id/delete", AdminController.destroy);
router.get("/:id", AdminController.show);
router.post("/:id", AdminController.update);

module.exports = router;
