function tinhTong(...numbers: number[]): number { //...numbers: number[] :gom tất cả các đối số thành một mảng
  return numbers.reduce((sum, num) => sum + num, 0); // duyệt mảng cộng dồn các phần tử,sum: là tổng tạm thời, num: là số đang duyệt,  0 là giá trị ban đầu
}

// Ví dụ
console.log(tinhTong(1,2,3,4,5)); // 15
