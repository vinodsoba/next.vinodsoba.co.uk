"use client";

import { motion } from "framer-motion";

export default function CodeToUI() {
  return (
    <div className="relative w-full max-w-sm mx-auto min-h-[260px]">
      {/* CODE PANEL */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 0.25, x: -20 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-slate-950 text-left p-4 shadow-2xl"
      >
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-white/30" />
          <span className="w-3 h-3 rounded-full bg-white/30" />
          <span className="w-3 h-3 rounded-full bg-white/30" />
        </div>

        <div className="space-y-2 text-xs font-mono text-sky-200">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ delay: 0.2, duration: 0.5 }} className="h-3 bg-sky-300/40 rounded" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "70%" }} transition={{ delay: 0.4, duration: 0.5 }} className="h-3 bg-blue-300/40 rounded" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ delay: 0.6, duration: 0.5 }} className="h-3 bg-cyan-300/40 rounded" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} transition={{ delay: 0.8, duration: 0.5 }} className="h-3 bg-indigo-300/40 rounded" />
        </div>
      </motion.div>

      {/* UI PANEL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: -10 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        viewport={{ once: true }}
        className="absolute left-6 right-6 top-24 rounded-2xl bg-white text-slate-900 p-5 shadow-2xl"
      >
        <div className="h-5 bg-slate-900 rounded w-2/3 mb-3" />
        <div className="h-3 bg-slate-200 rounded w-full mb-2" />
        <div className="h-3 bg-slate-200 rounded w-3/4 mb-5" />

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="h-16 rounded-xl bg-sky-100" />
          <div className="h-16 rounded-xl bg-blue-100" />
        </div>

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="h-10 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm font-semibold"
        >
          Component Ready
        </motion.div>
      </motion.div>
    </div>
  );
}