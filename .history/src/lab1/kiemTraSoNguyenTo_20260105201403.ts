function laSoNguyenTo(n: number): boolean {
  if (n < 2 || !Number.isInteger(n)) return false; //số nguyên tố phải lớn hơn hoặc bằng 2 và là số nguyên

  for (let i = 2; i <= Math.sqrt(n); i++) { //kiểm tra từ 2 đến căn bậc hai của n
    if (n % i === 0) return false; //nếu chia hết thì trả về false
  }

  return true; //ngược lại trả về true
}

// Ví dụ
console.log(laSoNguyenTo(7));  // true
console.log(laSoNguyenTo(10)); // false
