const fs = require("fs");

//Write File (Synchronous)
// fs.writeFileSync("test.txt", "Hello NodeJS");
// console.log("File Written");

//Read File (Synchronous)
const data = fs.readFileSync("test.txt", {encoding: "utf-8"});
console.log("Read File Synchronous:", data)
