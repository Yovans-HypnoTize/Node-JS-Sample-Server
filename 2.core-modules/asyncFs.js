const fs = require("fs");

//Write File (Asynchronous)
fs.writeFile("asyncTest.txt", "Hello NodeJS (Async)", (err) => {
  if (err) throw err;
  console.log("File written completed!");

  //Read File (Asynchronous)
  fs.readFile("asyncTest.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    console.log("Read file completed", data);
  });
});
console.log("File writing processing");
