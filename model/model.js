// models.js

const sanphamSchema = {
    ma_sp: String,
    ten_sp: String,
    gia: Number,
    so_luong: Number,
    ngay_sx: Date,
    ngay_nhap: Date,
    ngay_hh: Date,
    ma_dm: String,
    ma_ncc: String,
    mo_ta: String,
};

const chiTietDonHangSchema = {
    ma_ctdh: String,
    ma_dh: String, // Mã đơn hàng
    ma_sp: String, // Mã sản phẩm
    so_luong: Number,
    gia: Number,
};

const danhMucSchema = {
    ma_dm: String,
    ten_dm: String,
};

const donHangSchema = {
    ma_dh: String,
    ma_kh: String, // Mã khách hàng
    ngay_dat: Date,
    tong_tien: Number,
    trang_thai: String,
};

const gioHangSchema = {
    ma_gio_hang: String,
    ma_kh: String, // Mã khách hàng
    san_pham: [
        {
            ma_sp: String,
            so_luong: Number,
        },
    ],
};

const khachHangSchema = {
    ma_kh: String,
    ten_kh: String,
    email: String,
    so_dien_thoai: String,
    dia_chi: String,
};

const nhaCungCapSchema = {
    ma_ncc: String,
    ten_ncc: String,
    dia_chi: String,
    so_dien_thoai: String,
};

const nhanVienSchema = {
    ma_nv: String,
    ten_nv: String,
    email: String,
    so_dien_thoai: String,
    dia_chi: String,
    chuc_vu: String,
};

const roleSchema = {
    ma_role: String,
    ten_role: String,
};

module.exports = {
    sanphamSchema,
    chiTietDonHangSchema,
    danhMucSchema,
    donHangSchema,
    gioHangSchema,
    khachHangSchema,
    nhaCungCapSchema,
    nhanVienSchema,
    roleSchema,
};
