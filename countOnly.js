const assertEqual = require("./assertEqual");

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //create an empty object that will store the items counted and the times counted
  const results = {}; //loop through the itemsToCount object
  for (const item of allItems) { //for loop looking for element of the allItems array
    console.log(item);
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  
  return results; // The function should report back how many instances of each string were found in the allItems array of strings.
};
  
//EXPORT
module.exports = countOnly;