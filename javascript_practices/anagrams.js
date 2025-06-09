const anagrams = (str1, str2) => {
  // make it to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyMap1 = {};
  const frequencyMap2 = {};

  for (const firststring of str1) {
    frequencyMap1[firststring] = (frequencyMap1[firststring] || 0) + 1;
  }

  for (const secondString of str2) {
    frequencyMap2[secondString] = (frequencyMap2[secondString] || 0) + 1;
  }

  console.log(frequencyMap1, frequencyMap2);

  for (const char in frequencyMap1) {
    if (frequencyMap1[char] !== frequencyMap2[char]) {
      return false;
    }
  }

  return true;
};

console.log(anagrams("listen", "silent"));
