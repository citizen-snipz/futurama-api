const express = require("express");
const app = express();

console.log("nodemon is saving lives");

const paths = {
  saying: "Nobody doesn't like Molten Boron!",
  popplers: "Pop a Poppler in your mouth when you eat a Fishy Joe's!"
};
app.get("/:path", (req, res) => {
  const path = req.params.path;
  res.json({
    statement:
      paths[path] || "I am Bender, please insert girder (file path not found)"
  });
});

// app.get("/saying", (req, res) => {
//   res.json({ saying: "Nobody doesn't like Molten Boron!" });
// });
// app.get("/popplers", (req, res) => {
//   res.json({
//     popplers: "Pop a Poppler in your mouth when you eat a Fishy Joe's!"
//   });
// });
const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Running on port ${port}`);
});
