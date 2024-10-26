const { ObjectId } = require('mongodb');
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
};

module.exports = donHangController;
