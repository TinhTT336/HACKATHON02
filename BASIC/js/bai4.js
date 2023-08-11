// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort[30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr = [3, 25, 38, 49, 12]; In ra arr = [49, 38, 25, 12, 3]

//su dung ham sort
let arr = [3, 25, 38, 49, 12];
let newArr = arr.sort(function (a, b) { return b - a });
console.log(newArr);

//khong su dung ham sort
function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    } console.log(arr);
}
sortDescending(arr);

