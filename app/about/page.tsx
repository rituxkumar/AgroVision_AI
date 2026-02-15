"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Brain,
  ShieldCheck,
  Microscope,
  Users,
  Target,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div
      className="
      min-h-screen
      px-6 py-20
      bg-linear-to-b
      from-white via-green-50 to-white
      dark:from-black dark:via-green-950 dark:to-black
      transition-colors duration-500
    "
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-6">
          About AgroVision AI
        </h1>

        <p className="text-lg text-gray-700 dark:text-green-200 max-w-3xl mx-auto">
          AgroVision AI is an advanced AI-powered crop disease detection
          platform designed to help farmers detect plant diseases instantly
          using image analysis and machine learning.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
          bg-[#DBFCE7] dark:bg-black/40
          backdrop-blur-xl
          border border-green-500/20
          rounded-xl
          p-6
          hover:scale-105
          transition
          shadow-lg
        "
        >
          <Brain className="text-green-500 w-10 h-10 mb-4" />

          <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
            AI Powered Detection
          </h3>

          <p className="text-gray-600 dark:text-green-200">
            Our AI model analyzes crop images using deep learning to detect
            diseases instantly with high accuracy.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          bg-[#DBFCE7] dark:bg-black/40
          backdrop-blur-xl
          border border-green-500/20
          rounded-xl
          p-6
          hover:scale-105
          transition
          shadow-lg
        "
        >
          <Microscope className="text-green-500 w-10 h-10 mb-4" />

          <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
            Accurate Analysis
          </h3>

          <p className="text-gray-600 dark:text-green-200">
            Advanced machine learning ensures precise disease detection and
            confidence scoring.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          bg-[#DBFCE7] dark:bg-black/40
          backdrop-blur-xl
          border border-green-500/20
          rounded-xl
          p-6
          hover:scale-105
          transition
          shadow-lg
        "
        >
          <ShieldCheck className="text-green-500 w-10 h-10 mb-4" />

          <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
            Smart Treatment Advice
          </h3>

          <p className="text-gray-600 dark:text-green-200">
            Get instant treatment recommendations to protect your crops and
            improve yield.
          </p>
        </motion.div>

      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mt-24 text-center"
      >
        <Target className="mx-auto text-green-500 w-12 h-12 mb-4" />

        <h2 className="text-3xl font-bold text-green-500 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-700 dark:text-green-200">
          Our mission is to empower farmers with AI technology to detect crop
          diseases early, reduce losses, and improve agricultural productivity.
        </p>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-5xl mx-auto mt-20 text-center"
      >
        <Users className="mx-auto text-green-500 w-12 h-12 mb-4" />

        <h2 className="text-3xl font-bold text-green-500 mb-4">
          Our Vision
        </h2>

        <p className="text-gray-700 dark:text-green-200">
          We aim to revolutionize agriculture by providing intelligent tools
          that help farmers make smarter and faster decisions using AI.
        </p>
      </motion.div>

    </div>
  );
}