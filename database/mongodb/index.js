const express = require("express");
const db = require("./db");
const app = express();
const userRoutes = require("./routes/users")

//middleware
app.use(express.json());

app.use('/api/users', userRoutes)

//User Routes


app.listen(3000, () => {
  console.log("Server listening to http://localhost:3000");
});
