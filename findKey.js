/**
 * Implement the function findKey which takes in an object and a 
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

//EXPORT
module.exports = findKey;