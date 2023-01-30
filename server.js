//https://expressjs.com/en/guide/routing.html
//routing - refers to how an application’s endpoints (URIs) respond to client requests.
const express = require("express");
const path = require("path");
const notes = require("./db/db.json");
const fs = require("fs");
//run express app
const app = express();
const PORT = 3001;

//https://expressjs.com/en/5x/api.html#express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//WHEN I open the Note Taker, THEN I am presented with a landing
//Get route index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
//Get route notes.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
