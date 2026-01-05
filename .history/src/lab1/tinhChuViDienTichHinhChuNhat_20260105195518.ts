function tinhChuViDienTichHinhChuNhat(length: number, width: number): { chuVi: number; dienTich: number } {
    const chuVi = 2 * (length + width);
    const dienTich = length * width;
    return { chuVi, dienTich };
}

console.log(tinhChuViDienTichHinhChuNhat(5, 10));