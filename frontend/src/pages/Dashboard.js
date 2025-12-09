
import React, { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load job list
  useEffect(() => {
    axios.get(`${API}/job/list`)
      .then(res => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Apply all jobs
  const applyAll = () => {
    axios.post(`${API}/job/apply-all`)
      .then(res => {
        setJobs(res.data.jobs);
        alert("All jobs applied successfully!");
      });
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        AI Job Automation Dashboard
      </h1>

      <button
        onClick={applyAll}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Apply All Jobs Automatically
      </button>

      {loading ? (
        <p className="mt-6 text-xl text-gray-600">Loading jobs...</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                job.status === "Applied"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}>
                {job.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
