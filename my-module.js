export default (name) => {
  console.log(`hello ${name}`);
};

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;
const text = "text";
const user = {
  name: "harun",
  surname: "hatib",
};

const users = [
  {
    name: "harun",
    surname: "hatib",
  },
  {
    name: "harun",
    surname: "hatib",
  },
];

export { topla, cikar, text, user, users };
