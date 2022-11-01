//required modules
const express = require("express");
let uniquid = require("uniquid");
const fs = require("fs");
let db = require("./db/db.json");

//middleware
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
//Get routes
app.get("/", (req, res) => {
  res.send("please head over to localhost:3001/api/notes");
});

app.get("/api/notes", (req, res) => res.json(db));

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});
