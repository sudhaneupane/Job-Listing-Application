import { Users } from "../models/auth.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { email, password, phone } = req.body;
    if (!email || !password || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const chechExistingUser = await Users.findOne({ email });
    if (chechExistingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = await Users.create({
      email,
      password: hashPassword,
      phone,
    });

    if (!createUser) {
      return res.status(500).json({
        success: false,
        message: "User cannot be created",
      });
    }
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  try {
  } catch (error) {}
};
const logoutUser = async (req, res) => {
  try {
  } catch (error) {}
};
// const registerUser = async (req, res) => {
//   try {
//   } catch (error) {}
// };
// const registerUser = async (req, res) => {
//   try {
//   } catch (error) {}
// };

export { registerUser, loginUser, logoutUser };
