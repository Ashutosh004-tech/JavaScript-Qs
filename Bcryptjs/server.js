import mongoose from "mongoose";
import express from "express";
import User from "./model.js";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/PasswordEncrypt");

app.post("/user/new", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let userExist = await User.findOne({ email });
    if (userExist) {
     return res.status(400).json({msg:"User Exist"});
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const Res = await User.create({ name, email, password: hashPassword });
    res.status(200).json({Res});
  } catch (er) {
    console.log(er);
  }
});

app.listen(port, () => {
  console.log(`Server Stared for Port : ${port}`);
});
