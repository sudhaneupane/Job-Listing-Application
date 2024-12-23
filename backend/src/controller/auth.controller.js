import { Users } from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

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

    const checkPhoneDup = await Users.findOne({ phone });
    if (checkPhoneDup) {
      return res.status(400).json({
        success: false,
        message: "Phone number already taken",
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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const checkEmailExist = await Users.findOne({ email });
    if (!checkEmailExist) {
      return res.status(400).json({
        success: false,
        message: "User doesnot exist with this email",
      });
    }

    const comparedPassword = await bcrypt.compare(
      password,
      checkEmailExist.password
    );

    if (!comparedPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // token

    let infoObj = {
      id: checkEmailExist._id,
    };

    let expiryInfo = {
      expiresIn: "2d",
    };

    const gentoken = jsonwebtoken.sign(
      infoObj,
      process.env.JWT_SECRET,
      expiryInfo
    );

    const saveToken = await Users.updateOne({
      token: gentoken,
    });

    res.status(200).json({
      success: true,
      token: gentoken,
      message: "User Logged In",
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const logoutUser = async (req, res) => {
  try {
    const id = req.user.id;
    const findUserDetail = await Users.findById({ _id: id });
    if (!findUserDetail) {
      res.status(400).json({ success: false, message: "ID cannot be found" });
    }
    await Users.updateOne({ token: null });
    return res.status(200).json({ success: true, message: "Logged Out" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
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
