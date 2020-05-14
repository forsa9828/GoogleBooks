//Dependenices
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3000

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {

   // useCreateIndex: true,
   // useNewUrlParser: true

  }

);



// Start the API server
app.listen(PORT, () =>
  console.log(` ==> API Server now listening on PORT ${PORT}!`)

);
