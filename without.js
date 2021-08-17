const without = function(source, itemsToRemove) {
  let itemsRemaining = [];
  for (let i = 0; i < source.length; i++) {
    let addItem = true;
  
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        
        addItem = false;
       
      }
    }
    if (addItem) {
      itemsRemaining.push(source[i]);
    }
  }
  return itemsRemaining;
};

//EXPORT
module.exports = without;