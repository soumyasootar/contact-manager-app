const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


//@DEC Register a User
//@POST /api/user/register
//@access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const availableUser = await User.findOne({ email });
  if (availableUser) {
    res.status(400);
    throw new Error("User Exists");
  }

  //Hashing Password
  const salt = 10;
  const HashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: HashedPassword,
  });

  if (user) {
    res
      .status(201)
      .json({ message: "User Registered", data: { username, email } });
  } else {
    res.status(400).json({ message: "Problem in creating the user" });
  }
});

//@DEC Login a User
//@POST /api/user/login
//@access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  res.jsn({ message: "Login User Page" });
});

//@DEC Get the Current User (only a logged in user can access this)
//@GET /api/user/current
//@access PRIVATE
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User Page" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
