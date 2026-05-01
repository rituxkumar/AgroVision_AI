"use client";

import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.username || !formData.password) {
      return setError("All fields are required");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setError("");
    console.log("Register Data:", formData);

    // 👉 API call here (fetch / axios)
  };

  return (
    <div className="bg-[#021c12] border border-green-800 rounded-2xl p-8 w-[400px] shadow-lg text-white">
      
      <h2 className="text-2xl font-bold text-center text-green-400 mb-2">
        Create Account
      </h2>

      <p className="text-center text-gray-400 mb-6">
        Register to AgroVision AI
      </p>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Email */}
        <div className="flex items-center border border-green-800 rounded-lg px-3 py-2">
          <Mail className="text-green-400 mr-2" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent outline-none w-full"
            onChange={handleChange}
          />
        </div>

        {/* Username */}
        <div className="flex items-center border border-green-800 rounded-lg px-3 py-2">
          <User className="text-green-400 mr-2" size={18} />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="bg-transparent outline-none w-full"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="flex items-center border border-green-800 rounded-lg px-3 py-2">
          <Lock className="text-green-400 mr-2" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full"
            onChange={handleChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="flex items-center border border-green-800 rounded-lg px-3 py-2">
          <Lock className="text-green-400 mr-2" size={18} />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="bg-transparent outline-none w-full"
            onChange={handleChange}
          />
        </div>

        {/* Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded-lg font-semibold">
          Register
        </button>
      </form>

      <p className="text-center text-gray-400 mt-4">
        Already have an account?{" "}
        <span className="text-green-400 cursor-pointer">Login</span>
      </p>
    </div>
  );
}