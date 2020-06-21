var fs = require("fs");
const router = require("express").Router();
const path = require("path");
var notesData = require("../develop/db.json");


// Create New Notes and displays in browser
  router.get("/notes", function (req, res) {
    res.json(notesData);
  });

// Retrieves user input from /notes page and sends it to JSON file
  router.post("/postnotes", function (req, res) {
    
    let data = [req.body, ...notesData];

    let dataJSON = JSON.stringify(data);
    fs.writeFile(path.join(__dirname, "../develop/db.json"), dataJSON, function() {
      return res.send(dataJSON);
    });
  });


//Delete function
  router.delete("/notes/:id", function(req, res) {
    let noteId = req.params.id
    fs.readFile("./develop/db.json", "utf8", (err, data) => {
        if (err) throw err;
        const allNotes = JSON.parse(data);
        const newNotes = allNotes.filter(note => {
            return note.id != noteId
        });
        fs.writeFile("./developer/db.json", JSON.stringify(newNotes, null, 2), err => {
            res.send(JSON.stringify(newNotes));
        });
    });
});


module.exports = router;
