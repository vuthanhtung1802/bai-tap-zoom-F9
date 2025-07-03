// length
var fruits = ["apple", "banana", "orange"];

// console.log(fruits.length);

// push - Thêm phần tử vào cuối mảng
// fruits.push("node")
// console.log(fruits);

// pop - Xóa phần tử cuối mảng
// var newFruits = fruits.pop()
// console.log(newFruits);

// unshift - Thêm phần tử vào đầu mảng
// var newFruits1 = fruits.unshift("node")
// console.log(newFruits1);


// shift - Xoá phần tử đầu tiên
// var newFruits2 = fruits.shift()
// console.log(newFruits2);

// slice(start, end) - Cắt mảng (không thay đổi mảng gốc)
// var newFruits = fruits.slice(1, 2)
// var newFruits1 = fruits.slice(1)
// console.log(newFruits1);
// console.log(newFruits);

// splice(start, deleteCount, ...items) - Thêm/xoá tại vị trí bất kỳ
// var newFruits = fruits.splice(1, 2)
// console.log(newFruits);

// forEach - Duyệt mảng, không trả giá trị
// var newFruits = fruits.forEach(fruit => {
//   console.log(fruit);
// })

// find(callback) - Tìm phần tử đầu tiên thỏa điều kiện
// var findFruits = fruits.find(item => {
//   console.log(item === "banana"); // trả giá trị true false
// })

// some(callback) - Trả true nếu ít nhất 1 phần tử đúng
// var someFruit = fruits.some(item => {
//   console.log(item === "banana"); // trả giá trị true false
// })

// every(callback) - Trả true nếu tất cả phần tử đúng
const students = [
  { id: 1, name: "An", age: 20 },
  { id: 2, name: "Bình", age: 22 },
  { id: 3, name: "Chi", age: 19 },
  { id: 4, name: "Dũng", age: 21 },
  { id: 5, name: "Hà", age: 20 }
]
// students.every((item) => {
//   console.log(item.age < 25);
// })

// filter(callback) - Trả mảng mới gồm các phần tử đúng (lọc)
// students.filter((student, index) => {
//   console.log(student);
//   console.log(index);
// })

// map(callback) - Trả mảng mới sau khi biến đổi từng phần tử
// students.map((item) => {
//   return item.age * 2
// })

// sort(compareFn) - Sắp xếp mảng (thay đổi mảng gốc)
// console.log(students.sort());

// reverse() - Đảo ngược mảng (thay đổi mảng gốc)
// students.reverse()

// concat(arr2) - Nối mảng mới (không thay đổi mảng gốc)
// students.concat(fruits)

// join(separator) - Gộp các phần tử thành chuỗi
// var item = fruits.join(",")
// console.log(item);

// includes(value) - Kiểm tra có chứa phần tử
// var includesFruit = fruits.includes("banana")
// console.log(includesFruit);

// indexOf(val) / lastIndexOf(val) - Tìm vị trí xuất hiện đầu/cuối
// var index = fruits.indexOf("banana")
// console.log(index);