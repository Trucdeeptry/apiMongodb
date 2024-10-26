const { ObjectId } = require('mongodb');
const express = require("express");
const gioHangController = require("../controllers/gioHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => gioHangController.getAllGioHang(req, res, client));
    return router;
};

