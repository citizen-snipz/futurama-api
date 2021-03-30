const express = require("express");
const { user, mdbKey } = require("./keys.js");
const { characters } = require("./characters");
const app = express();
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
  `mongodb+srv://${user}:${mdbKey}@cluster0.g2mtk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  let { charName } = req.query;
  charName = charName.toLowerCase();
  const charResults = characters.filter(
    (char) =>
      char.name.toLowerCase() === charName ||
      char.nickname.toLowerCase() === charName
  );

  res.render("index", { charResults });
});

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
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Running on port ${port}`);
});
