"use client";

import { motion } from "framer-motion";
import { Mail, Lock, Leaf } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {

  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login successful (demo)");
    }, 2000);
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
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>


      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="
        relative
        w-full max-w-md
        bg-white/70 dark:bg-black/40
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


        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">


          {/* Email */}
          <div className="relative">

            <Mail className="absolute left-3 top-3 text-green-500" size={18} />

            <input
              type="email"
              required
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
            className="
            w-full py-3 rounded-lg
            bg-green-500
            hover:bg-green-600
            text-white font-semibold
            transition
            relative overflow-hidden
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
          <span className="text-green-500 cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </motion.div>

    </div>
  );
}