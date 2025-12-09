import React, { useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    localStorage.setItem("user", email);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded mb-3"
        />

        <button
          onClick={loginUser}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>

        <p className="mt-3 text-sm">
          Don’t have an account?{" "}
          <a className="text-blue-600" href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}
