// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000)
// console.log(3);

const todoList1 = document.querySelector(".todo-list")
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    todoList1.innerHTML = xhr.responseText;
  }
};
xhr.open("GET", "./todo-list.html", true);
xhr.send();

const todoList2 = document.querySelector(".todo-list2")
var xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState == 4 && xhr2.status == 200) {
    const tasks = JSON.parse(xhr2.responseText)
    tasks.forEach(task => {
      const item = document.createElement("li");
      item.innerHTML = task.title
      todoList2.appendChild(item);
    })
  }
}
xhr2.open("GET", "./tasks.json", true);
xhr2.send()



const todoList3 = document.querySelector(".todo-list2")
var xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function () {
  if (xhr3.readyState == 4 && xhr3.status == 200) {
    const tasks = JSON.parse(xhr3.responseText)
    tasks.forEach(task => {
      const item = document.createElement("li");
      item.innerHTML = task.title
      todoList2.appendChild(item);
    })
  }
}
xhr3.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhr3.send()

// tái sử dụng code
function sendRequest(method, url, callback) {
  var xhr2 = new XMLHttpRequest();

  xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      const contentType = xhr.getResponseHeader("Content-Type");
      const isJSON = contentType && contentType.includes("application/json");

      if (isJSON) {
        callback(JSON.parse(xhr2.responseText))
      } else {
        callback(xhr2.responseText)
      }
    }
  }
  xhr2.open(method, url, true);
  xhr2.send()
}


// Ứng dụng 3 công việc bất đồng bộ: tỉnh thành, quận huyện, phường xã
// https://api01.f8team.dev/api/address/provinces
// https://api01.f8team.dev/api/address/districts?province_id=1
// https://api01.f8team.dev/api/address/wards?district_id=1
const apiBase = "https://api01.f8team.dev/api/address";

// promise

function sendReq(method, url) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const contentType = xhr.getResponseHeader("Content-Type");
        const isJSON = contentType && contentType.includes("application/json");

        if (isJSON) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          resolve(xhr.responseText)
        }
      }
      else {
        reject(`HTTP code ${xhr.status}`)
      }
    }
    xhr.open(method, url, true);
    xhr.send()
  })
}

const getFirstProvice = (provinces) => {
  const firstProvince = provinces.data[0]
  return sendReq("GET", `${apiBase}/districts?province_id=${firstProvince.province_id}`)
}
const getFirstDistricts = (districts) => {
  const firstDistrict = districts.data[0]
  return sendReq("GET", `${apiBase}/districts?province_id=${firstDistrict.district_id}`)
}

sendReq("GET", `${apiBase}/provinces`)
  .then((provinces) => getFirstProvice(provinces))
  .then((districts) => getFirstDistricts(districts))

// async await

async function run() {
  try {
    const provinces = await sendReq("GET", `${apiBase}/provinces`)
    const firstProvince = provinces.data[0]

    const districts = await sendReq("GET", `${apiBase}/districts?province_id=${firstProvince.province_id}`)
  } catch (error) {
    console.log(error);
  }
}

run()