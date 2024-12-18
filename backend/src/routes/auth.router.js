import express from "express";
import { registerUser } from "../controller/auth.controller.js";

const router = express.Router();

router.route("/signup").post(registerUser);

export default router;
