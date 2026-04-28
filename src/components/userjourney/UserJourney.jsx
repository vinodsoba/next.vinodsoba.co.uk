"use client";

import { motion } from "framer-motion";

const steps = ["Homepage", "Category", "Product", "Checkout"];

export default function UserJourney() {
  return (
    <div className="w-full max-w-sm mx-auto px-2">
      <div className="flex flex-wrap items-center justify-center gap-3">

        {steps.map((step, index) => (
          <div key={index} className="flex items-center">

            {/* DOT */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="w-3 h-3 rounded-full bg-white"
            />

            {/* LABEL */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.2 }}
              viewport={{ once: true }}
              className="ml-2 text-xs text-white whitespace-nowrap"
            >
              {step}
            </motion.span>

            {/* LINE */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: index * 0.3 + 0.4, duration: 0.4 }}
                viewport={{ once: true }}
                className="w-6 h-[2px] bg-white/60 mx-2 origin-left"
              />
            )}
          </div>
        ))}

      </div>
    </div>
  );
}