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
});

const Jobs = mongoose.models.Jobs || mongoose.model("Jobs", jobDetailSchema);

export default Jobs;
