// index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const sanphamRoute = require("./routes/sanPham");
const chiTietDonHangRoute = require("./routes/chiTietDonHang");
const danhMucRoute = require("./routes/danhMuc");
const donHangRoute = require("./routes/donHang");
const gioHangRoute = require("./routes/gioHang");
const khachHangRoute = require("./routes/khachHang");
const nhaCungCapRoute = require("./routes/nhaCungCap");
// const nhanVienRoute = require("./routes/nhanvien");
const roleRoute = require("./routes/role");
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();

// Kết nối tới MongoDB Atlas
const uri = process.env.MONGODB_URL;    
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Đã kết nối tới MongoDB Atlas");
    } catch (error) {
        console.error("Không thể kết nối tới MongoDB Atlas:", error);
        process.exit(1);
    }
}

// Gọi hàm kết nối
connectDB();

// Tạo ứng dụng express
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// Routes
app.use("/api/sanpham", sanphamRoute(client));
app.use("/api/chitietdonhang", chiTietDonHangRoute(client));
app.use("/api/danhmuc", danhMucRoute(client));
app.use("/api/donhang", donHangRoute(client));
app.use("/api/giohang", gioHangRoute(client));
app.use("/api/khachhang", khachHangRoute(client));
app.use("/api/nhacungcap", nhaCungCapRoute(client));
// app.use("/api/nhanvien", nhanVienRoute(client));
app.use("/api/role", roleRoute(client));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
