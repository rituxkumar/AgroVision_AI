"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HelpCircle, ChevronDown, Leaf } from "lucide-react";

const faqs = [
  {
    question: "What is AgroVision AI?",
    answer:
      "AgroVision AI is an AI-powered platform that helps farmers detect crop diseases instantly using image analysis and machine learning.",
  },
  {
    question: "How does disease detection work?",
    answer:
      "You simply upload a leaf image, and our AI analyzes it to detect diseases and provide treatment recommendations.",
  },
  {
    question: "Is AgroVision AI free to use?",
    answer:
      "Yes, AgroVision AI provides free basic disease detection. Premium features may be added in future.",
  },
  {
    question: "How accurate is the detection?",
    answer:
      "Our AI model is trained on thousands of crop images and provides highly accurate results.",
  },
  {
    question: "Can I use AgroVision AI on mobile?",
    answer:
      "Yes, AgroVision AI works on mobile, tablet, and desktop devices.",
  },
];

export default function FAQPage() {

  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <div
      className="
      min-h-screen
      px-6 py-20
   
     
      dark:bg-[#0F1F14]
    "
    >

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >

        <Leaf className="mx-auto text-green-500 w-14 h-14 mb-4 animate-pulse" />

        <h1 className="text-5xl font-bold text-[#F0B100] mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-gray-900 dark:text-white text-lg">
          Find answers to common questions about AgroVision AI
        </p>

      </motion.div>


      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((faq, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="
            bg-white/70 dark:bg-black/40
            backdrop-blur-xl
            border border-green-500/20
            rounded-xl
            overflow-hidden
          "
          >

            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="
              w-full flex justify-between items-center
              p-5 text-left cursor-pointer
            "
            >

              <div className="flex items-center gap-3">

                <HelpCircle className="text-green-500" />

                <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {faq.question}
                </span>

              </div>

              <ChevronDown
                className={`text-green-500 transition ${
                  active === index ? "rotate-180" : ""
                }`}
              />

            </button>


            {/* Answer */}
            <AnimatePresence>

              {active === index && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5"
                >

                  <p className="text-gray-900 dark:text-green-200">
                    {faq.answer}
                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </div>
  );
}