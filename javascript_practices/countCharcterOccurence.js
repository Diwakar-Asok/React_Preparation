const countCharacterOccurence = (str) => {
  const counts = {};

  for (let char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
};

console.log(countCharacterOccurence("riyaasai"));
