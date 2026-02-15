"use client";

import React from "react";
import { Leaf, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 px-6 pb-10">

      {/* Glass Container */}
      <div
        className="
        max-w-7xl mx-auto
        bg-green-500/5
        backdrop-blur-xl
        border border-green-500/20
        rounded-2xl
        shadow-[0_0_40px_rgba(34,197,94,0.15)]
        p-10
      "
      >

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <div className="flex items-center gap-2 mb-4">

              <div className="p-2 rounded-lg bg-green-500/10 border border-green-400/30">
                <Leaf className="text-green-400 w-5 h-5" />
              </div>

              <h2 className="text-green-400 font-bold text-xl">
                AgroVision AI
              </h2>

            </div>

            <p className="text-black  dark:text-white ">
              AI-powered crop disease detection helping farmers protect crops,
              increase yield, and make smarter decisions using advanced AI.
            </p>

          </div>

          {/* Links */}
          <div>

            <h3 className="text-green-400 font-semibold mb-4">
              Navigation
            </h3>

            <div className="flex flex-col gap-2 text-black ">

              <Link href="/" className="hover:text-green-400 transition  dark:text-white">
                Home
              </Link>

              <Link href="/scan" className="hover:text-green-400 transition  dark:text-white">
                Scan
              </Link>

              <Link href="/features" className="hover:text-green-400 transition  dark:text-white">
                Features
              </Link>

              <Link href="/contact" className="hover:text-green-400 transition  dark:text-white">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-green-400 font-semibold mb-4">
              Contact
            </h3>

            <div className="flex flex-col gap-3 text-black text-sm">

              <div className="flex items-center gap-2  dark:text-white">
                <Mail className="w-4 h-4 text-black dark:text-white" />
                support@agrovision.ai
              </div>

              <div className="flex items-center gap-2  dark:text-white">
                <Phone className="w-4 h-4 text-black dark:text-white" />
                +91 9876543210
              </div>

              <div className="flex items-center gap-2 text-black dark:text-white">
                <MapPin className="w-4 h-4 text-black dark:text-white" />
                India
              </div>

            </div>

          </div>

          {/* Social */}
          <div>

            <h3 className="text-green-400 font-semibold mb-4">
              Social
            </h3>

            <div className="flex gap-4">

              <div className="p-2 bg-green-500/10 border border-green-400/30 rounded-lg hover:bg-green-500/20 transition cursor-pointer">
                <Github className="text-black w-5 h-5 dark:text-white" />
              </div>

              <div className="p-2 bg-green-500/10 border border-green-400/30 rounded-lg hover:bg-green-500/20 transition cursor-pointer">
                <Linkedin className="text-black w-5 h-5 dark:text-white" />
              </div>

              <div className="p-2 bg-green-500/10 border border-green-400/30 rounded-lg hover:bg-green-500/20 transition cursor-pointer">
                <Twitter className="text-black w-5 h-5 dark:text-white" />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-green-500/20 mt-10 pt-6 text-center">

          <p className="text-green-800 text-semibold dark:text-white
          ">
            © 2026 AgroVision AI • Built with AI for Farmers 🌱
          </p>

        </div>

      </div>

    </footer>
  );
}