//built-in falsy values

const removeFalsy = (arr) => {
  return arr.filter(Boolean);
};

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN, 4]));

// normal values

const removeFalsyManual = (arr) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(
  removeFalsyManual([0, 1, false, 2, "", 3, null, undefined, NaN, 4]),
);
