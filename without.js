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

/**
 * create empty array to store elements that will not be removed
 * loop through each element in the source array
 * set addItem to true to start each pass through a source element
 * loop through each element in the itemsToRemove array to see if there is a
 * match
 * if there is a match, set addItem to false since this element will not be
 * returned since it's been requested to be removed
 * if after looping through all the itemsToRemove and there is not a match,
 * add the element at source[i] to the array of itemsRemaining
 * return the array of items that were not removed
 **/


const without = function(source, itemsToRemove) {
  let itemsRemaining = [];
  for (let i = 0; i < source.length; i++) {
    let addItem = true;
  
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        
        let addItem = false;
       
      }
    }
    if (addItem) {
      itemsRemaining.push(source[i]);
    }
  }
  return itemsRemaining;
};

// TEST CASES:

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", '2', "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([5, 4, 3], [5, 4, 3, 2]));

// MORE TEST CASES:

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", '2', "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["negroni", "mimosa", "sidecar"];
console.log(without(words, ["mimosa"])); //returns "mimosa"
console.log(assertArraysEqual(words, ["negroni", "mimosa", "sidecar"]));
console.log(assertArraysEqual(without(words, ["mimosa"]), ["mimosa"]));