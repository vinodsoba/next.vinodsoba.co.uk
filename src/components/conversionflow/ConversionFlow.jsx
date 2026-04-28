"use client";

import { motion } from "framer-motion";

export default function ConversionFlow() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white p-5 text-slate-900 shadow-2xl"
      >
        <div className="h-5 w-2/3 rounded bg-slate-900 mb-3" />
        <div className="h-3 w-full rounded bg-slate-200 mb-2" />
        <div className="h-3 w-3/4 rounded bg-slate-200 mb-5" />

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="h-20 rounded-xl bg-orange-100" />
          <div className="h-20 rounded-xl bg-yellow-100" />
        </div>

        <motion.button
          initial={{ scale: 1 }}
          whileInView={{
            scale: [1, 1.06, 1],
            boxShadow: [
              "0 0 0 0 rgba(15,23,42,0)",
              "0 0 0 8px rgba(15,23,42,0.12)",
              "0 0 0 0 rgba(15,23,42,0)",
            ],
          }}
          transition={{ delay: 0.8, duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white"
        >
          Start Project
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 rounded-xl bg-green-100 px-4 py-3 text-center text-sm font-semibold text-green-700"
        >
          ✓ Clear action completed
        </motion.div>
      </motion.div>
    </div>
  );
}