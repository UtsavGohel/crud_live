const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Utsav:utsav@mycluster.olsya.mongodb.net/App?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
