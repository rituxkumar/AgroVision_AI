"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Leaf, User, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      return setError("All fields are required.");
    }

    if (formData.password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess(true);
      
      // Automatic redirect after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      px-6
      bg-gradient-to-b
      from-white via-green-50 to-white
      dark:from-black dark:via-green-950 dark:to-black
    "
    >
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          w-full max-w-md
          bg-[#DBFCE7] dark:bg-black/40
          backdrop-blur-xl
          border border-green-500/20
          rounded-2xl
          p-8
          shadow-lg
        "
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-6"
        >
          <Leaf className="text-green-500 w-12 h-12 animate-pulse" />
        </motion.div>

        {/* Success overlay */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#DBFCE7] dark:bg-black/80 rounded-2xl z-10"
            >
              <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-green-500 mb-2">Account Created!</h3>
              <p className="text-gray-600 dark:text-green-200 mb-6 text-center px-4">
                Welcome to AgroVision AI, {formData.fullName.split(" ")[0]}!
              </p>
              <Link href="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
                >
                  Go to Login
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-500 text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-600 dark:text-green-200 mb-6">
          Join AgroVision AI today
        </p>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-500 text-sm text-center mb-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg py-2 px-3"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-green-500" size={18} />
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="
                w-full pl-10 pr-4 py-3 rounded-lg
                bg-white dark:bg-black/30
                border border-green-500/20
                text-black dark:text-green-200
                placeholder-gray-400 dark:placeholder-green-600
                focus:outline-none
                focus:border-green-500
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-500" size={18} />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full pl-10 pr-4 py-3 rounded-lg
                bg-white dark:bg-black/30
                border border-green-500/20
                text-black dark:text-green-200
                placeholder-gray-400 dark:placeholder-green-600
                focus:outline-none
                focus:border-green-500
                transition
              "
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-500" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full pl-10 pr-10 py-3 rounded-lg
                bg-white dark:bg-black/30
                border border-green-500/20
                text-black dark:text-green-200
                placeholder-gray-400 dark:placeholder-green-600
                focus:outline-none
                focus:border-green-500
                transition
              "
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-green-500 hover:text-green-400 transition"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-500" size={18} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              required
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="
                w-full pl-10 pr-10 py-3 rounded-lg
                bg-white dark:bg-black/30
                border border-green-500/20
                text-black dark:text-green-200
                placeholder-gray-400 dark:placeholder-green-600
                focus:outline-none
                focus:border-green-500
                transition
              "
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-green-500 hover:text-green-400 transition"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Password strength hint */}
          {formData.password.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-xs px-1 ${
                formData.password.length < 6
                  ? "text-red-400"
                  : formData.password.length < 10
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {formData.password.length < 6
                ? "Weak — at least 6 characters required"
                : formData.password.length < 10
                ? "Fair — consider a stronger password"
                : "Strong password ✓"}
            </motion.p>
          )}

          {/* Register Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(34,197,94,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg
              bg-green-500
              hover:bg-green-600
              text-white font-semibold
              transition
              relative overflow-hidden
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="
                  w-5 h-5 border-2 border-white border-t-transparent
                  rounded-full mx-auto
                "
              />
            ) : (
              "Create Account"
            )}
          </motion.button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 dark:text-green-200 mt-6">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-green-500 cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>

      </motion.div>
    </div>
  );
}