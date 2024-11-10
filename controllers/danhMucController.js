const { ObjectId } = require('mongodb');

const danhMucController = {
    getAllDanhMuc: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const danhMucs = await db.collection("DanhMuc").find().toArray();
            res.status(200).json(danhMucs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new DanhMuc
    addDanhMuc: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newDanhMuc = req.body;
            const result = await db.collection("DanhMuc").insertOne(newDanhMuc);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing DanhMuc
    updateDanhMuc: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            const objectId = new ObjectId(_id)

            const result = await db.collection("DanhMuc").updateOne(
                { _id: objectId },
                { $set: updatedData }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "DanhMuc not found" });
            }

            res.status(200).json({ message: "DanhMucupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a DanhMuc
    deleteDanhMuc: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id)

            const result = await db.collection("DanhMuc").deleteOne({ _id: objectId });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "DanhMuc not found" });
            }

            res.status(200).json({ message: "DanhMucdeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
};

module.exports = danhMucController;
