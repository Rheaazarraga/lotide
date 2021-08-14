const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

//TEST CASES:

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([7, 6, 5], [7, 6, 5, 4]), false); // => should Pass

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);