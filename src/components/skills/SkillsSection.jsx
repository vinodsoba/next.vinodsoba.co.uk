"use client";

import { motion } from "framer-motion";
import SkillsScroller from "@/components/scrollericon/ScrollerIcon";

/**
 * @param {{ skills: any[] }} props
 */
export default function SkillsSection({ skills }) {
  if (!skills.length) return null;

  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto px-6">


        <div className="flex items-center gap-3 mb-6">

          <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
        />

          <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-medium">
            Skills and Expertise
          </p>

        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-12"
        >

          
          What I <span className="text-teal-500">Do</span>
        </motion.h2>

        <SkillsScroller skills={skills} />

      </div>
    </section>
  );
}