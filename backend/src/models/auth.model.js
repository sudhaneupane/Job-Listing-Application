import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: false,
  },
});

export const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);
