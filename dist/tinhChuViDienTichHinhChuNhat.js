"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tinhChuViDienTichHinhChuNhat(chieuDai, chieuRong) {
    const chuVi = 2 * (chieuDai + chieuRong);
    const dienTich = chieuDai * chieuRong;
    return { chuVi, dienTich };
}
console.log(tinhChuViDienTichHinhChuNhat(5, 10));
