//required modules
const express = require("express");
let uniquid = require("uniquid");
const fs = require("fs");
let db = require("./db/db.json");
//PORT variable
const PORT = process.env.PORT || 3001;

//middleware
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

//Get routes

app.get("/api/notes", (req, res) => res.json(db));

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

//Post routes

app.post("/api/notes", (req, res) => {
  if (req.body) {
    const newNote = {
      id: uniquid(),
      title,
      text,
    };
    db.push(newNote);
    writeToFile("./db/db.json", db);
    res.json("Note was added");
  } else {
    res.errored("Note could not be added!");
  }
});

//Write to file
const writeToFile = (dest, cont) =>
  fs.writeFile(dest, JSON.stringify(cont, null, 4), (err) =>
    err ? console.log(err) : console.info(`\nData written to ${dest}`)
  );

//app.listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
