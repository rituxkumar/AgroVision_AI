"use client";

import { motion, AnimatePresence } from "framer-motion";
import { dummyHistory } from "@/lib/dummyData";
import { Leaf, BarChart3, Calendar, Pill } from "lucide-react";
import { useState } from "react";


export default function HistoryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <div className="min-h-screen px-6 md:px-20 py-20 bg-white dark:bg-[#0f1f14] transition-colors">
            <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-10">
                Scan History
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {dummyHistory.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-green-50 dark:bg-[#13281b] p-6 rounded-xl shadow-md border border-green-200 dark:border-green-800 hover:shadow-green-400/20 transition"
                    >
                        <div className="flex flex-col md:flex-row gap-6">

                            {/* LEFT SIDE - Details */}
                            <div className="flex-1">

                                <div className="flex items-center gap-3 mb-3">
                                    <Leaf className="text-green-600" />
                                    <p className="text-black dark:text-white">
                                        <strong>Disease:</strong> {item.disease}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <BarChart3 className="text-green-600" />
                                    <p className="text-black dark:text-white flex items-center gap-2">
                                        <strong>Confidence:</strong>
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-800 text-white">
                                            {item.confidence}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 mb-3">
                                    <Pill className="text-green-600" />
                                    <p className="text-black dark:text-white">
                                        <strong>Medicine:</strong> {item.medicine}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Calendar className="text-green-600" />
                                    <p className="text-black dark:text-white">
                                        <strong>Date:</strong> {item.date}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE - Leaf Image */}
                            <div
                                onClick={() => setSelectedImage(item.image)}
                                className="w-full md:w-40 h-40 rounded-xl overflow-hidden border border-green-300 dark:border-green-700 shadow-sm cursor-pointer"
                            >
                                <img
                                    src={item.image}
                                    alt="Leaf"
                                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                                />
                            </div>


                        </div>
                    </motion.div>

                    

                ))}

                <AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
        src={selectedImage}
        alt="Preview"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.7 }}
        transition={{ duration: 0.3 }}
        className="min-w-[50%] max-w-[90%] max-h-[80%] rounded-2xl shadow-2xl border border-green-400"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )}
</AnimatePresence>




            </div>
        </div>
    );
}
