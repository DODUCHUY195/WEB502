function tinhChuViDienTichHinhChuNhat(chuVi: number, dienTich: number): { chuVi: number; dienTich: number } {
    const chuVi = 2 * (length + chuVi);
    const dienTich = length * dienTich;
    return { chuVi, dienTich };
}

console.log(tinhChuViDienTichHinhChuNhat(5, 10));