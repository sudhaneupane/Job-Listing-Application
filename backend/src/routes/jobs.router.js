import express from "express";
import {
  addJob,
  deleteJob,
  editJob,
  viewJob,
  viewSpecificJob,
} from "../controller/jobDetails.controller.js";

const router = express.Router();

router.route("/").get(viewJob);
router.route("/").post(addJob);
router.route("/:id").delete(deleteJob);
router.route("/:id").patch(editJob);
router.route("/:id").get(viewSpecificJob);

export default router;
