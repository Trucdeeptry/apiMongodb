const { ObjectId } = require("mongodb");
const gioHangController = {
    getAllGioHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const gioHangs = await db.collection("GioHang").find().toArray();
            res.status(200).json(gioHangs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getGioHangByMAKH: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { ma_kh } = req.params; // Lấy ma_kh từ URL
            const gioHangs = await db.collection("GioHang").find({ ma_kh }).toArray();
            res.status(200).json(gioHangs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new GioHang
    addGioHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newGioHang = req.body;
            const result = await db.collection("GioHang").insertOne(newGioHang);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing GioHang
    updateGioHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            delete updatedData._id;

            const objectId = new ObjectId(_id);

            const result = await db
                .collection("GioHang")
                .updateOne({ _id: objectId }, { $set: updatedData });

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "GioHang not found" });
            }

            res.status(200).json({ message: "GioHangupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a GioHang
    deleteGioHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id);

            const result = await db.collection("GioHang").deleteOne({ _id: objectId });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "GioHang not found" });
            }

            res.status(200).json({ message: "GioHangdeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = gioHangController;
