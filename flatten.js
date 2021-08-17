const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

//Implement a function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;

};

//EXPORT
module.exports = flatten;