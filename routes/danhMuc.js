// routes/danhMuc.js
const express = require("express");
const danhMucController = require("../controllers/danhMucController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => danhMucController.getAllDanhMuc(req, res, client));
    router.post("/", (req, res) => danhMucController.addDanhMuc(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_dm", (req, res) => danhMucController.updateDanhMuc(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_dm", (req, res) => danhMucController.deleteDanhMuc(req, res, client));
    return router;
};


