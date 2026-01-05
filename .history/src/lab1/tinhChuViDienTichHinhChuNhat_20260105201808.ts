function tinhChuViDienTichHinhChuNhat(chuVi: number, dienTich: number): { chuVi: number; dienTich: number } {
    const tinhChuVi = 2 * (chuVi + dienTich);
    const tinhDienTich = chuVi * dienTich;
    return { tinhChuVi, tinhDienTich };
}

console.log(tinhChuViDienTichHinhChuNhat(5, 10));