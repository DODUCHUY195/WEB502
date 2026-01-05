function tinhChuViDienTichHinhChuNhat(chuVi: number, dienTich: number): { chuVi: number; dienTich: number } {
    const tinhChuVi = 2 * (length + chuVi);
    const tinhDienTich = length * dienTich;
    return { chuVi, dienTich };
}

console.log(tinhChuViDienTichHinhChuNhat(5, 10));