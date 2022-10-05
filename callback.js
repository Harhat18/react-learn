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

//  PROMİSE ()

// const getComments = () => {
//   return new promise((resolve, reject) => {
//     if (number === 1) {
//         resolve("comments");
//     }

//     reject("bir problem oldu")
//   });
// };

// getComments(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    resolve(data);
  });
};

const getPost = (post_id) => {
  return new promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );

    resolve(data);
  });
};

(async () => {
  await getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  await getPost(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
})();

(async () => {
  const users = await getUsers();
  const post = await getPost(1);

  console.log(users);
  console.log(post);
})();

(async () => {
  try {
    const users = await getUsers();
    const post = await getPost(1);

    console.log(users);
    console.log(post);
  } catch (e) {
    console.log(e);
  }
})();
