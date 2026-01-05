function tinhChuViDienTichHinhChuNhat(chieuDai: number, chieuRong: number): { chuVi: number; dienTich: number } {
    const chuVi = 2 * (chieuDai + chieuRong);
    const dienTich = chieuDai * chieuRong;
    return { chuVi, dienTich };
}

console.log(tinhChuViDienTichHinhChuNhat(5, 10));