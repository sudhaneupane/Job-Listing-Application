import mongoose from "mongoose";

const jobDetailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
});

const Jobs = mongoose.models.Jobs || mongoose.model("Jobs", jobDetailSchema);

export default Jobs;
