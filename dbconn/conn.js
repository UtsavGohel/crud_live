const mongoose = require("mongoose");

mongoose
  .connect(
    "//use mongodb atlash url//"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
