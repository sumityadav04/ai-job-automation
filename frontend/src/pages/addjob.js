import React, { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const addJob = () => {
    axios.post(`${API}/job/add`, { title, company })
      .then(() => {
        alert("Job added!");
        window.location.href = "/dashboard";
      });
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Add Job</h1>

      <input className="border p-3 w-full mb-3" placeholder="Job Title" onChange={(e) => setTitle(e.target.value)} />
      <input className="border p-3 w-full mb-3" placeholder="Company" onChange={(e) => setCompany(e.target.value)} />

      <button onClick={addJob} className="w-full bg-blue-600 text-white p-3 rounded">
        Add Job
      </button>
    </div>
  );
}
