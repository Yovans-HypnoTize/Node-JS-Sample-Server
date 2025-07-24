const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost:27017/userdb')
  .then(() => {
    console.log("Databse connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
