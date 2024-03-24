import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcrypt";
import {User} from "../model/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// API Callback for Registering
router.post("/register", async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if (user) {
    return res.json({message: "user already existed"});
  }

  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({status: true, message: "record registered"});
});

// API Callback for Logging in
// router.post("/login", async (req, res) => {
//   const {email, password} = req.body;
//   const user = await User.findOne({email});

//   //
//   if (!user) {
//     return res.json({message: "Email is not exist"});
//   }

//   //Password is encrypted, thats why it must be compare by bcrypt
//   const validPassword = await bcrypt.compare(password, user.password);
//   if (!validPassword) {
//     return res.json({message: "Password is incorrect"});
//   }

//   //Token generation
//   const token = jwt.sign({email: user.email}, process.env.JWT_KEY, {
//     expiresIn: "5h",
//   });
//   res.cookie("token", token, {httpOnly: true, maxAge: 3600000});
//   return res.json({status: true, message: "login successfully"});
// });

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (!user) {
    return res.json({message: "Email is not exist"});
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({message: "Password is incorrect"});
  }

  const token = jwt.sign({email: user.email}, process.env.JWT_KEY, {
    expiresIn: "5h",
  });
  res.cookie("token", token, {httpOnly: true, maxAge: 3600000});
  // Return the token in the response
  return res.json({status: true, message: "login successfully", token});
});

export {router as UserRouter};
