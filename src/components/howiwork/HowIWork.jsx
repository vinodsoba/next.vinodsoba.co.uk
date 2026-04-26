"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HowIWork({
  subTitle = "How I Work",
  content = "",
  ctaText = "View Services",
  ctaUrl = "/services",
}) {
  return (
    <section className="relative z-20 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-semibold text-black mb-6"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />

        {/* Content from WP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-gray-600 mb-10 py-5 font-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* CTA */}
        <Link
          href={ctaUrl}
          className="inline-flex items-center gap-2 text-black hover:opacity-70"
        >
          {ctaText} →
        </Link>

      </div>
    </section>
  );
}