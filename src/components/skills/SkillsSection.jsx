"use client";

import { motion } from "framer-motion";
import SkillsScroller from "@/components/scrollericon/ScrollerIcon";

/**
 * @param {{ skills: any[] }} props
 */
export default function SkillsSection({ skills }) {
  if (!skills.length) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

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