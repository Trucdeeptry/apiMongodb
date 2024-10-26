const { ObjectId } = require('mongodb');

const danhMucController = {
    getAllDanhMuc: async (req, res, client) => {
        try {
            const db = client.db("QL_OCake");
            const danhMucs = await db.collection("DanhMuc").find().toArray();
            res.status(200).json(danhMucs);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = danhMucController;
