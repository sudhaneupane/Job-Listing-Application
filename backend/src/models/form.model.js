import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    cv: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    exp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Form = mongoose.models.Form || mongoose.model("Form", formSchema);
