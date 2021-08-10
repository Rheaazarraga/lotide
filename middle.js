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

const middle = function(array) {
  let result = [];
  if (array.length % 2 === 1) {
    console.log('odd -----');
    const middleIndex = (array.length - 1) / 2;
    const middleValue = array[middleIndex];
    result.push(middleValue);
  } else {
    const secondMiddleIndex = (array.length / 2);
    const firstMiddleIndex = secondMiddleIndex - 1;
    const firstMiddleValue = array[firstMiddleIndex];
    const secondMiddleValue = array [secondMiddleIndex];
    result.push(firstMiddleValue);
    result.push(secondMiddleValue);
    console.log('even +++++');
  }
  console.log('> > > >', result);
  return result;
};

middle([3, 4, 5, 6, 7, 8]);

// [3, 4, 5, 6, 7] //middleValue = 5, indexOfMiddle = 2, arrayLength = 5 || middleIndex = (arrayLength - 1) / 2 || (5 - 1) / 2

// [3, 4, 5, 6, 7, 8, 9] //middleValue = 6, indexOfMiddle = 3, arrayLength = 7 || middleIndex = (arrayLength - 1) / 2

// [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // arrayLength = 11, middleValue = 8, middleIndex = 5 || middleIndex = (11 - 1) / 2 = 5

// [a, b, c, d, e, f, g, h] arrayLength = 8, middleValue = d, e || middleIndex = 3, 4 // arrayLength / 2 = indexOf e because 8 / 2 = 4 which is the index position of e

// [3, 4, 5, 6, 7, 8] arrayLength = 6, middleValue = 5, 6, middleIndex = 2, 3

// TEST CASES:
middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
(assertArraysEqual([5, 4, 3, 2, 1], [5, 4, 2 ,1]));
(assertArraysEqual(["bita "+ "bean " + "baby"], ["bita " + "bean "+ "baby"]));