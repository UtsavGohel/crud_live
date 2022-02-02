const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./route/route");
require("./dbconn/conn");
require("./model/schema");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
