"use client";

import { motion } from "framer-motion";

export default function EducationCheckpoint() {
  return (
    <div className="absolute bottom-28 left-[1760px] z-20">
      {/* Sign */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: [10, 0, 10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-4 text-center"
      >
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-xl backdrop-blur-md">
          🎓 Education
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[320px] rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold">
          Education & Continuous Learning
        </h2>

        <p className="mt-4 text-sm leading-6 text-slate-200">
          Completed BSC Hons in Computer Science in 2006.
          My background combines formal learning with over 15 years of hands-on
          experience in web development, eCommerce, UX, digital platforms, and
          front-end technologies.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {["React", "Next.js", "Magento", "WordPress", "UX", "SEO"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white"
              >
                {item}
              </span>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}