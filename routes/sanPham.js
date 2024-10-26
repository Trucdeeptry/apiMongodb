const sanphamController = require("../controllers/sanPhamController");
const express = require("express");
const router = express.Router();

module.exports = (client) => {
    // Đính kèm client MongoDB cho các route
    router.get("/", (req, res) => sanphamController.getAllSanPham(req, res, client));
    return router;
};
