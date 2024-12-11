const { ObjectId } = require("mongodb");
const donHangController = {
    getAllDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const donHangs = await db.collection("DonHang").find().toArray();
            res.status(200).json(donHangs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // Add a new DonHang
    addDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newDonHang = req.body;
            const result = await db.collection("DonHang").insertOne(newDonHang);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing DonHang
    updateDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id);

            const updatedData = req.body;
            delete updatedData._id;

            const result = await db
                .collection("DonHang")
                .updateOne({ _id: objectId }, { $set: updatedData });

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "DonHang not found" });
            }

            res.status(200).json({ message: "DonHangupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a DonHang
    deleteDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id);

            const result = await db.collection("DonHang").deleteOne({ _id: objectId });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "DonHang not found" });
            }

            res.status(200).json({ message: "DonHangdeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    // patch
    patchDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { _id } = req.params; // Assumes the id is passed as a URL parameter
            const objectId = new ObjectId(_id);
    
            const patchData = req.body;
    
            const result = await db
                .collection("DonHang")
                .updateOne({ _id: objectId }, { $set: patchData });
    
            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "DonHang not found" });
            }
    
            res.status(200).json({ message: "DonHang updated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = donHangController;
