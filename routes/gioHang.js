const { ObjectId } = require('mongodb');
const express = require("express");
const gioHangController = require("../controllers/gioHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => gioHangController.getAllGioHang(req, res, client));
    router.post("/", (req, res) => gioHangController.addGioHang(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_kh", (req, res) => gioHangController.updateGioHang(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_kh", (req, res) => gioHangController.deleteGioHang(req, res, client));
    return router;
};

