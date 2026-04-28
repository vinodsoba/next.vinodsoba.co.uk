"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LetsTalk() {
  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto rounded-3xl bg-slate-950 px-8 py-16 text-center text-white shadow-2xl"
      >
        <span className="text-sm font-semibold text-cyan-400">
          Ready to build something better?
        </span>

        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          Let’s create a website that looks great, works smoothly, and supports your business goals.
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
          Whether you need a new website, improved page layouts, responsive design, or front-end development support, I can help turn your ideas into a polished digital experience.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-100 transition"
          >
            Let’s Talk
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  );
}