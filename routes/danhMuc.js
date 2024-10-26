// routes/danhMuc.js
const express = require("express");
const danhMucController = require("../controllers/danhMucController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => danhMucController.getAllDanhMuc(req, res, client));
    return router;
};


