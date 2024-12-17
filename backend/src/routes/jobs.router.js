import express from "express";
import { addJob, viewJob } from "../controller/jobDetails.controller.js";

const router = express.Router();

router.route("/").get(viewJob);
router.route("/").post(addJob);

export default router;
