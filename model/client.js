const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  email: String,
  city: String,
  country: String,
});

const Data = mongoose.model("client", AppSchema);
module.exports = Data;
