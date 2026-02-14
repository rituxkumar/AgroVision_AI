"use client";

import PageWrapper from "@/app/components/PageWrapper";
import {
  History,
  Database,
  BarChart3,
  Shield,
  Clock,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HistoryPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-[#0f1f14] px-6 md:px-20 py-20 text-gray-700 dark:text-gray-200">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-green-600 dark:text-green-400 mb-10 flex items-center gap-4"
        >
          <History size={40} /> Scan History & Data Tracking
        </motion.h1>

        <p className="text-lg max-w-4xl mb-14 leading-relaxed">
          AgroVision AI automatically stores every crop scan result securely in
          the database. Farmers can access past disease detections, confidence
          scores, and treatment suggestions anytime. This enables better
          monitoring of crop health trends over time.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <Database />,
              title: "Secure Storage",
              desc: "All scan records are securely stored in MongoDB with user-based access.",
            },
            {
              icon: <Clock />,
              title: "Timeline View",
              desc: "View scan results in chronological order with timestamps.",
            },
            {
              icon: <BarChart3 />,
              title: "Trend Analysis",
              desc: "Monitor disease patterns and recurring infections across seasons.",
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
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FileText /> Why Scan History Matters
          </h2>

          <p>
            Keeping track of crop disease history helps farmers detect recurring
            issues early. If a certain disease appears frequently in a season,
            preventive actions can be taken before it spreads widely.
          </p>

          <p>
            Historical data also allows agricultural researchers and institutions
            to analyze crop patterns and recommend better farming practices.
            AgroVision AI ensures this data remains private, secure, and
            accessible only to authorized users.
          </p>

          <p>
            Future upgrades will include exportable reports, seasonal comparison
            graphs, and AI-powered insights that predict possible future
            outbreaks based on previous patterns.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
