import Jobs from "../models/jobDetails.model.js";

const addJob = async (req, res) => {
  try {
    const { title, description, company, location } = req.body;

    if (!title || !description || !company || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const created = await Jobs.create({
      title,
      description,
      company,
      location,
    });

    if (!created) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
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
    const viewJobs = await Jobs.find({});
    if (viewJobs.length === 0) {
      return res
        .status(400)
        .json({ message: "There are no jobs at the moment" });
    }
    res.status(201).json({ success: true, viewJobs });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching jobs", error: error.message });
  }
};

const viewSpecificJob = async (req, res) => {
  try {
  } catch (error) {}
};

const editJob = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteJob = async (req, res) => {
  try {
  } catch (error) {}
};

export { addJob, viewJob };
