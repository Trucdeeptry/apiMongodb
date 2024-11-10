// routes/nhaCungCap.js
const express = require("express");
const nhaCungCapController = require("../controllers/nhaCungCapController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => nhaCungCapController.getAllNhaCungCap(req, res, client));
    router.post("/", (req, res) => nhaCungCapController.addNhaCungCap(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_ncc", (req, res) => nhaCungCapController.updateNhaCungCap(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_ncc", (req, res) => nhaCungCapController.deleteNhaCungCap(req, res, client));
    return router;
};

