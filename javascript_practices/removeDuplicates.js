const newRemoveDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(newRemoveDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

// using filter and indexOf

const filterRemoveDuplicates = (arr) => {
  return arr.filter((val, index, self) => self.indexOf(val) === index);
};

console.log(filterRemoveDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
