const express = require('express');

// Import our modular routers api.js
const api = require("./api");
//start express
const app = express();

app.use("/api", api);

module.exports = app;


