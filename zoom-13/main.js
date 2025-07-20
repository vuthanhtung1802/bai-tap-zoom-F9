// 1. length
// 2. toUpperCase,toLowerCase
// 3. trim(), trimStart, trimEnd
// 4. slice(start, end)
// 5. substring(start, end)
// 6. substr(start, length)
// 7. replace, replaceAll
// 8. str[0], str.charAt(0), str.at(0) - new
// 9. concat
// 10. padStart, padEnd
// 11. split

// Học 1 lần sử dụng nhiều lần (học chắc, code x3n, đúc kết)// Phương thức với string
// Từ khoá: string method javascript (MDN, W3C)
// 1. length -> trả về độ dài chuỗi
const course = "Javascript"; // 10
// console.log(course.length);

// 2. toUpperCase(), toLowerCase() -> trả về chuỗi in hoa, in thường
const newCourse = course.toUpperCase();

// const fullName = "hoan nguyen thanh";
// Hoan Nguyen Thanh, ["Hoan", "Nguyen", "Thanh"];

// 3. trim() -> xoá bỏ những ký tự trắng (space)
// trimStart, trimEnd
const name = "    Hoan Nguyen    ";
// console.log(name.trimStart());
// console.log(name.trimEnd());

// 4. slice (startIndex, endIndex) - cắt cả được 2 chiều (âm, dương)
const subSlice = name.slice(-6);
// console.log(subSlice);

// 5. substring(startIndex, endIndex) - (chỉ cắt với index - dương)
// const substringSlice = name.substring(0, 4);
// console.log(substringSlice);

// 6. substr(startIndex, length) - (vị trí bắt đầu cắt, số lượng ký tự cần cắt ra)
// const name = "Hoan Nguyen";
// console.log(name[3])
// const substrSlice = name.substr(0, 5); // Nguyen (5, 6)
// console.log(substrSlice.length);

// 7. replace, replaceAll --> thay thế chữ bằng chữ mới
// const fullName = "hoan nguyen thanh thanh";
// hoan nguyen hoan nguyen hoan nguyen 

// const newStr = fullName.replace("hoan nguyen thanh", "hoan nguyen")
// const newStr = fullName.replaceAll("thanh", "hoan nguyen");
// console.log(newStr)

// 8. trích xuất
// console.log(fullName[0]);

// last string index = length - 1
// console(fullName.length - 1)
// const newStr = fullName[fullName.length - 1];

// charAt(index) -> chỉ hỗ trợ index dương
// at(index) -> hỗ trợ cả index dương và âm
const name2 = "Tung Pham";
console.log(name2[10]); // undefined
// console.log(name2.charAt(-2));
// console.log(name2.at(0));

// 9. concat --> nỗi chuỗi
// var firstName = "Hoan ";
// var lastName = "Nguyen";

// var fullName = firstName + lastName;
// console.log(fullName);

// var fullName2 = firstName.concat(lastName);
// console.log(fullName2);

// 10. padStart, padEnd (nối thêm số lượng ký tự vào đầu, cuối)
const str1 = "5";
const newStr = str1.padStart(4, "0");
console.log("newStr", newStr + "d");

// 11. split(prefix); --> chuyển đổi chuỗi thành mảng
// const name3 = "javascript html css"; // ["Tung", "Pham"]
// const arrName = name3.split(" ");
// console.log(arrName);// Khai báo đầu vào `fullName` là tên của mọi người có dạng như sau fullName = "Hoan NGUYEN thanh", mong muốn output sẽ dạng
// Hoan Nguyen Thanh sử dụng các phương thức đã học của `string`