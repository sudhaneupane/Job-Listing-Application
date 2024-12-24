import express from "express";

import upload from "../middlewares/multer.js";
import { createForm } from "../controller/form.controller.js";
import { authMiddleware } from "../middlewares/verifyUser.js";

const router = express.Router();
router.route("/form").post(authMiddleware, upload.single("cv"), createForm);

export default router;
