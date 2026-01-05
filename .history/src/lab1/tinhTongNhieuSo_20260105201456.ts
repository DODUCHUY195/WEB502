function tinhTong(...numbers: number[]): number { //...numbers: number[] :gom tất cả các đối số thành một mảng
  return numbers.reduce((sum, num) => sum + num, 0); // duyệt mảng cộng dồn các phần tử
}

// Ví dụ
console.log(tinhTong(1,2,3,4,5)); // 15
