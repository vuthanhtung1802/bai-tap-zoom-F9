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