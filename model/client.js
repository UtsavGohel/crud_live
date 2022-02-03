const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  emailid: String,
  city: String,
  country: String,
});

const Data = mongoose.model("client", AppSchema);
module.exports = Data;
