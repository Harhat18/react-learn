// const users = ["harun", "fatma", "miray"];
const users = [
  {
    name: "harun",
    age: 18,
  },

  {
    name: "fatma",
    age: 29,
  },
  {
    name: "miray",
  },
];

/*
push----ekleme
map--- elemanları getirir
find
filter
some
every
includes
*/

//PUSH
// users.push("samed");
// users.push("ayşe");

// console.log(users);

//MAP
// users.map((item) => {
//   console.log(item);
// });

//FİND
// const result = users.find((item) => item.name === `harun` && item.age > 20);
// console.log(result);

//FİLTER
// const filtered = users.filter(({ name, age }) => name === `harun` && age > 20);
// console.log(filtered);

//SOME BİRİ ŞARTLARI TAŞIAS TRUE
const some = users.some((item) => item.age === 10);
console.log(some);

//EVERY    HEPSİ ŞARTLARI TAŞIRSA TRUE

const every = users.some((item) => item.age > 15);
console.log(every);

//includes içinde geçiyormu diye bakar
const meyveler = ["elma", "armut", "muz"];
const isIncludes = meyvele.includes("elma");
console.log(isIncludes);
