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

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("champion meraaaaa anuuuuuuuuuj");
// });

// app.get("/profile", function (req, res) {
//   res.send("champion uska coach");
// });

// app.listen(3000);

// MIDDLEWARE
// Jab bhi server request accept karta hai waha se route ke beech pahunchne take agar
// aap us request ko beech me rokte ho and kuch perform karte ho, to ye element middleware
// kehlaate hai

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("champion meraaaaa anuuuuuuuuuj");
});

app.listen(3000);