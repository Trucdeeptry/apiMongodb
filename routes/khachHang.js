// routes/khachHang.js
const express = require("express");
const khachHangController = require("../controllers/khachHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => khachHangController.getAllKhachHang(req, res, client));
    return router;
};

