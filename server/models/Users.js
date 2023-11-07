const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuth = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PVT_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validateUser = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: passwordComplexity().required(),
  });
  return schema.validate(data);
};

module.exports = { User, validateUser };
