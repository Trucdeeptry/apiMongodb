const nhanVienController = require("../controllers/nhanVienController");
const express = require("express");
const router = express.Router();

module.exports= (client) => {
    router.get("/", (req, res) => nhanVienController.getAllNhanVien(req, res, client));
    // Add a new product
    router.post("/", (req, res) => nhanVienController.addNhanVien(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_nv", (req, res) => nhanVienController.updateNhanVien(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_nv", (req, res) => nhanVienController.deleteNhanVien(req, res, client));
    return router;
};

