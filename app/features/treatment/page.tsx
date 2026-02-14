"use client";

import PageWrapper from "@/app/components/PageWrapper";
import {
  Pill,
  FlaskConical,
  ShieldPlus,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export default function TreatmentPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-[#0f1f14] px-6 md:px-20 py-20 text-gray-700 dark:text-gray-200">

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold text-green-600 dark:text-green-400 mb-10 flex items-center gap-4"
        >
          <Pill size={40} /> Smart Treatment Advice
        </motion.h1>

        <p className="mb-12 text-lg max-w-3xl">
          After detecting a crop disease, AgroVision AI provides scientifically
          recommended treatment steps to help farmers control and eliminate
          infections effectively.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FlaskConical />,
              title: "Recommended Chemicals",
              desc: "Suggestions include fungicides and pesticides with proper usage.",
            },
            {
              icon: <ShieldPlus />,
              title: "Preventive Measures",
              desc: "Guidance to prevent disease spread across fields.",
            },
            {
              icon: <Leaf />,
              title: "Organic Alternatives",
              desc: "Eco-friendly options for sustainable farming.",
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
