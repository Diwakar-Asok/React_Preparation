const firstNonRepeatingCharacter = (str) => {
  const isFrequency = {};

  for (const char of str) {
    if (isFrequency[char]) {
      isFrequency[char]++;
    } else {
      isFrequency[char] = 1;
    }
  }

  for (const char of str) {
    if (isFrequency[char] == 1) {
      return char;
    }
  }
  return null;
};

console.log(firstNonRepeatingCharacter("swiss"));
