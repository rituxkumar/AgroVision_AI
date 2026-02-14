"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-30 sm:h-40 w-full dark:bg-[#0D1912] flex flex-col items-start justify-start overflow-hidden rounded-md">
      <div className="w-screen h-full relative">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={isDark ? "#FFFFFF" : "#000000"} 
        />
      </div>
    </div>
  );
}
