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
};

module.exports = sanphamController;
