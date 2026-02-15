"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Rinki Kumari", role: "Punjab", message: "AgroVision AI saved my wheat crop.", image: "/farmer1.jpeg" },
  { id: 2, name: "Amit Sharma", role: "Haryana", message: "Very accurate detection system.", image: "/farmer2.jpeg" },
  { id: 3, name: "Suresh Patel", role: "Gujarat", message: "Easy to use and helpful.", image: "/farmer3.jpeg" },
  { id: 4, name: "Meena Devi", role: "Rajasthan", message: "AI chat support is amazing.", image: "/farmer1.jpeg" },
  { id: 5, name: "Raj Verma", role: "UP", message: "Confidence score is very helpful.", image: "/farmer2.jpeg" },
  { id: 6, name: "Anil Kumar", role: "MP", message: "Saved my crops from infection.", image: "/farmer3.jpeg" },
  { id: 7, name: "Pooja Singh", role: "Bihar", message: "Nearby shop feature is useful.", image: "/farmer1.jpeg" },
  { id: 8, name: "Harpreet Gill", role: "Punjab", message: "Highly recommended tool.", image: "/farmer2.jpeg" },
  { id: 9, name: "Kiran Yadav", role: "Maharashtra", message: "Very powerful AI system.", image: "/farmer3.jpeg" },
  { id: 10, name: "Manoj Singh", role: "Haryana", message: "Improved my crop yield.", image: "/farmer1.jpeg" },
];

// Duplicate for infinite loop illusion
const infiniteTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-20 overflow-hidden dark:bg-[#0F1F14] px-12">

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F0B100] mb-4">
          What Farmers Say
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {infiniteTestimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[300px]
                md:min-w-[350px]
                bg-[#E5E7EB]
                dark:bg-black/40
                backdrop-blur-lg
                border border-green-500/20
                rounded-xl
                p-6
                hover:border-green-400
                hover:shadow-green-500/30
                hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 text-yellow-500 fill-yellow-100"
                  />
                ))}
              </div>

              <p className="text-black mb-6 dark:text-white">
                "{t.message}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-green-400"
                />
                <div>
                  <h4 className="text-black dark:text-gray-200 font-semibold">
                    {t.name}
                  </h4>
                  <p className="text-green-600 text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
