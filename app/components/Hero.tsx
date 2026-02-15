"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-[#0f1f14] dark:to-[#0b1510] transition-colors duration-500 pt-24">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-green-700 dark:text-white leading-tight">
                        Smart Crop Disease Detection
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                        AgroVision AI helps farmers detect crop diseases instantly using
                        AI-powered image analysis and provides treatment recommendations.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <Link href={'/scan'}>

                            <button className=" cursor-pointer px-6 py-3 font-bold bg-[#016630] text-white rounded-xl shadow-lg hover:scale-105 transition transform">
                                🌱 Scan Leaf Now
                            </button>
                        </Link>
                        <Link href={'/LearnMore'}>
                            <button className="px-6 cursor-pointer font-bold py-3 border border-green-600 text-green-700 dark:text-green-400 rounded-xl hover:bg-green-100 dark:hover:bg-green-900 transition">
                                Learn More
                            </button></Link>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="relative w-full h-112.5 md:h-125 ">
                        <Image
                            src="/leaf-ai.png"
                            alt="AI Crop Detection"
                            fill
                            className="object-cover rounded-3xl"

                        />
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
