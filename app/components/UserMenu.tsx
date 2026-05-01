"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LayoutDashboard, History, LogOut, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get user from localStorage on mount
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user");
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      localStorage.removeItem("user");
      setUser(null);
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed");
    }
  };

  if (!user) {
    return (
      <button 
        onClick={() => router.push("/login")}
        className="px-4 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition"
      >
        Login
      </button>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-2 cursor-pointer p-1.5 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div className="hidden sm:block text-left">
          <p className="text-xs font-bold text-green-700 dark:text-green-300 truncate max-w-[80px]">
            {user.username}
          </p>
        </div>
        <ChevronDown size={14} className="text-green-600 dark:text-green-400" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 mt-2 w-52 bg-white dark:bg-[#0f1f14] shadow-2xl rounded-xl border border-green-200 dark:border-green-800 p-2 z-[60]"
          >
            <div className="px-3 py-2 border-b border-green-100 dark:border-green-900 mb-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">Signed in as</p>
              <p className="text-sm font-bold text-green-700 dark:text-green-300 truncate">{user.email}</p>
            </div>

            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/50 rounded-lg transition"
            >
              <LayoutDashboard size={18} className="text-green-600" />
              <span className="text-sm font-medium">Dashboard</span>
            </button>

            <button
              onClick={() => router.push("/history")}
              className="flex items-center gap-3 w-full px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-900/50 rounded-lg transition"
            >
              <History size={18} className="text-green-600" />
              <span className="text-sm font-medium">History</span>
            </button>

            <div className="h-px bg-green-100 dark:bg-green-900 my-1" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
