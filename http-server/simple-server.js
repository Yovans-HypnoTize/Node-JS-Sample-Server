const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Home Page`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`About Page`);
  } else if (req.url === "/file") {
    const readStream = fs.createReadStream("./sample.mp4")
    res.writeHead(200, { "content-type": "video/mp4" });
    // res.end(`About Page`);
    readStream.pipe(res)
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(`{
        "status": 404,
        "data": {
            "name":"Yogesh"
        }
        "message":"404 Page not found"
        }`);
  }
});

server.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
