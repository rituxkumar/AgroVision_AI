"use client";

import PageWrapper from "@/app/components/PageWrapper";
import {
  Bot,
  MessageCircle,
  Sparkles,
  Brain,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ChatPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-[#0f1f14] px-6 md:px-20 py-20 text-gray-700 dark:text-gray-200">

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold text-green-600 dark:text-green-400 mb-10 flex items-center gap-4"
        >
          <Bot size={40} /> AI Chat Support
        </motion.h1>

        <p className="text-lg max-w-4xl mb-14 leading-relaxed">
          AgroVision AI includes an intelligent chatbot assistant that provides
          instant answers to crop-related questions. Whether it's disease
          prevention, fertilizer guidance, or seasonal farming advice, the AI
          assistant is available 24/7.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <MessageCircle />,
              title: "Instant Answers",
              desc: "Ask questions and receive immediate AI-powered responses.",
            },
            {
              icon: <Brain />,
              title: "Smart Recommendations",
              desc: "Context-aware advice based on your crop and region.",
            },
            {
              icon: <Clock />,
              title: "24/7 Availability",
              desc: "Farmers can get help anytime without waiting for experts.",
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

        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <ShieldCheck /> Safe & Reliable
          </h2>

          <p>
            The chatbot is built using Natural Language Processing (NLP) models
            that understand farmer queries in simple language. It provides
            structured answers with actionable steps.
          </p>

          <p>
            Future upgrades will include voice-based interaction and regional
            language support, making it accessible to farmers across rural
            areas.
          </p>

          <p>
            AgroVision AI ensures secure conversations and does not misuse
            farmer data.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
