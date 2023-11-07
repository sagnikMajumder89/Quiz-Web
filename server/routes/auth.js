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
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
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
    console.log("Upto this is running");
    res.status(200).send({ data: token, message: "Log in successful" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
