// routes/khachHang.js
const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => khachHangController.getAllNhaKhachHang(req, res, client));
    router.post("/", (req, res) => khachHangController.addNhaKhachHang(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_kh", (req, res) => khachHangController.updateNhaKhachHang(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_kh", (req, res) => khachHangController.deleteNhaKhachHang(req, res, client));
    return router;
};

