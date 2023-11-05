const joi = require("joi");

module.exports.quizSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  duration: joi.number().required(),
  date: joi.string().required(),
  time: joi.string().required(),
  questions: joi.array().items(
    joi.object({
      question: joi.string(),
      typeQ: joi.string(),
      options: joi.array().items(joi.string()),
    })
  ),
});
