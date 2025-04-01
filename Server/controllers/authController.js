const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helper/auth");
const jwt = require("jsonwebtoken");
//
const test = (req, res) => {
  return res.json("teste is running");
};
// Register page
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // check password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is Required and should be at laste 6 characters long",
      });
    }
    // check email
    if (!email) {
      return res.json({
        error: "Email is Required",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email Already Exist",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    // creat user
    const user = await User.create({ name, email, password: hashedPassword });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};
// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ error: "Email is required to login" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Email not found. Register first" });
    }

    // Check password
    const match = await comparePassword(password, user.password);

    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }, // Set expiration time
        (err, token) => {
          if (err) {
            throw err;
          }
          res
            .cookie("token", token, { httpOnly: true, sameSite: "strict" })
            .json(user);
          // res
          //   .cookie("token", token, {
          //     httpOnly: true, // Prevent XSS attacks
          //     secure: process.env.NODE_ENV === "production", // Use secure cookies in production
          //     sameSite: "strict", // CSRF protection
          //   })
          //   .json({ message: "Login successful", token, user });
        }
      );
    }
    if (!match) {
      return res.json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error in login function:", error);
    return res.json({ error: "Internal server error" });
  }
};
module.exports = { test, registerUser, loginUser };
