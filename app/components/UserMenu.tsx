"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, LayoutDashboard, History, LogOut, ChevronDown, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
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
        className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
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
      <div className="flex items-center gap-3 cursor-pointer p-1 group">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-md transition-all">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div className="hidden lg:block text-left">
          <p className="text-xs font-bold text-gray-700 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {user.username}
          </p>
        </div>
        <ChevronDown size={14} className="text-gray-400 group-hover:text-green-600 transition-colors" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-3 w-56 bg-white dark:bg-[#0f1f14] shadow-2xl rounded-2xl border border-green-100 dark:border-green-900 p-2 z-[60] backdrop-blur-xl"
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-green-900/50 mb-1">
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500">Account</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate">{user.email}</p>
            </div>

            <div className="py-1">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-400 rounded-xl transition-all"
              >
                <Home size={18} />
                <span className="text-sm font-medium">Home Page</span>
              </button>

              <button
                onClick={() => router.push("/dashboard")}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-400 rounded-xl transition-all"
              >
                <LayoutDashboard size={18} />
                <span className="text-sm font-medium">Dashboard</span>
              </button>

              <button
                onClick={() => router.push("/history")}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/40 hover:text-green-700 dark:hover:text-green-400 rounded-xl transition-all"
              >
                <History size={18} />
                <span className="text-sm font-medium">History</span>
              </button>
            </div>

            <div className="h-px bg-gray-100 dark:bg-green-900/50 my-1" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-all"
            >
              <LogOut size={18} />
              <span className="text-sm font-bold">Sign Out</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
