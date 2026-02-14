"use client";

import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Farmer, Punjab",
    message:
      "AgroVision AI helped me detect crop disease early. I saved my entire wheat crop and improved yield.",
    image: "/farmer1.jpeg",
  },
  {
    id: 2,
    name: "Amit Sharma",
    role: "Farmer, Haryana",
    message:
      "The AI detection is fast and accurate. Treatment suggestions are very useful.",
    image: "/farmer2.jpeg",
  },
  {
    id: 3,
    name: "Suresh Patel",
    role: "Farmer, Gujarat",
    message:
      "Easy to use and very powerful tool. Highly recommended for farmers.",
    image: "/farmer3.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-green-950 to-black">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          What Farmers Say
        </h2>

        <p className="text-green-200 max-w-2xl mx-auto">
          Trusted by farmers across India to protect their crops using AI.
        </p>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {testimonials.map((t) => (
          <div
            key={t.id}
            className="
              bg-black/40
              backdrop-blur-lg
              border border-green-500/20
              rounded-xl
              p-6
              hover:border-green-400
              hover:shadow-green-500/30
              hover:shadow-lg
              hover:scale-105
              transition-all duration-300
            "
          >

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-green-400 fill-green-400"
                />
              ))}
            </div>

            {/* Message */}
            <p className="text-green-200 mb-6">
              "{t.message}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4">

              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full border border-green-400"
              />

              <div>
                <h4 className="text-green-300 font-semibold">
                  {t.name}
                </h4>

                <p className="text-green-500 text-sm">
                  {t.role}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}