const { ObjectId } = require('mongodb');
const nhaCungCapController = {
    getAllNhaCungCap: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const nhaCungCaps = await db.collection("NhaCungCap").find().toArray();
            res.status(200).json(nhaCungCaps);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new NhaCungCap
    addNhaCungCap: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newNhaCungCap = req.body;
            const result = await db.collection("NhaCungCap").insertOne(newNhaCungCap);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing NhaCungCap
    updateNhaCungCap: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const {_id } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            const objectId = new ObjectId(_id)

            const result = await db.collection("NhaCungCap").updateOne(
                {_id:objectId },
                { $set: updatedData }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "NhaCungCap not found" });
            }

            res.status(200).json({ message: "NhaCungCapupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a NhaCungCap
    deleteNhaCungCap: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id)

            const result = await db.collection("NhaCungCap").deleteOne({_id:objectId });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "NhaCungCap not found" });
            }

            res.status(200).json({ message: "NhaCungCapdeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = nhaCungCapController;
