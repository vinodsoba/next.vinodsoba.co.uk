"use client";

import { motion } from "framer-motion";

export default function GameInstructions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute left-1/2 top-28 z-30 -translate-x-1/2 rounded-3xl border border-white/20 bg-white/10 px-6 py-4 text-center text-white shadow-2xl backdrop-blur-md"
    >
      <p className="text-sm font-semibold">
        Use ← → arrows to move <br/>
        hold for turbo boost
      </p>

      <p className="mt-1 text-xs text-slate-300">
        Press Space to jump
      </p>
    </motion.div>
  );
}