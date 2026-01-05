function demKyTu(chuoi: string, kyTu: string): number {
  let count = 0;

  for (const char of chuoi) {
    if (char === kyTu) {
      count++;
    }
  }

  return count;
}

// Ví dụ
console.log(demKyTu("typescript", "t")); // 2
