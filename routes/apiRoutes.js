var fs = require("fs");
const router = require("express").Router();
const path = require("path");
var notesData = require("../develop/db.json");

// Create New Notes and displays in browser
  router.get("/notes", function (req, res) {
    res.json(notesData);
    console.log(notesData);
  });

// Retrieves user input from /notes page and sends it to JSON file
  router.post("/postnotes", function (req, res) {
    // const notesDataParsed = JSON.parse(notesData);
    let data = [req.body, ...notesData];
    console.log(data);

    let dataJSON = JSON.stringify(data);
    console.log(dataJSON);
    console.log("data", data);
    fs.writeFile(path.join(__dirname, "../develop/db.json"), dataJSON, function() {
      return res.send(dataJSON);
    });
  });


  //Delete function
// Request URL: http://localhost:3000/
// req.params: { "userId": """ }
  router.delete("/delete", function (req, res) {
    res.send("Deleted!")
  })

module.exports = router;


