import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// default route
app.use("/", (req, res) => {
  res.send("OK 🤣");
});

export { app };
