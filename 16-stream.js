const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

// default buffer size is 64Kb
// last buffer- remainder
// highWaterMark- control the size
// const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });
// const stream = createReadStream("./content/big.txt", { encoding: 'utf8' });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
