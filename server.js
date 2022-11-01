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
