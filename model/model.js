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
    ma_dh: String, // Mã đơn hàng
    ma_sp: String, // Mã sản phẩm
    so_luong: Number,
    don_gia: Number,
    chiet_khau: Number,
    thanh_tien: Number,
};

const danhMucSchema = {
    ma_dm: String,
    ten_dm: String,
    mo_ta: String,
};

const donHangSchema = {
    ma_dh: String,
    ngay_dat_hang: Date,
    tong_tien: Number,
    trang_thai: String,
    ghi_chu: String,
    ma_kh: String,
};

const gioHangSchema = {
    ma_sp: String,
    so_luong: Number,
    don_gia: Number,
    ma_kh: String,
};

const khachHangSchema = {
    ma_kh: String,
    ten_kh: String,
    so_dien_thoai: String,
    dia_chi: String,
    ngay_sinh: Date,
    ma_role: String,
    mat_khau: String,
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
    so_dien_thoai: String,
    dia_chi: String,
    gioi_tinh: String,
    ma_role: String,
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
