import express from "express";

import upload from "../middlewares/multer.js";
import { createForm } from "../controller/form.controller.js";

const router = express.Router();
router.route("/form").post(upload.single("cv"), createForm);

export default router;
