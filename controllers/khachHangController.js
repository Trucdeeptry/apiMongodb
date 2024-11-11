const { ObjectId } = require("mongodb");
const khachHangController = {
    getAllKhachHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const khachHangs = await db.collection("KhachHang").find().toArray();
            res.status(200).json(khachHangs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new KhachHang
    addKhachHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newKhachHang = req.body;
            const result = await db.collection("KhachHang").insertOne(newKhachHang);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing KhachHang
    updateKhachHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            delete updatedData._id;

            const objectId = new ObjectId(_id);

            const result = await db
                .collection("KhachHang")
                .updateOne({ _id: objectId }, { $set: updatedData });

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "KhachHang not found" });
            }

            res.status(200).json({ message: "KhachHangupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a KhachHang
    deleteKhachHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id);

            const result = await db.collection("KhachHang").deleteOne({ _id: objectId });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "KhachHang not found" });
            }

            res.status(200).json({ message: "KhachHangdeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = khachHangController;
