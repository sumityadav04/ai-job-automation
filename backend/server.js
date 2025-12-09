

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// SIMPLE LOCAL JSON "DATABASE"
let jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    status: "Pending"
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Microsoft",
    status: "Pending"
  }
];

// ROUTE: GET JOBS
app.get("/job/list", (req, res) => {
  res.json(jobs);
});

// ROUTE: APPLY ALL JOBS
app.post("/job/apply-all", (req, res) => {
  jobs = jobs.map(j => ({ ...j, status: "Applied" }));
  res.json({ message: "Applied all jobs!", jobs });
});

// SERVER
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Backend running on port", PORT));
