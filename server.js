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
app.get("/api", (req, res) => {
  res.send("please head over to localhost:3001/api/notes");
});

app.get("/api/notes", (req, res) => res.json(db));

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
