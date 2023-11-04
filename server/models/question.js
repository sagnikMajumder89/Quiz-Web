const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: String,
  queImage: String,
  answer: String,
  subjective: Boolean,
  options: [String],
});

module.exports = mongoose.model("Question", QuestionSchema);
