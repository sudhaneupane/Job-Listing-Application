import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";
dotenv.config();

connectDB();
const PORT = 8000;
app.listen(PORT || 8080, () => {
  console.log(`app listening on port ${PORT}`);
});
