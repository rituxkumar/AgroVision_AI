"use client";

import PageWrapper from "@/app/components/PageWrapper";
import {
  MapPin,
  Store,
  Navigation,
  Phone,
  Clock,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ShopsPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white dark:bg-[#0f1f14] px-6 md:px-20 py-20 text-gray-700 dark:text-gray-200">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-green-600 dark:text-green-400 mb-10 flex items-center gap-4"
        >
          <Globe size={40} /> Find Nearby Agro Shops
        </motion.h1>

        <p className="text-lg max-w-4xl mb-14 leading-relaxed">
          AgroVision AI helps farmers locate nearby agricultural shops,
          fertilizer stores, and pesticide suppliers quickly. This reduces
          travel time and ensures timely treatment application.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <MapPin />,
              title: "Location-Based Search",
              desc: "Uses GPS data to find nearby agricultural stores.",
            },
            {
              icon: <Navigation />,
              title: "Navigation Support",
              desc: "Integrated map directions for easy travel guidance.",
            },
            {
              icon: <Store />,
              title: "Verified Stores",
              desc: "Trusted and verified agro product suppliers.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 dark:bg-[#13281b] p-6 rounded-xl shadow-md"
            >
              <div className="text-green-600 dark:text-green-400 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Phone /> Direct Contact & Timing Info
          </h2>

          <p>
            Farmers can directly contact shop owners, check store timings,
            availability of fertilizers, and pricing details before visiting.
          </p>

          <p>
            Future updates will include online ordering and digital payment
            integration to simplify purchasing.
          </p>

          <p>
            By connecting farmers with local suppliers, AgroVision AI reduces
            unnecessary travel delays and promotes efficient farming practices.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
