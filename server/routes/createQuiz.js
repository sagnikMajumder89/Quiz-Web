const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Quiz = require("../models/Quiz");

router.route("/").post(async (req, res) => {
  const quiz = req.body;
  const newQuiz = new Quiz(quiz);
  newQuiz.questions = [];
  await newQuiz.save();
  res.json({
    redirect: `/createQuiz/${newQuiz._id}`,
    name: newQuiz.name,
  });
});

router.route("/:id/questions").post(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  quiz.questions = [...quiz.questions, ...req.body];
  await quiz.save();
  res.redirect(`http://localhost:3000/createQuiz/${req.params.id}/complete`);
});

module.exports = router;
