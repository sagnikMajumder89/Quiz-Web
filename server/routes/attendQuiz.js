const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Quiz = require("../models/Quiz");

router.route("/getQuiz/:id").get((req, res) => {
  console.log("getQuiz called");
  Quiz.findById(req.params.id)
    .then((quiz) => {
      console.log(quiz);
      res.json(quiz);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
      console.log("Error");
    });
});

module.exports = router;
