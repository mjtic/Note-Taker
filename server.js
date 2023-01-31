//https://expressjs.com/en/guide/routing.html
//routing - refers to how an application’s endpoints (URIs) respond to client requests.
const express = require("express");
const path = require("path");
const api = require("./routes/api");
const html = require("./routes/index")

//run express app
const app = express();
const PORT = process.env.PORT || 3001; //25-Ins_Heroku: Sets an initial port. We"ll use this later in our listener

// Middleware for parsing JSON and urlencoded form data
//https://expressjs.com/en/5x/api.html#express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", api);
app.use("/index", html)



// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//server start and litsen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);