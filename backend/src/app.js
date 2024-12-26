import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("common"));

// routes
import jobsRouter from "./routes/jobs.router.js";
import userRouter from "./routes/auth.router.js";
import formRouter from "./routes/form.router.js";

app.use("/api/jobs", jobsRouter);
app.use("/api", userRouter);
app.use("/api", formRouter);

// default route
app.use("/", (req, res) => {
  res.send("OK 🤣");
});

export { app };
