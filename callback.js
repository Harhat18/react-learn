// verilen zaman sonra çalış

// setTimeout(() => {
//   console.log("merhaba");
// }, 5000);

//verilen sürede tekrar eder

// setInterval(() => {
//   console.log("merhaba ben harun ");
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

// FETCH

import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    console.log("users yüklendi", users);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((posts) => console.log("posts yüklendi", posts));
