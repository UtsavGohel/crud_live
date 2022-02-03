const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  shareholding: String,
});

const Admin = mongoose.model("admin", AppSchema);
module.exports = Admin;
