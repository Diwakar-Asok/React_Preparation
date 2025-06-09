//build in flat method
const flattenBuildArray = (arr) => {
  return arr.flat(Infinity);
};

console.log(flattenBuildArray([1, 2, [3, 4, [5, 6], 7], 8]));

//using reduce and concat but this will flat only one level deep

const flatReduceArray = (arr) => {
  return arr.reduce((acc, val) => acc.concat(val), []);
};

console.log(flatReduceArray([1, 2, [3, 4, [5, 6], 7], 8]));

//using reduce, concat along with recursive function will flat any depth of array

const recursiveFlatArray = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? recursiveFlatArray(val) : val);
  }, []);
};

console.log(recursiveFlatArray([1, 2, [3, 4, [5, 6], 7], 8]));
