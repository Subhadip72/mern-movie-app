const User = require("../models/User");

const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJwt();

  res.status(200).json({
    firstName: user.firstName,
    lastName: user.secondName,
    email: user.email,
    token,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("please provide email & password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValidUser = await user.comparePassword(password);

  if (!isValidUser) {
    throw new Error("Invalid credentials");
  }

  const token = user.createJwt();

  res.status(200).json({
    firstName: user.firstName,
    lastName: user.secondName,
    email: user.email,
    token,
  });
};

module.exports = { registerUser, loginUser };
