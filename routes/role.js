
// routes/role.js
const express = require("express");
const roleController = require("../controllers/roleController");
const router = express.Router();

module.exports = (client) => {
    router.get("/", (req, res) => roleController.getAllRole(req, res, client));
    return router;
};