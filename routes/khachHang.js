// routes/khachHang.js
const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => khachHangController.getAllKhachHang(req, res, client));
    router.post("/", (req, res) => khachHangController.addKhachHang(req, res, client));

    // Update a product by ma_sp
    router.put("/:_id", (req, res) => khachHangController.updateKhachHang(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:_id", (req, res) => khachHangController.deleteKhachHang(req, res, client));
    return router;
};

