const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
//TEST CASES:

assertArraysEqual([1,2], [1,2]);
assertArraysEqual([1,2], [1,2,3]);
assertArraysEqual([1,2,3], [2,2,3]);
assertArraysEqual([100, 200], [100, 200]);