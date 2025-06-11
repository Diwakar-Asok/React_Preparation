const countVowels = (str) => {
  let vowels = "aeiouAeiou";
  let counter = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
};

console.log(countVowels("testit"));
