"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tinhTong(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Ví dụ
console.log(tinhTong(1, 2, 3, 4, 5)); // 15
