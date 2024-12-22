import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/auth.controller.js";
import { authMiddleware } from "../middlewares/verifyUser.js";

const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(authMiddleware, logoutUser);
// router.route("/route").get(authMiddleware, (req,res)=>{
//     res.status(200).json({
//         success: true,
//         message: "You have access to the protected route!",
//         user: req.user,
//       });
// });

export default router;
