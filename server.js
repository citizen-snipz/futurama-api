require("dotenv").config();
const express = require("express");
const { user, mdbKey } = require("./keys.js");
const { characters } = require("./characters");
const app = express();
const MongoClient = require("mongodb").MongoClient;

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "futurama";

MongoClient.connect(dbConnectionStr, {
  useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  let { charName } = req.query;

  if (!charName) return res.render("index", { charResults: null });
  charName = charName.toLowerCase();
  const charResults = characters.filter(
    (char) =>
      char.name.toLowerCase() === charName ||
      char.nickname.toLowerCase() === charName
  );
  if (charResults[0]) return res.render("index", { charResults });
  res.render("index", { charResults: null });
});

// const paths = {
//   saying: "Nobody doesn't like Molten Boron!",
//   popplers: "Pop a Poppler in your mouth when you eat a Fishy Joe's!"
// };
// app.get("/:path", (req, res) => {
//   const path = req.params.path;
//   res.json({
//     statement:
//       paths[path] || "I am Bender, please insert girder (file path not found)"
//   });
// });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

/* next steps:
1. make a generate random character button (random based on id)
2. have option to add characters to list
(check index.ejs for html next steps)
*/
