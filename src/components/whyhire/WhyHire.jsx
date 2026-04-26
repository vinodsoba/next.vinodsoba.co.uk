"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyHire({ acf }) {
  if (!acf) return null;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="md:col-span-2">

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: acf.title }}
              className="text-3xl md:text-5xl font-semibold mb-6 text-black"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: acf.why_hire_me_content }}
              className="text-gray-700 text-lg leading-relaxed max-w-2xl"
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/work"
                className="inline-block border border-black px-6 py-3 rounded-md text-black hover:bg-black hover:text-white transition"
              >
                View Work
              </Link>
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {acf.image ? (
              <img
                src={acf.image}
                alt="Why hire me"
                className="w-[50%] mx-auto
                md:w-[50%]
                h-auto
                rounded-lg
                object-cover"
              />
            ) : (
              <div className="w-full h-[300px] bg-gray-200 rounded-lg" />
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}