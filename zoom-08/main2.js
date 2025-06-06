import { isArray, isNumber, isUndefined, isString } from "./main.js";

// bai 1
const welcomeUser = (name) => {
  let isNotNameString = !isString(name)

  if (isNotNameString) return "Tên không hợp lệ"
  return `Chào mừng ${name}`
}

// console.log(welcomeUser("tung"));

// bai 2: check tuổi
function calculateAge(birthYear) {

  let d = new Date();
  let currentYear = d.getFullYear();
  let result = currentYear - birthYear;
  let isNotAge = !isNumber(result)
  if (isNotAge) return -1;
  return result;
}

// console.log(calculateAge(2000));

// bai 3:  
function getElementAtIndex(array, index) {
  let isNotArray = !isArray(array)
  let isNotNumber = !isNumber(index)

  if (isNotArray || isNotNumber || index < 0)
    return null
  return array[index]
}

// bai 4: check empty
function checkEmpty(value) {
  let checkValueIsNull = isNull(value)
  let checkValueIsUndefined = isUndefined(value)

  return (checkValueIsNull || checkValueIsUndefined) ? "Trống" : "Không trống"
}

// calculateAddition
function calculateAddition(a, b) {
  let aIsNum = isNumber(a)
  let bIsNum = isNumber(b) || !isString(b)
  if (aIsNum && bIsNum) return a + b
  return 0
}

// console.log(calculateAddition(2, "4"));

// getFirstCharacter
const getFirstCharacter = (str) => {
  let isStr = str.trim()
  let hasFirstCharacter = isString(isStr) && str !== ""

  if (isStr && hasFirstCharacter) return isStr.slice(0, 1)
  return 0
}

// console.log(getFirstCharacter("  tung"));

// getLastElement
const getLastElement = (arr) => {
  let isNotArray = !isArray(arr) || arr.length === 0
  if (isNotArray) return null
  return arr[arr.length - 1]
}
// var array = ["tung", 12, 34, "mazda", {}]
// console.log(getLastElement(array));

// getStringLength
const getStringLength = (str) => {
  let isStr = isString(str)
  if (isStr) return "Không phải chuỗi"
  return str.length
}

// 15. Viết hàm getMiddleElement có tham số arr
// Nếu arr là mảng và có ít nhất 1 phần tử, trả về phần tử ở giữa 
// (nếu chẵn thì lấy phần tử bên trái). Nếu không phải mảng hoặc rỗng thì trả về null.

const getMiddleElement = (arr) => {
  Array.isArray(arr)

  if (arr.length === 0) return null

  if (arr.length % 2 === 0) {
    let result = arr.splice(arr.length / 2)
    return result
  }

  if (arr.length % 2 !== 0) {
    if (arr.length === 1) return arr
    if (arr.length > 1) {
      return arr[Math.floor(arr.length / 2)]
    }
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 9 / 2 = 4
var arr2 = ["honda", "mazda", "KIA", "MG", "Mercedess"] // 9 / 2 = 4
// console.log(">>>>: ", getMiddleElement(arr2));
// console.log(getMiddleElement([{ name: "tung" }]));