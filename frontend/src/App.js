import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
