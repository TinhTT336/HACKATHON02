// Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng(space) ở đầu và cuối
// câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
// trong từ viết thường[30 điểm]
// ● Đầu vào: Câu là một chuỗi các ký tự
// ● Đầu ra: In ra chuỗi đã được chuẩn hóa.
// ● Ví dụ
// ○ Cho " this is A tEst "; In ra "This Is A Test"
// ○ Cho "heLlo riKkei academy"; In ra "Hello Rikkei Academy”

let string = " this is A tEst ";
// console.log(string);
function capitalizeFirstChar() {
    let array = string.trim().toLowerCase().split(" ");
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
        let word = array[i].split("");
        word[0] = word[0].toUpperCase();
        array[i] = word.join("");
    }
    return array.join(" ");
}
console.log(capitalizeFirstChar());



