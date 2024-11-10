const { ObjectId } = require('mongodb');

const sanphamController = {
    // get all sanpham
    getAllSanPham: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake"); // Thay đổi tên database nếu cần
            const sanphams = await db.collection("SanPham").find().toArray();
            res.status(200).json(sanphams);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    
    // Add a new sanpham
    addSanPham: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newSanPham = req.body;
            const result = await db.collection("SanPham").insertOne(newSanPham);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing sanpham
    updateSanPham: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id  } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            const result = await db.collection("SanPham").updateOne(
                { _id: _id  },
                { $set: updatedData }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({ message: "Product updated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a sanpham
    deleteSanPham: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const result = await db.collection("SanPham").deleteOne({ _id: _id });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json({ message: "Product deleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = sanphamController;
