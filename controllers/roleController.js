const { ObjectId } = require('mongodb');
const roleController = {
    getAllRole: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const roles = await db.collection("Role").find().toArray();
            res.status(200).json(roles);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    
    // Add a new Role
    addRole: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const newRole = req.body;
            const result = await db.collection("Role").insertOne(newRole);
            res.status(201).json({ message: "Product added successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update an existing Role
    updateRole: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { ma_role } = req.params; // Assumes the id is passed as a URL parameter
            const updatedData = req.body;
            const result = await db.collection("Role").updateOne(
                { ma_role: ma_role },
                { $set: updatedData }
            );

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: "Role not found" });
            }

            res.status(200).json({ message: "Roleupdated successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a Role
    deleteRole: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const { ma_role } = req.params; // Assumes the id is passed as a URL parameter
            const result = await db.collection("Role").deleteOne({ ma_role: ma_role });

            if (result.deletedCount === 0) {
                return res.status(404).json({ message: "Role not found" });
            }

            res.status(200).json({ message: "Roledeleted successfully", result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = roleController;
