function tinhChuViDienTichHinhChuNhat(chieuDai: number, chieuRong: number): { chuVi: number; dienTich: number } {
    const chuVi = 2 * (length + chieuDai);
    const dienTich = length * chieuRong;
    return { chuVi, dienTich };
}

console.log(tinhChuViDienTichHinhChuNhat(5, 10));