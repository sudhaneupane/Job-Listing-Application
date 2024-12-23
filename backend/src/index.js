import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config();

connectDB();
connectCloudinary();
const PORT = 8000;
app.listen(PORT || 8080, () => {
  console.log(`app listening on port ${PORT}`);
});
