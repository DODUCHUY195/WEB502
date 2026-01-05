function demKyTu(chuoi: string, kyTu: string): number {
  let count = 0; //biến đếm

  for (const char of chuoi) { //duyệt từng ký tự trong chuỗi
    if (char === kyTu) { //nếu ký tự trùng thì tăng biến đếm
      count++;
    }
  }

  return count; //trả về số lần xuất hiện của ký tự
}

// Ví dụ
console.log(demKyTu("typescript", "t")); // 2
