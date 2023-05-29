const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Error("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userid: payload.userId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
    };
    next();
  } catch (error) {
    throw new Error("Authentication Invalid");
  }
};

module.exports = auth;
