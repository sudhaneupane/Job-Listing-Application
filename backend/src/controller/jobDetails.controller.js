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
