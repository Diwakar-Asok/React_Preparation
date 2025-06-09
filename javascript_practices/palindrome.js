const isPalindrome = (str) => {
  let reversed = "";
  let checkPalindrome = str;
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed === checkPalindrome;
};

console.log(isPalindrome("level"));

//using build-in

const buildInPalindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
};

console.log(buildInPalindrome("radar"));
