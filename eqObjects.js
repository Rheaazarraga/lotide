const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    const type1 = typeof object1[key];
    const type2 = typeof object2[key];

    if (type1 !== type2) {
      return false;
    }
    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;

};

//EXPORT
module.exports = eqObjects;