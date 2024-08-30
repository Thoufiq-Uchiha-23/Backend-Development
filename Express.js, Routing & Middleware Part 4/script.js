// Express.js Framework:

// Introduction to Express.js.
// MERN STACK
// express.js -> ek npm package hai
// framework
// manages everything from receiving the request and giving the response

// Setting up a basic Express application
// Routing
// Middleware
// Request and response handling
// Error handling

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("champion meraaaaa anuuuuuuuuuj");
});
app.get("/profile", function (req, res) {
  res.send("champion uska coach");
});
app.listen(3000);
