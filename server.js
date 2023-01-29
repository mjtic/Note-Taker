//https://expressjs.com/en/guide/routing.html
//routing - refers to how an application’s endpoints (URIs) respond to client requests.
const express = require('express');
const path = require("path"); 
const notes = require ('./db/db.json')
const PORT = 3001;
const fs = require('fs');
//run express a
const app = express();
