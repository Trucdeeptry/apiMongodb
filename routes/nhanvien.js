// routes/nhanVien.js
const express = require("express");
const nhanVienController = require("../controllers/nhanVienController");
const router = express.Router();

module.exports= (client) => {
    router.get("/", (req, res) => nhanVienController.getAllNhanVien(req, res, client));
    return router;
};

