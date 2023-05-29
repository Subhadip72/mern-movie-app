const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const authRouter = require("./routes/auth");
const movieRouter = require("./routes/movies");
const reviewRouter = require("./routes/reviews");
const authenticateUser = require("./middlewares/authentication");

dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movies", authenticateUser, movieRouter);
app.use("/api/v1/reviews", authenticateUser, reviewRouter);

const port = process.env.PORT || 8000;

const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
