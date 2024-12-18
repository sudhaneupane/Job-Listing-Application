import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// routes
import jobsRouter from "./routes/jobs.router.js";
import userRouter from "./routes/auth.router.js"

app.use("/api/jobs", jobsRouter);
app.use("/api",userRouter)

// default route
app.use("/", (req, res) => {
  res.send("OK 🤣");
});

export { app };
