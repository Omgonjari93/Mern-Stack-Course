//Destructuring - Object

const userInfo = {
  a: "Om",
  std: 14,
};
const { a: fullName, std } = userInfo;
console.log(fullName, "Gonjari");

//Destructuring - Array

const arr = [15, 19, 11, 26];
const [aaaa, rrrr, bbbb] = arr;
console.log(aaaa, rrrr, "====");