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
  const questions = req.body;

  const transformedQuestions = questions.map((q) => {
    return {
      question: q.question,
      typeQ: q.typeQ,
      options: q.options,
      correctAnswer: q.options[q.correctAnswer],
    };
  });

  for (let i = 0; i < questions.length; i++) {}
  quiz.questions = [...quiz.questions, ...transformedQuestions];
  await quiz.save();
  res.redirect(`http://localhost:3000/createQuiz/${req.params.id}/complete`);
});

module.exports = router;
