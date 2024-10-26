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
};

module.exports = nhaCungCapController;
