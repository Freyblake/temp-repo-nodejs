const { readFileSync, writeFileSync } = require("fs");

console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${first}, ${second},`,
  { flag: "a" }
);
console.log("done with the task");
console.log("starting the new task");
// here if the content is present in the file then it will overwrite the new content with the old  content
// here adding flag: 'a' will append the content in the file

// here in sync we see the pattern which follows line by line execution which is different form async in which we use callback function
// start
// done with the task
// starting the new task
