const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

console.log(capitalizeWords("hello world from diwakar"));

// For this we need to convert string into array and map those words and take the first character and convert that into to uppercase and using slice method we can convert others to lowercase and then convert again into string using join method.

const capitalizeBuiltInWords = (character) => {
  const words = character.split(" ");
  let result = [];

  for (const word of words) {
    if (word.length > 0) {
      let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result.push(capitalized);
    } else {
      result.push("");
    }
  }
  return result.join(" ");
};

console.log(capitalizeBuiltInWords("hi riyaa sai"));
