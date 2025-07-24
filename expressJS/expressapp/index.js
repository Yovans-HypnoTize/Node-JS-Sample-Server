const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("The requested url is :", req.url);
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("Hello Express");
});

app.post("/", (req, res) => {
  res.status(200).send("Hello Express post method");
});

app.use((req, res, next) => {
  res.status(404).send("404 Not found");
});

app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000");
});
