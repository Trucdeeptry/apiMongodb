// routes/chiTietDonHang.js
const express = require("express");
const chiTietDonHangController = require("../controllers/chiTietDonHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => chiTietDonHangController.getAllChiTietDonHang(req, res, client));
    router.post("/", (req, res) => chiTietDonHangController.addChiTietDonHang(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_dh", (req, res) => chiTietDonHangController.updateChiTietDonHang(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_dh", (req, res) => chiTietDonHangController.deleteChiTietDonHang(req, res, client));
    return router;
};

