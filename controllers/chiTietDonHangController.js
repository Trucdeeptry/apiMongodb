const { ObjectId } = require('mongodb');

const chiTietDonHangController = {
    getAllChiTietDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const chiTietDonHangs = await db.collection("ChiTietDonHang").find().toArray();
            res.status(200).json(chiTietDonHangs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new ChiTietDonHang
    addChiTietDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newChiTietDonHang = req.body;
            const result = await db.collection("ChiTietDonHang").insertOne(newChiTietDonHang);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing ChiTietDonHang
    updateChiTietDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { ma_dh } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            const result = await db.collection("ChiTietDonHang").updateOne(
                { ma_dh: ma_dh },
                { $set: updatedData }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "ChiTietDonHang not found" });
            }

            res.status(200).json({ message: "ChiTietDonHangupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a ChiTietDonHang
    deleteChiTietDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { ma_dh } = req.params; // Assumes the id is passed as a URL parameter
            const result = await db.collection("ChiTietDonHang").deleteOne({ ma_dh: ma_dh });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "ChiTietDonHang not found" });
            }

            res.status(200).json({ message: "ChiTietDonHangdeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

};

module.exports = chiTietDonHangController;
