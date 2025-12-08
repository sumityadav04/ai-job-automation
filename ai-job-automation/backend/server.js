import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// App Setup
const app = express();
app.use(cors());
app.use(express.json());

// Database Connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// Job Schema
const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  url: String,
  status: { type: String, default: "Pending" }
});

const Job = mongoose.model("Job", JobSchema);

// Routes
app.get("/job/list", async (req, res) => {
  res.json(await Job.find());
});

app.post("/job/apply-all", async (req, res) => {
  res.json({ message: "Job auto-apply feature will be added soon" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running on port " + PORT));
