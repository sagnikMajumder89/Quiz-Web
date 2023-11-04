const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = 5000;

//database connection
const db = "mongodb://127.0.0.1:27017/quiz-web";
mongoose.connect(db);
const dbConnection = mongoose.connection;
dbConnection.on(
  "error",
  console.error.bind(console, "Connection error to database:")
);
dbConnection.once("open", () => {
  console.log("Database Connected");
});

//middleware
app.use(express.json());
app.use(cors());

app.post("/createQuiz", (req, res) => {
  console.log(req.body);

  res.json({
    redirect: "/about",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
