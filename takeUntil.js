//Implement takeUntil which will keep collecting items from a provided array until the callback provided *returns a truthy value.

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
    return results;
  }

};

//EXPORT
module.exports = takeUntil;