"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioGrid({ data }) {

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
    >
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          variants={itemAnim}
          className={index === 0 ? "md:col-span-2" : ""}
        >
          <Link href={`/work/${item.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl">

              <img
                src={item.acf?.card_image}
                alt={item.title.rendered}
                className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition">
                <h3
                  className="text-2xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                />
              </div>

            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}