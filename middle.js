const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const middle = function(array) {
  const midArr = [];
  if (array.length > 2 && array.length % 2 === 0) {
    const midIndex = (array.length - 1) / 2;
    midArr.push(array[Math.floor(midIndex)]);
    midArr.push(array[Math.ceil(midIndex)]);
    return (midArr);
  }
  if (array.length > 2 && array.length % 2 !== 0) {
    const midIndex = (array.length - 1) / 2;
    midArr.push(array[(midIndex)]);
    return (midArr);
  }
  return midArr;
};
module.exports = middle;

// middle finds the middle element in an array for all arrays larger than 2 elements and returns it in an array
// if the array's length is even, return the 2 middle elements
// if the array's length is odd, return the middle element
// if the array has less than 2 elements, return an empty array
// if the array is longer than 2 elements AND the array's length is even
// find the middle index (Will be a decimal)
// round down and set it as the first element in the midArr
// round up set it as the second element in the midArr
// if the array is longer than 2 elements AND the array's length is odd
// find the middle index
// set the midpointArray to the element as an array
// return an empty array