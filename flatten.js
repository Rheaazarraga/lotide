const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length)
    return false;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i])
      return false;

  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  }
};

const flatten = function(array) {
  //create an empty array that will store the flattened array
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) { //loop through the passed through array
    if (Array.isArray(array[i])) {   //if the element is an array, iterate through that array
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);   //add the item in the nested array to the flattened array
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;   //return the flattened array

};

//TEST CASES:
console.log(flatten([1, 2, 3, [4, 5], [6]]));
console.log(flatten([["negronis"], "mimosas", ["sidecars"]]));
//TESTING ASSERTION when running assertion, you need to send it 2 arrays. The flatten function call and then a second array that will be used as the validator.
assertArraysEqual(flatten([100, 200, [300, 400], 500]), [100, 200, 300, 400, 500]);