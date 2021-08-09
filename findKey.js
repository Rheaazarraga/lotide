const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} ✅ ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} ❌ ${expected}`);
  }
};

/**Implement the function findKey which takes in an object and a 
 * callback
 * for in loop to iterate through the keys in the object
 * return the first key
 * call back returns truthy
 * if no key is found, return undefined 
*/

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


//TEST CASES:

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma" will satisfy the callback becasue it's the first key with the score of 2

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");