// routes/chiTietDonHang.js
const express = require("express");
const chiTietDonHangController = require("../controllers/chiTietDonHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => chiTietDonHangController.getAllChiTietDonHang(req, res, client));
    return router;
};

