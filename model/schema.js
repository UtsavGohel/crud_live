const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  password: String,
});

const Data = mongoose.model("Apps", AppSchema);
module.exports = Data;
