const { quizSchema } = require("./schemas");

module.exports.validateQuiz = (req, res, next) => {
  const { error } = quizSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    console.log(msg);
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
