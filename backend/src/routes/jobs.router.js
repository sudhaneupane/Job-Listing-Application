import express from "express";
import {
  addJob,
  deleteJob,
  editJob,
  viewJob,
  viewSpecificJob,
} from "../controller/jobDetails.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/").get(viewJob);
router.route("/").post(
  upload.single("image"),
  addJob
);
router.route("/:id").delete(deleteJob);
router.route("/:id").patch(editJob);
router.route("/:id").get(viewSpecificJob);

export default router;
