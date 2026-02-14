"use client";

import PageWrapper from "@/app/components/PageWrapper";
import {
  Leaf,
  Cpu,
  Camera,
  ShieldCheck,
  Brain,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DetectionPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-[#0f1f14] px-6 md:px-20 py-20 text-gray-700 dark:text-gray-200">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-green-600 dark:text-green-400 flex items-center gap-4">
            <Leaf size={40} /> AI-Based Disease Detection
          </h1>

          <p className="mt-6 text-lg max-w-3xl leading-relaxed">
            AgroVision AI leverages advanced deep learning models to analyze
            crop leaf images and identify diseases at early stages. Our CNN-based
            architecture ensures fast, accurate, and scalable detection,
            helping farmers prevent large-scale crop losses.
          </p>
        </motion.div>

        {/* How It Works */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <Camera size={28} />,
              title: "Upload Leaf Image",
              desc: "Capture or upload a high-quality image of the affected crop leaf for analysis.",
            },
            {
              icon: <Cpu size={28} />,
              title: "AI Processing",
              desc: "Our trained CNN model processes patterns, textures, and disease markers.",
            },
            {
              icon: <ShieldCheck size={28} />,
              title: "Accurate Detection",
              desc: "Receive instant results with high confidence accuracy.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 dark:bg-[#13281b] p-6 rounded-xl shadow-md"
            >
              <div className="text-green-600 dark:text-green-400 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Deep Technical Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Brain /> Advanced Deep Learning Model
          </h2>

          <p>
            Our detection system is powered by Convolutional Neural Networks (CNN)
            trained on thousands of labeled crop leaf images. The system
            recognizes subtle disease symptoms including leaf rust, blight,
            mildew, and nutrient deficiencies.
          </p>

          <p>
            By combining image preprocessing, feature extraction, and model
            optimization, AgroVision AI ensures scalable and real-time
            performance suitable for web and mobile platforms.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
