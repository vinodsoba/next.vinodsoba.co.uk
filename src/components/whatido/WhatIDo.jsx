"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhatIDo({ acf }) {
  if (!acf) return null;

  return (
    <section className="bg-white py-20 md:py-32 md:overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: acf.about_me_title }}
              className="text-sm uppercase text-gray-500"
            />

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: acf.about_me_heading_title }}
              className="text-3xl md:text-5xl font-bold mt-6 mb-6 text-black"
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: acf.what_i_do_content }}
              className="text-gray-600 leading-relaxed mb-8"
            />

            <Link
              href="/about"
              className="bg-black text-white px-6 py-3 rounded-full"
            >
              {acf.what_i_do_cta_text}
            </Link>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={acf.about_me_background_image}
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}