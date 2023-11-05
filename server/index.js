const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const createQuiz = require("./routes/createQuiz");
const attendQuiz = require("./routes/attendQuiz");

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

//routes
app.use("/createQuiz", createQuiz);
app.use("/attendQuiz", attendQuiz);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
