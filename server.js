const express = require("express");
const app = express();

console.log("nodemon is saving lives");
app.get("/", (req, res) => {
  res.send("Hello World");
});
const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Running on port ${port}`);
});
