// without build-in functions
const reverseString = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseString("diwakar"));

//with build-in function

const buildReverse = (str) => {
  return str.split("").reverse().join("");
};

console.log(buildReverse("diwakar"));
