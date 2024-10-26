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
};

module.exports = roleController;
