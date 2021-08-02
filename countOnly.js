const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  }
};


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
  // The function should report back how many instances of each string were found in the allItems array of strings.
  return results;
};
  


  

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//MORE TEST CALLS:

const teaTypes = [
  "earl grey",
  "matcha",
  "green tea",
  "chamomille",
  "oolong",
  "green tea",
  "chamomille",
  "chamomille",
  "black tea"
];
const result2 = countOnly(teaTypes, { "matcha" : true, "chamomille" : true, "oolong" : false, "black tea" : true});
assertEqual(result2["matcha"], 1);
assertEqual(result2["chamomille"], 3);
assertEqual(result2["green tea"], 2);
assertEqual(result2["oolong"], undefined);