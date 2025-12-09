import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

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
  const jobs = await Job.find();
  res.json(jobs);
});

app.post("/job/apply-all", async (req, res) => {
  res.json({ message: "Auto apply functionality coming soon" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Backend running on port", PORT));
