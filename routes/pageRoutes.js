const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ msg: "Welcome to the api of Plantasia!" }));

module.exports = router;
