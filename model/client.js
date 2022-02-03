const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  emailId: String,
  city: String,
  country: String,
});

const Data = mongoose.model("client", AppSchema);
module.exports = Data;
