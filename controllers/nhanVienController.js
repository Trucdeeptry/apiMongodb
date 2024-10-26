const { ObjectId } = require('mongodb');
const nhanVienController = {
    getAllNhanVien: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const nhanViens = await db.collection("NhanVien").find().toArray();
            res.status(200).json(nhanViens);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = nhanVienController;
