import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/jobapplication`);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed", error.message);
  }
};
