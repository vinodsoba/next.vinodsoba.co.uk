"use client";

import { motion } from "framer-motion";

export default function WireframeToUI() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="h-10 rounded-lg bg-white/40" />

        <div className="grid grid-cols-3 gap-3">
          <div className="h-24 rounded-lg bg-white/30 col-span-2" />
          <div className="h-24 rounded-lg bg-white/30" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 rounded-lg bg-white/25" />
          <div className="h-20 rounded-lg bg-white/25" />
          <div className="h-20 rounded-lg bg-white/25" />
        </div>

        <div className="h-8 rounded-lg bg-white/30 w-1/2 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        viewport={{ once: true }}
        className="absolute inset-0 rounded-2xl bg-white text-slate-900 p-5 shadow-2xl"
      >
        <div className="h-9 rounded-lg bg-slate-900 mb-4" />

        <div className="rounded-xl bg-slate-100 p-4 mb-4">
          <div className="h-5 bg-slate-800 rounded w-3/4 mb-3" />
          <div className="h-3 bg-slate-300 rounded w-full mb-2" />
          <div className="h-3 bg-slate-300 rounded w-2/3" />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-xl bg-pink-100 h-20" />
          <div className="rounded-xl bg-purple-100 h-20" />
          <div className="rounded-xl bg-fuchsia-100 h-20" />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full rounded-full bg-slate-900 text-white py-3 text-sm font-semibold"
        >
          View Layout
        </motion.button>
      </motion.div>
    </div>
  );
}