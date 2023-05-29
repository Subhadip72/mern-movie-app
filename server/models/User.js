const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
    maxlength: 50,
    minlength: 3,
  },
  secondName: {
    type: String,
    required: [true, "Please provide second name"],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "Please provide first name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide first name"],
    minlength: 6,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJwt = function () {
  return jwt.sign(
    {
      userId: this._id,
      firstName: this.firstName,
      lastName: this.secondName,
      email: this.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFE }
  );
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatching = await bcrypt.compare(userPassword, this.password);
  return isMatching;
};

module.exports = model("User", UserSchema);
