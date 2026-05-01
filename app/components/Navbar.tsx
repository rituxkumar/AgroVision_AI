"use client";

import Weather from "./ui/weather";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
    
    setIsLoggedIn(!!localStorage.getItem("user"));
    
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinks = [
    { name: "Explore", href: "/scan" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/70 dark:bg-[#0f1f14]/80 backdrop-blur-xl border-b border-green-100 dark:border-green-900/50 shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/main_logo.png" alt="Logo" className="h-10 sm:h-12 object-contain transition-transform group-hover:scale-105" />
        </Link>

        {/* Center Section: Weather (Hidden on small mobile) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <div className="px-4 py-1.5 bg-green-50/50 dark:bg-green-900/20 rounded-full border border-green-100 dark:border-green-800/50">
            <Weather />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
                  pathname === link.href 
                    ? "text-green-600 dark:text-green-400" 
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 dark:bg-green-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200 dark:bg-green-800/50 mx-2" />

          <div className="flex items-center gap-4">
            <UserMenu />
            
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-green-900/30 text-gray-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-green-900/30 text-gray-600 dark:text-green-400"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#0f1f14] border-b border-green-100 dark:border-green-900"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-green-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-green-100 dark:bg-green-900" />
              
              <div className="flex flex-col gap-4">
                {isLoggedIn ? (
                  <>
                    <Link href="/dashboard" onClick={() => setOpen(false)} className="text-lg font-bold text-green-700 dark:text-green-400">
                      Dashboard
                    </Link>
                    <Link href="/history" onClick={() => setOpen(false)} className="text-lg font-bold text-green-700 dark:text-green-400">
                      History
                    </Link>
                    <button 
                      onClick={async () => {
                        await fetch("/api/auth/logout", { method: "POST" });
                        localStorage.removeItem("user");
                        window.location.href = "/";
                      }}
                      className="text-lg font-bold text-red-500 text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link href="/login" onClick={() => setOpen(false)} className="text-lg font-bold text-green-600">
                    Login
                  </Link>
                )}
              </div>
              
              <div className="pt-4">
                <Weather />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
