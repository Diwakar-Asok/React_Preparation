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

//Here I am spliting the str into array and initalizing the one let keyword with empty string and calling the array inside the for loop and comparing the both word and longestword and returning the longestword
