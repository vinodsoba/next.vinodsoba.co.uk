"use client";

import { motion } from "framer-motion";

export default function ResponsivePreview() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4">
        
        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full sm:w-40 max-w-[220px] rounded-xl bg-white p-2 shadow-2xl"
        >
          <div className="h-3 rounded bg-slate-900 mb-2" />
          <div className="grid grid-cols-3 gap-1 mb-2">
            <div className="h-10 rounded bg-emerald-100 col-span-2" />
            <div className="h-10 rounded bg-teal-100" />
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div className="h-8 rounded bg-cyan-100" />
            <div className="h-8 rounded bg-cyan-100" />
            <div className="h-8 rounded bg-cyan-100" />
          </div>
        </motion.div>

        {/* Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-32 sm:w-28 rounded-xl bg-white p-2 shadow-2xl"
        >
          <div className="h-3 rounded bg-slate-900 mb-2" />
          <div className="grid grid-cols-2 gap-1 mb-2">
            <div className="h-9 rounded bg-emerald-100" />
            <div className="h-9 rounded bg-teal-100" />
          </div>
          <div className="h-8 rounded bg-cyan-100" />
        </motion.div>

        {/* Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-24 sm:w-20 rounded-2xl bg-white p-2 shadow-2xl"
        >
          <div className="h-2 rounded bg-slate-900 mb-2" />
          <div className="space-y-1">
            <div className="h-7 rounded bg-emerald-100" />
            <div className="h-7 rounded bg-teal-100" />
            <div className="h-7 rounded bg-cyan-100" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}