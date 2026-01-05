"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tinhChuViDienTichHinhChuNhat(length, width) {
    const chuVi = 2 * (length + width);
    const dienTich = length * width;
    return { chuVi, dienTich };
}
console.log(tinhChuViDienTichHinhChuNhat(5, 10));
