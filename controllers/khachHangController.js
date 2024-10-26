const { ObjectId } = require('mongodb');
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
};

module.exports = khachHangController;