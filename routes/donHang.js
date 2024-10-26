// routes/donHang.js
const express = require("express");
const donHangController = require("../controllers/donHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => donHangController.getAllDonHang(req, res, client));
    return router;
};

