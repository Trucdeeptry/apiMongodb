// routes/danhMuc.js
const express = require("express");
const danhMucController = require("../controllers/danhMucController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => danhMucController.getAllDanhMuc(req, res, client));
    router.post("/", (req, res) => danhMucController.addDanhMuc(req, res, client));

    // Update a product by ma_sp
    router.put("/:_id", (req, res) => danhMucController.updateDanhMuc(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:_id", (req, res) => danhMucController.deleteDanhMuc(req, res, client));
    return router;
};


