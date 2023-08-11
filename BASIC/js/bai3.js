// Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó[30 điểm]
// ● Đầu vào: nhập tháng 8 năm 2023
// ● Đầu ra: số ngày trong tháng đó là 31

let month = +prompt("Nhập vào 1 tháng bất kỳ trong năm để kiểm tra số ngày trong tháng");
let year = +prompt("Nhập vào 1 năm bất kỳ");
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} năm ${year} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} năm ${year} có 30 ngày`);
        break;
    case 2:
        if (isLeapYear(year)) {
            console.log(`Tháng 2 năm ${year} có 29 ngày`);
            break;
        } else {
            console.log(`Tháng 2 năm ${year} có 28 ngày`);
        }
        break;
    default:
        console.log("Tháng bạn nhập không tồn tại");
}
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
