// routes/nhaCungCap.js
const express = require("express");
const nhaCungCapController = require("../controllers/nhaCungCapController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => nhaCungCapController.getAllNhaCungCap(req, res, client));
    return router;
};

