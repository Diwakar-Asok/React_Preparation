const findLongestCharacter = (character) => {
  const words = character.split(" ");

  let longestword = "";
  for (const word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  return longestword;
};

console.log(findLongestCharacter("Find the longest word in the sentence"));
