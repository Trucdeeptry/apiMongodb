const sanphamController = require("../controllers/sanPhamController");
const express = require("express");
const router = express.Router();

module.exports = (client) => {
    // Đính kèm client MongoDB cho các route
    router.get("/", (req, res) => sanphamController.getAllSanPham(req, res, client));
   
    // Add a new product
    router.post("/", (req, res) => sanphamController.addSanPham(req, res, client));

    // Update a product by _id
    router.put("/:_id", (req, res) => sanphamController.updateSanPham(req, res, client));

    // Delete a product by _id
    router.delete("/:_id", (req, res) => sanphamController.deleteSanPham(req, res, client));

    return router;
};
