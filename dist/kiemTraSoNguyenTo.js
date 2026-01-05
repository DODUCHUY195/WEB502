"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function laSoNguyenTo(n) {
    if (n < 2 || !Number.isInteger(n))
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
// Ví dụ
console.log(laSoNguyenTo(7)); // true
console.log(laSoNguyenTo(10)); // false
