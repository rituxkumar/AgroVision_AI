"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LayoutDashboard, History } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <User className="cursor-pointer text-green-600 dark:text-green-400" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 mt-3 w-48 bg-white dark:bg-[#13281b] shadow-xl rounded-xl border border-green-200 dark:border-green-800 p-3"
          >
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg"
            >
              <LayoutDashboard size={18} /> Dashboard
            </button>

            <button
              onClick={() => router.push("/history")}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg"
            >
              <History size={18} /> History
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
