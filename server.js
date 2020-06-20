// Dependencies
const express = require("express");
// Sets up the Express App
const app = express();
const PORT = 3000;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes")

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);  
  });
  