const router = require("express").Router();
const { User, validateUser } = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exists" });

    //new user
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const userNew = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    //token
    const token = userNew.generateAuth();
    res.status(201).send({
      token: token,
      user: { name: req.body.name, email: req.body.email },
      message: "User created successfully & logged in",
    });
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const receivedData = req.body;
    const { error } = validateUser({ name: "demo", ...receivedData });
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).send({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword)
      return res.status(401).send({ message: "Invalid email or password" });
    const token = user.generateAuth();

    res.status(200).send({
      token: token,
      user: { name: user.name, email: user.email },
      message: "Log in successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
