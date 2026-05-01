"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User as UserIcon, 
  Scan, 
  History, 
  ArrowRight, 
  Leaf, 
  Calendar,
  Activity
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserMenu from "../components/UserMenu";

export default function Dashboard() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-[#0f1f14] dark:to-[#0b1510] px-6 md:px-20 py-24 transition-colors">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Top Navigation Bar */}
        <motion.div variants={itemVariants} className="flex justify-between items-center mb-10">
          <Link href="/" className="group">
            <img src="/main_logo.png" alt="Logo" className="h-10 sm:h-12 object-contain transition-transform group-hover:scale-105" />
          </Link>
          <div className="flex items-center gap-4">
            <UserMenu />
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-400 select-none cursor-default">
              Welcome back, {user?.username || "Farmer"}!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg select-none cursor-default">
              Monitor your crops and detect potential threats in real-time.
            </p>
          </div>
        </motion.div>

        {/* Quick Stats/Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Scan Action Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-green-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group cursor-pointer"
            onClick={() => router.push("/scan")}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
              <Scan size={120} />
            </div>
            <div className="relative z-10">
              <div className="bg-white/20 p-3 rounded-xl w-fit mb-6">
                <Scan size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">New Scan</h3>
              <p className="text-green-100 mb-6">Analyze a leaf image to detect diseases instantly.</p>
              <div className="flex items-center gap-2 font-semibold">
                Start Analysis <ArrowRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* History Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-[#13281b] p-8 rounded-3xl shadow-xl border border-green-200 dark:border-green-800 group cursor-pointer"
            onClick={() => router.push("/history")}
          >
            <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl w-fit mb-6">
              <History size={28} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-400">History</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Review your previous crop analysis and reports.</p>
            <div className="flex items-center gap-2 font-semibold text-green-600">
              View All <ArrowRight size={18} />
            </div>
          </motion.div>

          {/* Tips Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-[#13281b] p-8 rounded-3xl shadow-xl border border-green-200 dark:border-green-800"
          >
            <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl w-fit mb-6">
              <Leaf size={28} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-800 dark:text-green-400">Smart Tips</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Regularly monitor your fields for early disease detection.</p>
            <Link href="/about">
              <div className="flex items-center gap-2 font-semibold text-green-600">
                Learn More <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Recent Activity Section */}
        <motion.div variants={itemVariants} className="bg-white dark:bg-[#13281b] p-8 rounded-3xl shadow-xl border border-green-200 dark:border-green-800 select-none cursor-default">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 flex items-center gap-2">
              <Activity className="text-green-600" /> Recent Activity
            </h3>
            <button onClick={() => router.push("/history")} className="text-green-600 font-semibold hover:underline">
              See All
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center py-12 text-gray-500 dark:text-gray-400 flex-col gap-4">
              <Calendar size={48} className="opacity-20" />
              <p>No recent activity found. Start scanning to see results here!</p>
              <button 
                onClick={() => router.push("/scan")}
                className="mt-2 px-6 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg font-bold hover:bg-green-200 dark:hover:bg-green-800 transition"
              >
                Scan Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
