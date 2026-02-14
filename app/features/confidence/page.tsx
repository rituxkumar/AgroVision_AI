"use client";

import PageWrapper from "@/app/components/PageWrapper";
import {
  BarChart3,
  Percent,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ConfidencePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-[#0f1f14] px-6 md:px-20 py-20 text-gray-700 dark:text-gray-200">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-green-600 dark:text-green-400 mb-10 flex items-center gap-4"
        >
          <BarChart3 size={40} /> AI Confidence Score
        </motion.h1>

        <p className="mb-12 text-lg max-w-3xl">
          Every disease prediction includes a confidence percentage that
          reflects how certain the AI model is about its decision. This allows
          farmers to make informed choices with data-driven insights.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <Percent />,
              title: "Probability-Based Output",
              desc: "The model calculates prediction probabilities for each disease class.",
            },
            {
              icon: <TrendingUp />,
              title: "Improved Accuracy",
              desc: "Continuous retraining enhances reliability and precision.",
            },
            {
              icon: <CheckCircle />,
              title: "Decision Confidence",
              desc: "Helps farmers choose appropriate treatment steps confidently.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 dark:bg-[#13281b] p-6 rounded-xl shadow-md"
            >
              <div className="text-green-600 dark:text-green-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
