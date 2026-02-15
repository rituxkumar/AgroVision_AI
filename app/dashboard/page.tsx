"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { dummyUser } from "@/lib/dummyData";
import { Edit } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(dummyUser);
  const [editing, setEditing] = useState(false);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen px-6 md:px-20 py-20 bg-white dark:bg-[#0f1f14] transition-colors">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-3xl mx-auto bg-green-50 dark:bg-[#13281b] p-10 rounded-2xl shadow-xl mt-2"
      >
        <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-8">
          User Dashboard
        </h1>

        {["name", "address", "landArea"].map((field) => (
          <div key={field} className="mb-4 text-black dark:text-white">
            <label className="block font-semibold capitalize">
              {field}
            </label>
            <input
              name={field}
              value={(user as any)[field]}
              disabled={!editing}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-lg border"
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block font-semibold dark:text-white">Email</label>
          <input
            value={user.email}
            disabled
            className="w-full mt-1 p-2 rounded-lg border bg-gray-100"
          />
        </div>

        <button
          onClick={() => setEditing(!editing)}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg flex gap-2 items-center"
        >
          <Edit size={18} />
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </motion.div>
    </div>
  );
}
