// var info1 = {
//   name: "tung",
//   age: 18,
//   address: "namdinh"
// }
// var info2 = {
//   name: "hoan",
//   age: 28,
//   address: "hanoi"
// }
// var info3 = info1
// console.log(info1 === info2); // false
// console.log(info3);


// console.log(_.isEqual(info1, info2));


const students = [
  { name: 'An', age: 20, gpa: 7.5 },
  { name: '', age: 19, gpa: 8.2 },
  { name: 'Linh', age: 17, gpa: 6.9 },
  { name: 'Bình', age: 21, gpa: 11 },
  { name: 'Minh', age: 22, gpa: 9.0 }
];

// bài tập kiểm tra 1 obj sinh viên có tồn tại trong mảng không


function isValidStudent(student) {
  let studentName = student.name
  let studentAge = student.age
  let studentGpa = student.gpa

  let isStudentName = _.isString(studentName) && !_.isEmpty(studentName)
  let isStudentAge = _.isNumber(studentAge) && studentAge >= 18
  let isStudentGpa = _.isNumber(studentGpa) && studentGpa >= 0 && studentGpa <= 10

  return isStudentName && isStudentAge && isStudentGpa
}

var invalidStudent = _.filter(students, student => isValidStudent(student))
console.log("check student sau filter >>> ", invalidStudent);


// { name: 'An', age: 20, gpa: 7.5 },
// { name: 'Minh', age: 22, gpa: 9.0 }
