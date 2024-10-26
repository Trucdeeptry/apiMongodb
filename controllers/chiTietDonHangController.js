const { ObjectId } = require('mongodb');

const chiTietDonHangController = {
    getAllChiTietDonHang: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const chiTietDonHangs = await db.collection("ChiTietDonHang").find().toArray();
            res.status(200).json(chiTietDonHangs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = chiTietDonHangController;
