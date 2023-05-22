const express = require("express");
const path = require("path");
const notesData = require("./db/db.json");

const PORT = 3001;
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

