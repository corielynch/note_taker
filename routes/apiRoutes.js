var fs = require("fs");
const router = require("express").Router();
console.log("api routes");
const path = require("path");
// var notesData = require("../public/notes.html");

//Testing things for delete
/*
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
*/
  // Create New Notes - takes in JSON input

  // router.get("/notes", function (req, res) {
  //   res.json(notesData);
  //   console.log(notesData);

  // })


  router.post("/postnotes", function (req, res) {
    let data = req.body;
    console.log("data", data);
    fs.writeFile(path.join(__dirname, "../develop/db.json"), data.text, function() {
      return res.sendStatus(200);
    });
    
  });

module.exports = router;


