// routes/donHang.js
const express = require("express");
const donHangController = require("../controllers/donHangController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => donHangController.getAllDonHang(req, res, client));
    router.post("/", (req, res) => donHangController.addDonHang(req, res, client));

    // Update a product by ma_sp
    router.put("/:_id", (req, res) => donHangController.updateDonHang(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:_id", (req, res) => donHangController.deleteDonHang(req, res, client));
    router.patch("/:_id", async (req, res) => {
        await donHangController.patchDonHang(req, res, client);
    });

    return router;
};
