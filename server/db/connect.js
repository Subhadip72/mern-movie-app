const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to mongodb!"))
    .catch((err) => {
      console.log(err);
      console.log("failed to connect to mongodb!");
    });
};

module.exports = connectDB;
