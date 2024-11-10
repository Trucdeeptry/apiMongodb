const { ObjectId } = require('mongodb');
const nhanVienController = {
    getAllNhanVien: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const nhanViens = await db.collection("NhanVien").find().toArray();
            res.status(200).json(nhanViens);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new NhanVien
    addNhanVien: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newNhanVien = req.body;
            const result = await db.collection("NhanVien").insertOne(newNhanVien);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing NhanVien
    updateNhanVien: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            const result = await db.collection("NhanVien").updateOne(
                { _id: _id },
                { $set: updatedData }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "NhanVien not found" });
            }

            res.status(200).json({ message: "NhanVienupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a NhanVien
    deleteNhanVien: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const result = await db.collection("NhanVien").deleteOne({ _id:_id });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "NhanVien not found" });
            }

            res.status(200).json({ message: "NhanViendeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};


module.exports = nhanVienController;
