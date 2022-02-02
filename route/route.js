const mongoose = require("mongoose");
const express = require("express");
const Data = require("../model/schema");
const bodyParser = require("body-parser");
const router = new express.Router();

router.get("/", async (req, res) => {
  res.redirect("/app");
});

router.get("/app", async (req, res) => {
  const mydata = await Data.find();
  res.send(mydata);
});

router.post("/app", async (req, res) => {
  const mydata = new Data({
    name: req.body.name,
    password: req.body.password,
  });
  await mydata.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: msg,
      });
    }
  });
});

// router.patch("/app/:id", async (req, res) => {
//   const mydata = await Data.findByIdAndUpdate(req.params.id);
//   mydata.name = req.body.name;
//   mydata.password = req.body.password;
//   await mydata.save((err, msg) => {
//     if (err) {
//       res.status(500).json({
//         error: err,
//       });
//     } else {
//       res.status(200).json({
//         message: msg,
//       });
//     }
//   });
// });
router.patch("/app/:id", async (request, response) => {
  // update
  const _id = request.params.id;
  const chemical = await Data.findByIdAndUpdate(_id, request.body, {
    new: true,
  });
  response.send(chemical);
});

router.delete("/app/:id", async (request, response) => {
  const _id = request.params.id;
  const chemical = await Data.findByIdAndDelete(_id);
  response.send(chemical);
});

module.exports = router;
