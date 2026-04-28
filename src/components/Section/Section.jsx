// @ts-nocheck
"use client";

import { motion } from "framer-motion";

export default function Section({
  title,
  description,
  step,
  gradient = "from-purple-500 via-pink-500 to-orange-400",
  children,
}) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span className="text-sm font-semibold text-pink-500">
            Step {step}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">
            {title}
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            {description}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-3xl min-h-72 p-8 flex items-center justify-center shadow-xl bg-gradient-to-br ${gradient}`}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-white w-full h-full flex items-center justify-center text-center">
            {children ? (
              children 
            ) : (
              <span className="text-xl font-semibold">
                Visual / Animation here
              </span>

            )
              
}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}