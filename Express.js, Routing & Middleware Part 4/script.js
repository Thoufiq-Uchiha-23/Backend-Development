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

// middleware initialized using "use()" method that has 3 fixed parameters
// req, res, next
app.use(function(req, res, next){
  console.log("middleware chala");
  // next method is used to forward the req otherwise it'll be stuck in loading
  next();
})

// not just one we can make more than one middleware
app.use(function(req, res, next){
  console.log("middleware chala ek aur baar");
  // next method is used to forward the req otherwise it'll be stuck in loading
  next();
})

app.get("/", function (req, res) {
  res.send("champion meraaaaa anuuuuuuuuuj");
});

app.get("/about", function (req, res) {
  res.send("about page hai yeh");
});

app.listen(3000);