"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Leaf, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      // Store user info in localStorage for client-side UI usage
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      router.push("/dashboard");
      router.refresh(); // Refresh to update middleware state
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
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full pointer-events-none"></div>

      {/* Login Card */}
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

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-500 text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 dark:text-green-200 mb-6">
          Login to AgroVision AI
        </p>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm"
            >
              <AlertCircle size={16} />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-500" size={18} />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email Address"
              className="
              w-full pl-10 pr-4 py-3 rounded-lg
              bg-white dark:bg-black/30
              border border-green-500/20
              text-black dark:text-green-200
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
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Password"
              className="
              w-full pl-10 pr-4 py-3 rounded-lg
              bg-white dark:bg-black/30
              border border-green-500/20
              text-black dark:text-green-200
              focus:outline-none
              focus:border-green-500
              transition
            "
            />
          </div>

          {/* Fancy Button */}
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
              "Login"
            )}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 dark:text-green-200 mt-6">
          Don't have an account?{" "}
          <Link href="/register">
            <span className="text-green-500 cursor-pointer hover:underline">
              Register
            </span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
}