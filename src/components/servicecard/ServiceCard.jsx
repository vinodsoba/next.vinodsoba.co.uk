"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({ title, excerpt, slug, image, index = 0 }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition"
    >
      <Link href={`/services/${slug}`} className="block">
        {image && (
          <div className="relative h-56 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="p-6">
          <span className="text-sm font-semibold text-pink-500">
            Service
          </span>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </h3>

          {excerpt && (
            <p
              className="mt-3 text-slate-600 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          )}

          <div className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-2 text-sm font-semibold text-white transition group-hover:bg-pink-500">
            View Service →
          </div>
        </div>
      </Link>
    </motion.article>
  );
}