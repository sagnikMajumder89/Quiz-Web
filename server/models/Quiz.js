const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createQuizSchema = new Schema({
  name: String,
  description: String,
  duration: Number,
  date: String,
  time: String,
  questions: [
    {
      question: String,
      typeQ: String,
      options: Array,
      correctAnswer: String,
    },
  ],
});

module.exports = mongoose.model("Quiz", createQuizSchema);
