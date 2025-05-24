// var isAlert = alert("hello");
// console.log(isAlert);

// const isConfirm = confirm("ban ten la gi");
// console.log(isConfirm);


// const isPrompt = prompt("ban du 18 tuoi chua ?");
// console.log(isPrompt);

// const fullName = "vu thanh tung";
// const age = 18;
// const address = "nam dinh";

// console.log("name: " + fullName, "age:" + age, "address: " + address);

// var infos = {
//   name: 'tung',
//   age: '18',
//   address: 'namdinh',
//   'full-address': 'dia chi day du'
// }
// console.log('info: ', infos.name, ' ', 'age: ', infos.age, ' ', 'address: ', address, ' ', infos['full - address']);

// var userName = prompt('nhap ten cua ban: ');
// console.log('ten ban la: ' + userName);

// var number = '1';
// console.log(typeof number);

// var str = 'hoc lap trinh'

// function
// function fullName(name) {
//   return `nam sinh cua toi la: ${name}`
// }

// const info = fullName(18);
// console.log(info);

// Viết 1 hàm khi người dùng click vào nút click me
// hiển thị câu message Đây là thông báo
// const handleClick = (mes) => {
//   var print = alert(mes);
//   console.log(print);
// }


// BT2: Khi click vào click me thì lấy giá trị ô input yêu cầu người nhập tên, khi người dùng nhập
// PKLinh thì hiển thị popup là 'Đây là bạn nữ' ==>
// nam

// const handleClick = () => {
//   var inputValue = document.getElementById('text').value
//   if (inputValue == '') {
//     alert('Vui long nhap ten!')
//   } else if (inputValue === 'PKLinh') {
//     alert('day la ban nu')
//   } else {
//     alert('day la nam')
//   }
//

// BT Làm đồng hồ
const handleClock = () => {
  var date = new Date;
  var gio = date.getHours()
  var phut = date.getMinutes()
  var giay = date.getSeconds()
  var phuts = date.getMinutes + 15 - phut
}

setInterval(() => {
  handleClock()
}, 1000);


// var matchpass = () => {
//   var firstPass = document.form1.password.value
//   var secondPass = document.form1.password2.value

//   if (firstPass === secondPass) {
//     return true
//   } else {
//     alert('nhap sai!!!')
//     return false
//   }
// }