import { v2 as cloudinary } from "cloudinary";
import Jobs from "../models/jobDetails.model.js";

const addJob = async (req, res) => {
  try {
    const {
      title,
      description,
      company,
      location,
      salary,
      requirement,
      jobType,
      skills,
      responsibilities,
    } = req.body;

    if (
      !title ||
      !description ||
      !company ||
      !location ||
      !salary ||
      !requirement ||
      !jobType ||
      !skills ||
      !responsibilities
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "File upload is required" });
    }

    const imageUrl = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const created = await Jobs.create({
      title,
      description,
      company,
      location,
      salary,
      requirement,
      jobType,
      skills,
      responsibilities,
      image: imageUrl.secure_url,
    });

    if (!created) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }

    res
      .status(201)
      .json({ success: true, message: "Job created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error job creation", error: error.message });
  }
};

const viewJob = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * parseInt(limit, 10);

    const viewJobs = await Jobs.find().skip(offset).limit(parseInt(limit, 10));

    if (viewJobs.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no jobs at the moment" });
    }

    const totalCount = await Jobs.countDocuments();

    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      success: true,
      currentPage: parseInt(page, 10),
      totalPages,
      totalCount,
      viewJobs,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching jobs",
      error: error.message,
    });
  }
};

const viewSpecificJob = async (req, res) => {
  try {
    const { id } = req.params;

    const viewSpecific = await Jobs.findById({ _id: id });
    if (!viewSpecific) {
      return res
        .status(400)
        .json({ success: false, message: "No info available" });
    }
    res.status(200).json({ success: true, viewSpecific });
  } catch (error) {
    res.status(500).json({ message: "Error job view", error: error.message });
  }
};

const editJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updateJob = await Jobs.findByIdAndUpdate({ _id: id }, req.body);
    if (!updateJob) {
      return res
        .status(500)
        .json({ success: false, message: "Cannot update the job" });
    }

    res
      .status(200)
      .json({ success: true, message: "Job updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error job updating", error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Jobs.findByIdAndDelete({ _id: id });
    if (!deleted) {
      return res.status(500).json({ success: false, message: "Unsuccessful" });
    }
    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error job deletion", error: error.message });
  }
};

export { addJob, viewJob, deleteJob, editJob, viewSpecificJob };
