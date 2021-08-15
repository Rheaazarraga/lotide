const assertEqual = require("../assertEqual");
const countOnly = require("../countOnly");


//TEST CODE:
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