const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;