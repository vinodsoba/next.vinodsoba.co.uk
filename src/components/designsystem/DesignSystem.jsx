"use client";

import { motion } from "framer-motion";

export default function DesignSystem() {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-3 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold shadow"
        >
          Primary
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full bg-white/30 text-white text-sm font-semibold border border-white/40"
        >
          Secondary
        </motion.button>
      </motion.div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white text-slate-900 rounded-xl p-4 shadow"
      >
        <div className="h-4 bg-slate-800 rounded w-2/3 mb-2" />
        <div className="h-3 bg-slate-300 rounded w-full mb-1" />
        <div className="h-3 bg-slate-300 rounded w-3/4" />
      </motion.div>

      {/* INPUT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white/20 backdrop-blur-md rounded-xl p-3"
      >
        <div className="h-3 bg-white/40 rounded w-1/3 mb-2" />
        <div className="h-8 bg-white/30 rounded" />
      </motion.div>

    </div>
  );
}