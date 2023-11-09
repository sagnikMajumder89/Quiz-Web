const { quizSchema } = require("./schemas");
const jwt = require("jsonwebtoken");

const validateQuiz = (req, res, next) => {
  const { error } = quizSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    console.log(msg);
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

const isLoggedIn = (req, res, next) => {
  const token = req.header("auth-token");
  try {
    const decoded = jwt.verify(token, process.env.JWT_PVT_KEY);
    req.loggedIn = true;
  } catch (ex) {
    req.loggedIn = false;
  }
  next();
};

module.exports = { validateQuiz, isLoggedIn };
