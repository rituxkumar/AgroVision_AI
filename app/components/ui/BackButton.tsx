"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => router.back()}
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#13281b] text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-xl shadow-sm hover:bg-green-50 dark:hover:bg-green-900 transition-all font-medium mb-6 group"
    >
      <ArrowLeft size={20} className="group-hover:translate-x-[-2px] transition-transform" />
      <span>Back</span>
    </motion.button>
  );
}
