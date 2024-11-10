
// routes/role.js
const express = require("express");
const roleController = require("../controllers/roleController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => roleController.getAllRole(req, res, client));

    // Add a new product
    router.post("/", (req, res) => roleController.addRole(req, res, client));

    // Update a product by ma_sp
    router.put("/:ma_role", (req, res) => roleController.updateRole(req, res, client));

    // Delete a product by ma_sp
    router.delete("/:ma_role", (req, res) => roleController.deleteRole(req, res, client));
    return router;
};