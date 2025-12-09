import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/job/list")
      .then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      <h1>AI Job Automation Dashboard</h1>

      <button
        onClick={() =>
          axios.post(process.env.REACT_APP_API_URL + "/job/apply-all")
        }
      >
        Apply All Jobs
      </button>

      {jobs.map(job => (
        <p key={job._id}>
          {job.title} — {job.company}
        </p>
      ))}
    </div>
  );
}

export default Dashboard;
