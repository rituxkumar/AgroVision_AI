"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Leaf,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      className="
      min-h-screen
      px-6 py-20
      bg-gradient-to-b
      from-white via-green-50 to-white
      dark:from-black dark:via-green-950 dark:to-black
      transition-colors duration-500
    "
    >

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 max-w-4xl mx-auto"
      >

        <Leaf className="mx-auto text-green-500 w-14 h-14 mb-4 animate-pulse" />

        <h1 className="text-5xl font-bold text-green-500 mb-4">
          Contact AgroVision AI
        </h1>

        <p className="text-gray-700 dark:text-green-200 text-lg">
          Have questions, feedback, or need assistance? Our team is ready to
          help you. Reach out and we'll respond quickly.
        </p>

      </motion.div>


      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">


        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="
          bg-white/70 dark:bg-black/40
          backdrop-blur-xl
          border border-green-500/20
          rounded-xl
          p-8
          shadow-lg
        "
        >

          <h2 className="text-2xl font-semibold text-green-500 mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              required
              className="
              w-full p-3 rounded-lg
              bg-white dark:bg-black/30
              border border-green-500/20
              text-black dark:text-green-200
            "
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="
              w-full p-3 rounded-lg
              bg-white dark:bg-black/30
              border border-green-500/20
              text-black dark:text-green-200
            "
            />

            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="
              w-full p-3 rounded-lg
              bg-white dark:bg-black/30
              border border-green-500/20
              text-black dark:text-green-200
            "
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="
              flex items-center gap-2
              bg-green-500
              hover:bg-green-600
              text-white
              px-6 py-3
              rounded-lg
              transition
            "
            >
              <Send size={18} />
              Send Message
            </motion.button>

            {submitted && (
              <p className="text-green-500 mt-3">
                Message sent successfully!
              </p>
            )}

          </form>

        </motion.div>


        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="
          bg-white/70 dark:bg-black/40
          backdrop-blur-xl
          border border-green-500/20
          rounded-xl
          p-8
          shadow-lg
        "
        >

          <h2 className="text-2xl font-semibold text-green-500 mb-6">
            Contact Information
          </h2>


          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-green-500" />
              <div>
                <p className="text-green-500 font-semibold">Email</p>
                <p className="text-gray-700 dark:text-green-200">
                  support@agrovision.ai
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <Phone className="text-green-500" />
              <div>
                <p className="text-green-500 font-semibold">Phone</p>
                <p className="text-gray-700 dark:text-green-200">
                  +91 9876543210
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <MapPin className="text-green-500" />
              <div>
                <p className="text-green-500 font-semibold">Location</p>
                <p className="text-gray-700 dark:text-green-200">
                  India
                </p>
              </div>
            </div>

          </div>


          {/* Premium Section */}
          <div className="mt-10">

            <h3 className="text-xl font-semibold text-green-500 mb-3 flex items-center gap-2">
              <Sparkles size={20} />
              Why Contact Us?
            </h3>

            <ul className="text-gray-700 dark:text-green-200 space-y-2">

              <li>• Get technical support</li>
              <li>• Report issues or bugs</li>
              <li>• Provide feedback</li>
              <li>• Business partnerships</li>
              <li>• General inquiries</li>

            </ul>

          </div>


          {/* Next Step Premium Section */}
          <div className="mt-10">

            <h3 className="text-xl font-semibold text-green-500 mb-3 flex items-center gap-2">
              <ShieldCheck size={20} />
              Our Commitment
            </h3>

            <p className="text-gray-700 dark:text-green-200">
              AgroVision AI is committed to helping farmers using advanced AI.
              Our team ensures fast support and reliable assistance to improve
              your farming experience.
            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
}