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
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("users yüklendi", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((posts) => console.log("posts yüklendi", posts));
//   });

// ASYNC - AWAİT ile kullanımı

(async () => {
  const users = await axios("https://jsonplaceholder.typicode.com/users");

  const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1");

  const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2");

  console.log("users", users);
  console.log("post1", post1);
  console.log("post2", post2);
})();
