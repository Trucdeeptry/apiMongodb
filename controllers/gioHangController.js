const { ObjectId } = require('mongodb');
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
};

module.exports = gioHangController;
