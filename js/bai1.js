// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng[10 điểm]
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng
// ● Ví dụ: [3, 5, 88, 99, 76, 8, 4, 5, 85, 63] in ra 99

let array = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
//cach 1:
let max = Math.max(...array);
console.log("Gia tri lon nhat cua mang la: " + max);

//cach 2:
for (let i = 0; i < array.length; i++) {
    let max = array[0];
    if (max < array[i]) {
        max = array[i]
    }
}
console.log("Gia tri lon nhat cua mang la: " + max);

