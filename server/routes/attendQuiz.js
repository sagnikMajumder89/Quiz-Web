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

router.route("/:id").post(async (req, res) => {
  const { id } = req.params;
  var score = 0;
  const quizAnswersReceived = req.body;
  console.log(quizAnswersReceived);
  const quiz = await Quiz.findById(id);
  console.log(quiz);
  for (let i = 0; i < quizAnswersReceived.length; i++) {
    if (quiz.questions[i].correctAnswer === quizAnswersReceived[i]) {
      score += 1;
    }
  }
  res.json({ Score: score });
});

module.exports = router;
