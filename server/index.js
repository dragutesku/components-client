const express = require('express');

const server = express();

server.use(express.static('./dist'));

// Main Route
server.get("/", (req, res) => {
  res.send('An alligator approaches!');
});


//set port, listen for requests
server.listen("3002", () => {
  console.log("Client is up and running");
});