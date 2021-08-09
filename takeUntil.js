/*
 * Implement takeUntil which will keep collecting items from a provided array until the callback provided *returns a truthy value.
 */
const takeUntil = function(array, callback) {
  let results = []; //create an empty array that will store the results
  for (let item of array) { //loop through all the items of the array
    if (callback(item)) { //check to see if the current item in the array meets the callback functions test
      return results; //if it does, return the result array
    } else {
      results.push(item); //if it didn't, add the item to the results
    }
  }
  return results; //return the array of reults
};

//TEST CODE:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; //expected input
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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

(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
(assertArraysEqual(results2, ["I've","been","to","Hollywood"]));

// expected output
//[ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]