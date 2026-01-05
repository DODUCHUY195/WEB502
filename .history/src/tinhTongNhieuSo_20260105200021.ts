function tinhTong(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Ví dụ
console.log(tinhTong()); // 15
