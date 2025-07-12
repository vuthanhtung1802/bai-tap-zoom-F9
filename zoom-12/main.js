// Synchronous (đồng bộ)
// Asynchronous (bất đồng bộ)

// Khi chạy code đồng bộ kết quả sẽ trả về 1 - 2 - 3
// console.log(1);
// console.log(2);
// console.log(3);

// Khi chay code bất đồng bộ kết quả sẽ trả về 1 - 3 - 2
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

// Javascript là ngôn ngữ đơn luồng (Single Thread), chỉ có 1 luồng chính (Main Thread) xử lý theo trình tự nhất định
// Tại sao JS là ngôn ngữ đơn luồng nhưng lại chạy được code bất đồng bộ: bởi vì JS được hỗ trợ bởi môi trường (Trình duyệt, NodeJS)
// - NodeJS: bản chất là môi trường để chạy JS
// - Trình duyệt là môi trường để chạy JS

// Thuở ban đầu JS là ngôn nữa chạy ở trình duyệt ==> mà ở chạy ở trình duyệt chỉ liên quan đến giao diện người dùng ==> ví dụ 1000tags


// Vấn đề
// Một task vụ phải hoàn thành xong thì tác vụ tiếp theo mới được thực thi
// Nếu có 1 task vụ tốn nhiều thời gian (ví dụ callAPI mất 3s), toàn bộ chương trình sẽ bị "đứng" lại hay còn gọi là `render blocking`

// Task vụ bất đồng bộ
// 1. setTimeout, setInterval
// 2. DOM events
// 3. XHR (XMLHttpRequest), axios, fetch, promise
// 4. async...await
// 5. File system (read/write file)
// ...

// Giải quyết bất đồng bộ:
// callback hell -> promise
// XHR (toto-list.html, tasks.json, API: https://jsonplaceholder.typicode.com/todos)
// Empty Cache and Hard Reload (Ctrl + Shift + R)

// Cách 1
const todoList1 = document.querySelector(".todo-list");

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  // text/html;
  if (xhr.readyState === 4 && xhr.status === 200) {
    todoList1.innerHTML = xhr.responseText;
  }
};
xhr.open("GET", "./todo-list.html", true);
xhr.send();



// Cách 2: Thay vì tải file todo-list.html thì dùng file tasks.json
const todoList2 = document.querySelector(".todo-list2");
const xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4 && xhr2.status === 200) {
    const tasks = JSON.parse(xhr2.responseText);

    tasks.forEach((task) => {
      const item = document.createElement("li");
      item.textContent = task.title;
      todoList2.appendChild(item);
    });
  }
};

xhr2.open("GET", "./tasks.json", true);
xhr2.send();


// Cách 3: gọi API sử dụng api có sẵn placeholder.com
const xhr3 = new XMLHttpRequest();
const todoList3 = document.querySelector(".todo-list3");

xhr3.onreadystatechange = function () {
  if (xhr3.readyState === 4 && xhr3.status === 200) {
    // application/json; charset=utf-8 (content type)

    const tasks = JSON.parse(xhr3.responseText);

    tasks.forEach((task) => {
      const item = document.createElement("li");
      item.textContent = task.title;
      todoList3.appendChild(item);
    });
  }
};

xhr3.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
xhr3.send();


// Tái sử dụng code
function sendRequest(method, url, callback) {
  const xhr2 = new XMLHttpRequest();

  xhr2.onload = function () {
    // application/json; charset=utf-8, text/html 
    if (xhr2.readyState === 4 && xhr2.status === 200) {
      const contentType = xhr2.getResponseHeader("Content-Type");

      const isJSON = contentType && contentType.includes("application/json");

      if (isJSON) {
        callback(JSON.parse(xhr2.responseText));
      } else {
        callback(xhr2.responseText);
      }
    }
  };

  xhr2.open(method, url, true);
  xhr2.send();
}

sendRequest("GET", "./todo-list.html", (contentType) => {
  // console.log("contentType1", contentType);
  // code render
});

sendRequest("GET", "https://jsonplaceholder.typicode.com/todos", (contentType) => {
  // console.log("contentType2", contentType);
  // code render
});

// Tỉnh thành, quận huyện, phường xã...
// Callback hell: sinh ra thuật ngữ promise
// Promise là một khái niệm sinh ra để xử lý các task vụ bất đồng bộ, giải quyết callback - hell
// bất đồng bộ: công việc mất thời gian và không biết trước khi nào xong  (call api)

// promise là một đối tượng trả về cho 3 trạng thái
// 1. Pending (Đang chờ)
// 2. Fulfilled (Thành công)
// 3. Reject (Thất bại)

// const promise = new Promise((resolve, reject) => {
//   // resolve("Iphone 16 promax 1TB");
//   // reject("Anh hết tiền");
// });

// promise
//   .then((result) => {
//     return new Promise((resolve, reject) => {
//       resolve("Iphone 16 promax 2TB");
//     });
//   })
//   .then((result) => {
//     console.log("Then 2", result);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

// Note: Nếu không catch sẽ bị văng lỗi ra ngoài chỉ nhìn được ở console.log mà không bắt giá trị đó ở trong code!
// Tính chất chuỗi (promise chaining) thì việc xử lý bất đồng bộ sẽ không bị rơi vào callback hell
// Tính chất promise sẽ theo trình tự: nếu có nhiều phương thức .then, .then thì callback .then đầu tiên phải xong trước rồi mới chạy đến callback then tiếp theo
// Mỗi then và catch đều nhận về giá trị, giá trị `return` trong hàm chính là giá trị `ressolve` cho then tiếp theo

// Ứng dụng 3 công việc bất đồng bộ: tỉnh thành, quận huyện, phường xã
// https://api01.f8team.dev/api/address/provinces
// https://api01.f8team.dev/api/address/districts?province_id=1
// https://api01.f8team.dev/api/address/wards?district_id=1
const apiBase = "https://api01.f8team.dev/api/address";

function sendReq(method, url) {
  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
        const contentType = xhr.getResponseHeader("content-type");
        const isJSON = contentType && contentType.includes("application/json");

        if (isJSON) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          resolve(xhr.responseText);
        }
      } else {
        reject(`HTTP code ${xhr.status}`);
      }
    };

    xhr.open(method, url, true);
    xhr.send();
  });
}

// Promise
function getFirstProvice(provinces) {
  const firstProvince = provinces.data[0];
  return sendReq("GET", `${apiBase}/districts?province_id=${firstProvince.province_id}`);
}

function getFirstDistrict(districts) {
  const firstDistrict = districts.data[0];
  return sendReq("GET", `${apiBase}/wards?district_id=${firstDistrict.district_id}`);
}

function getFirstWards(wards) {
  const firstWard = wards.data[0];
}

sendReq("GET", `${apiBase}/provinces`)
  .then((provinces) => getFirstProvice(provinces))
  .then((districts) => getFirstDistrict(districts))
  .then((wards) => getFirstWards(wards));


// Async Await (cú pháp là promise)
// Thiếu 1 trong 2 tham số async, await thì sẽ báo lỗi
// Async...Await
async function run() {
  try {
    const provinces = await sendReq("GET", `${apiBase}/provinces`);
    const firstProvince = provinces.data[0];

    const districts = await sendReq("GET", `${apiBase}/districts?province_id=${firstProvince.province_id}`);
    const firstDistrict = districts.data[0];

    const wards = await sendReq("GET", `${apiBase}/wards?district_id=${firstDistrict.district_id}`);
    const firstWard = wards.data[0];
  } catch (error) {
    console.log("error:::", error);
  }
}