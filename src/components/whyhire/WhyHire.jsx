"use client";

import { Caveat } from "next/font/google";
import { motion } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  Users,
  Rocket,
} from "lucide-react";
import { Download } from "lucide-react";
import {
  SiNextdotjs,
  SiWordpress,
  SiReact,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";



import {
  FiSearch,
  FiBarChart2,
  FiShoppingBag
} from "react-icons/fi";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WhyHire({ data }) {

  if (!data) return null;

  const skills = data?.skill_list
    ? data.skill_list.split(/\r?\n/)
    : [];
  
  const stats = data?.stats_list
  ? data.stats_list.split(/\r?\n/)
  : [];

  const statIcons = [
    Briefcase,
    BarChart3,
    Users,
    Rocket,
  ];

  const skillIcons = {
    "Next.js": SiNextdotjs,
    Magento: FiShoppingBag,
    WordPress: SiWordpress,
    React: SiReact,
    "Tailwind CSS": SiTailwindcss,
    JavaScript: SiJavascript,
    GA4: FiBarChart2,
    SEO: FiSearch,
  };


  

  return (
    <section className="max-w-6xl mx-auto py-24 px-6 sm">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

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

          <h2 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <div dangerouslySetInnerHTML={{__html: data.title}} />
          </h2>

          <p className="text-xl text-black font-bold mb-6">
            {data.subheading}
          </p>

          <div className="text-slate-800 leading-6 text-md mb-8">
            <p>{data.why_hire_me_content}</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 mb-12 max-w-2xl">

          {skills.map((skill, index) => {

            const cleanSkill = skill.trim();

            const Icon = skillIcons[cleanSkill];

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >

                {Icon && (
                  <Icon
                    size={18}
                    className="text-black shrink-0"
                  />
                )}

                <span className="text-lg text-slate-700">
                  {cleanSkill}
                </span>

              </motion.div>

            );
          })}

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
              download
              className="group flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition"
            >
              <span className="relative">

                {data.secondary_button_text}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>

              </span>

                <Download
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-[2px]"
                />

            </a>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 md:w-full">

          

          {stats.map((item, index) => {

            const Icon = statIcons[index];

            const [number, label] = item.split("|");

           

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition md:text-sm md:p-3"
              >
              
              <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl">

                <Icon
                  size={28}
                  className="black"
                />

              </div>

              {/* Text */}
              <div>

                <h3 className="text-3xl font-bold text-emerald-600 leading-none mb-1">
                  {number}
                </h3>

                <p className="text-xs text-black">
                  {label}
                </p>

              </div>

            </div>

            </motion.div>

            );
          })}

        </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <img
            src={data.image}
            alt="Why Hire"
            className="w-full max-w-[500px]"
          />

          {/* Floating Note */}
          <div className="absolute md:-right-10 -right-16 top-20 hidden md:block xl:block z-10">

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