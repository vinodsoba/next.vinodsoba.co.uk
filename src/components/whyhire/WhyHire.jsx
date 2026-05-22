
"use client";


import { Caveat } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WhyHire({ data }) {

  if (!data) return null;

  const skills = data?.skill_list
    ? data.skill_list.split(/\r?\n/)
    : [];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

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
            {data.eyebrow_text}
          </p>

        </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            <div dangerouslySetInnerHTML={{__html: data.title}} />
          </h2>

          <p className="text-xl text-black font-bold mb-6">
            {data.subheading}
          </p>

          <div className="text-slate-800 leading-6 text-md mb-8">
            <p>{data.why_hire_me_content}</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                {skill}
              </div>
            ))}

          </div>

          {/* buttons */}
          <div className="flex gap-4 mt-10">

            <a
              href={data.primary_button_url}
              className="px-6 py-4 rounded-xl bg-emerald-600 text-white font-medium hover:opacity-90 transition"
            >
              {data.primary_button_text}
            </a>

            <a
              href={data.secondary_button_url}
              className="px-6 py-4 rounded-xl border border-slate-300 font-medium"
            >
              {data.secondary_button_text}
            </a>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <img
            src={data.image}
            alt="Why Hire"
            className="max-w-sm w-full"
          />

          {/* Floating Note */}
          <div className="absolute md:right-1 -right-16 top-20 hidden md:block xl:block z-10">

            <p className={`${caveat.className} text-emerald-600 text-2xl rotate-[-6deg] handwritten`}>
              Real projects.
              <br />
              Real impact.
            </p>

            <svg
              width="120"
              height="90"
              viewBox="0 0 120 90"
              fill="none"
              className="mt-2 ml-4"
            >
              <path
                d="M100 10
                  C100 40, 70 60, 30 70"
                stroke="#111"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="transparent"
              />

              <path
                d="M38 62 L30 70 L40 74"
                stroke="#111"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

          </div>

        </div>

      </div>

    </section>
  );
}