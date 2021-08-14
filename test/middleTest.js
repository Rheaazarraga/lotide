const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//TEST CASES:

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
(assertArraysEqual(["bita " + "bean " + "baby"], ["bita " + "bean " + "baby"]));