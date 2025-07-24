const path = require("path")

const filePath = "users/localdata/nodejs/app.js"

console.log("Base name", path.basename(filePath));
console.log("Directory name", path.dirname(filePath));
console.log("Extension name", path.extname(filePath));

console.log('Joined path', path.join(__dirname, 'demo', 'test.txt'))
