const api = require("express").Router();
const db = require("../db/db.json")
const { v4: uuidv4 } = require('uuid');

api.post('/notes', (req, res)=>{
    console.log(req.body);    
// res.send()
});

api.get('/notes', (req, res)=>{
    console.log(db);
})

module.exports = api;