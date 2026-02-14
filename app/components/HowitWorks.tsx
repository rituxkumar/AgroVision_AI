"use client";

import React from "react";
import { Upload, Scan, Brain, FileText } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Upload Leaf Image",
    description:
      "Take a photo or upload an image of the crop leaf using your device.",
    icon: <Upload className="w-8 h-8 text-green-400" />,
  },
  {
    id: 2,
    title: "AI Scans the Image",
    description:
      "Our AI model analyzes the image using advanced deep learning.",
    icon: <Scan className="w-8 h-8 text-green-400" />,
  },
  {
    id: 3,
    title: "Detect Disease",
    description:
      "AI detects disease and calculates confidence score instantly.",
    icon: <Brain className="w-8 h-8 text-green-400" />,
  },
  {
    id: 4,
    title: "Get Treatment Advice",
    description:
      "Receive treatment suggestions and recommendations immediately.",
    icon: <FileText className="w-8 h-8 text-green-400" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-black via-green-950 to-black">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          How It Works
        </h2>

        <p className="text-green-200 max-w-2xl mx-auto">
          Our AI-powered system detects crop diseases in seconds using advanced image analysis.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {steps.map((step) => (
          <div
            key={step.id}
            className="
              group
              bg-black/40
              backdrop-blur-lg
              border border-green-500/20
              rounded-xl
              p-6
              hover:border-green-400
              hover:shadow-green-500/20
              hover:shadow-lg
              transition-all duration-300
            "
          >

            {/* Icon */}
            <div className="mb-4">
              {step.icon}
            </div>

            {/* Step number */}
            <div className="text-green-500 font-bold mb-2">
              Step {step.id}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-green-300 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-green-200 text-sm">
              {step.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
