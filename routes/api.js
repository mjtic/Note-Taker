const api = require("express").Router();
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// GET request for reviews
api.get("/notes", (req, res) => {
  // console.log(db);
  // Send a message to the client
  //   res.status(200).json(`${req.method} request received to get notes`);
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    res.send(data);
  });
  // Log our request to the terminal
  res.status(200).json(`${req.method} request received to get notes`);
  console.info(`${req.method} request received to get notes`);
});

// POST request to add a review
api.post("/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;
  // If all the required properties are present
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json(`${req.method} request did not get notes`);
      } else {
        //Convert string into JSON object
        const jsonNotes = JSON.parse(data);
        // Add new notes
        jsonNotes.push(newNote);

        //Write uupdated reviews back to the file
        fs.writeFile(
          "./db/db.json",
          JSON.stringify(jsonNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Successfully updated notes!")
        );
        res.status(200).json(`${req.method} request received to get notes`);
      }
    });

    // const response = {
    //     status: 'success',
    //     body: newNote,
    // }

    // console.log(response);
    // res.status(200).json(response);
    // } else{
    //     res.status(500).json('Error in posting notes');
    // }
  }
});
// api.post('/notes', (req, res)=> {
//     console.log(req.body);
//     const{ title, text } = req.body;
//     const newNote = {
//         title, text, id: uuidv4()
//     }
//         const response = {
//         status: 'success',
//         body: newNote
//     };

//     res.json(response);

// });

//     const res = {
//         status: 'success',
//         body: newNote,
//     };

//     db.push(newNote);
//     const dbNewNote = JSON.stringify(db)

//     fs.writeFileSync('./db/db.json', dbNewNote, null, 4), (writeErr) =>
//         writeErr? console.error(writeErr) : console.info('Successfully updated db!')
// });
// res.send(response);

module.exports = api;
