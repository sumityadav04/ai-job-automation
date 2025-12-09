import React, { useState } from "react";

export default function Signup() {
  const signupUser = () => {
    alert("Signup successful! Now login.");
    window.location.href = "/";
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <input className="w-full p-3 border rounded mb-3" placeholder="Name" />
        <input className="w-full p-3 border rounded mb-3" placeholder="Email" />
        <input className="w-full p-3 border rounded mb-3" placeholder="Password" />

        <button onClick={signupUser} className="w-full p-3 bg-green-600 text-white rounded">
          Sign Up
        </button>

        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <a className="text-blue-600" href="/">Login</a>
        </p>
      </div>
    </div>
  );
}
