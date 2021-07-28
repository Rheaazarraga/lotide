const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length)
    return false;
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i])
      return false;

  }
  return true;
};

const assertArraysEqual = function(list1, list2) {
  if (eqArrays(list1, list2)) {
    console.log(`Assertion Passed: ${list1} ✅ ${list2}`);
  } else {
    console.log(`Assertion Failed: ${list1} ❌ ${list2}`);
  }
};
const without = function(source, itemsToRemove) {
  let itemsRemaining = [];  //create empty array to store elements that will not be removed
  for (let i = 0; i < source.length; i++) {  // loop through each element in the source array
    let addItem = true;  // set addItem to true to start each pass through a source element
  
    for (j = 0; j < itemsToRemove.length; j++) {  // loop through each element in the itemsToRemove array to see if there is a match
      if (source[i] === itemsToRemove[j]) {
        // if there is a match, set addItem to false since this element will not be returned since it's been requested to be removed
        let addItem = false;
        // if after looping through all the itemsToRemove and there is not a match, add the element at source[i] to the array of itemsRemaining
      }
    }
    if (addItem) {
      itemsRemaining.push(source[i]);
    }
  }
  return itemsRemaining;
};


// return the array of items that were not removed

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", '2', "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([5, 4, 3], [5, 4, 3, 2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);