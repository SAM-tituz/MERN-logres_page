const express = require("express");
const cors = require("cors");
const { test, registerUser,loginUser } = require("../controllers/authController");
const router = express.Router();
// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
router.get("/", test);
router.post("/register", registerUser);
router.post("/login",loginUser)
router.post("/profile",getprofile)

module.exports = router;
