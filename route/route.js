const mongoose = require("mongoose");
const express = require("express");
const Data = require("../model/client");
const Admin = require("../model/admin");
const bodyParser = require("body-parser");
const router = new express.Router();

router.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/client", async (req, res) => {
  const mydata = await Data.find();
  res.send(mydata);
});

router.post("/client", async (req, res) => {
  const mydata = new Data({
    name: req.body.name,
    emailId: req.body.emailId,
    city: req.body.city,
    country: req.body.country,
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

// router.patch("/client/:id", async (req, res) => {
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
router.patch("/client/:id", async (request, response) => {
  // update
  const _id = request.params.id;
  const mydata = await Data.findByIdAndUpdate(_id, request.body, {
    new: true,
  });
  response.send(mydata);
});

router.delete("/client/:id", async (request, response) => {
  const _id = request.params.id;
  const mydata = await Data.findByIdAndDelete(_id);
  response.send(mydata);
});

router.get("/", async (req, res) => {
  res.redirect("/admin");
});

router.get("/admin", async (req, res) => {
  const mydata = await Admin.find();
  res.send(mydata);
});

router.post("/admin", async (req, res) => {
  const mydata = new Admin({
    name: req.body.name,
    shareholding: req.body.shareholding,
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

router.patch("/admin/:id", async (request, response) => {
  // update
  const _id = request.params.id;
  const mydata = await Admin.findByIdAndUpdate(_id, request.body, {
    new: true,
  });
  response.send(mydata);
});

router.patch("/admin/:name", async (request, response) => {
  // update
  const name = request.params.name;
  const mydata = await Admin.findByIdAndUpdate(name, request.body, {
    new: true,
  });
  response.send(mydata);
});

router.delete("/admin/:id", async (request, response) => {
  const _id = request.params.id;
  const mydata = await Admin.findByIdAndDelete(_id);
  response.send(mydata);
});

module.exports = router;
