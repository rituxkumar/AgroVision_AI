"use client";
import Weather from "./ui/weather";
import { useState, useEffect } from "react";
import { Sun, Moon, Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  // Save preference
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-[#0f1f14]/90 border-b border-green-200 dark:border-green-900 transition-all">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href={'/'}>
           <img src={'./main_logo.png'} className="h-11 sm:h-12 "/>
           </Link>
           <div>
            <Weather />
          </div>
        
        <div className=" text-[12px] flex items-center gap-2 sm:text-2xl font-bold text-green-600 dark:text-green-400">
         
          
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-green-700 dark:text-green-300">
          <div className="flex  gap-5 font-bold">
            <Link href={'/scan'}> <p className=" bg-[#DBFCE7] hover:bg-[#dbfce78c]  dark:bg-green-800/40 px-3 py-1 rounded-xl cursor-pointer dark:hover:bg-green-800/30">Explore</p></Link>

            <Link href={'/contact'}><p className=" bg-[#DBFCE7] hover:bg-[#dbfce78c] dark:bg-green-800/40 px-3 py-1 rounded-xl cursor-pointer dark:hover:bg-green-800/30">Contact</p></Link>
            <Link href={'/about'}><p className=" bg-[#DBFCE7] hover:bg-[#dbfce78c] dark:bg-green-800/40 px-3 py-1 rounded-xl cursor-pointer dark:hover:bg-green-800/30">About</p></Link>
            <Link href={'/login'}> <p className="bg-[#DBFCE7] hover:bg-[#dbfce78c] dark:bg-green-800/40 px-3 py-1 rounded-xl cursor-pointer dark:hover:bg-green-800/30">Login</p></Link>
            {/* <Link href={'/faq'}> <p  className="bg-[#DBFCE7] hover:bg-[#dbfce78c] dark:bg-green-800/40 px-3 py-1 rounded-xl cursor-pointer dark:hover:bg-green-800/30"">FAQ</p></Link> */}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-green-100 dark:bg-green-800 hover:scale-110 transition cursor-pointer"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme}>
            {dark ? <Sun className="text-white" size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setOpen(!open)}>
            {open ? <X className=" dark:text-white" size={24} /> : <Menu className="text-black dark:text-white" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="md:hidden px-6 pb-6 bg-white dark:bg-[#0f1f14] text-green-700 dark:text-green-300"
          >
            <p className="py-2">Dashboard</p>
            <p className="py-2">Scan</p>
            <p className="py-2">AI Support</p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
