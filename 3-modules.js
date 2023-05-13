// CommonJS, every file is module(by default)
// MODULES - encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade"); // here the function present in the module "7-mind-grenade" is invoked automatically without using exports because it is called in that module
console.log(data);
// console.log(names);

// sayHi("susan");
// sayHi(names.peter);
// sayHi(names.john);
