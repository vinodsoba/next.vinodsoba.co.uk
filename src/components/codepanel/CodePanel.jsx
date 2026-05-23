"use client";

import { motion, AnimatePresence } from "framer-motion";


function highlightCode(code = "") {

  const keywords = [
    "const",
    "return",
    "export",
    "default",
    "function",
    "async",
    "await",
  ];

  return code.split("\n").map((line, index) => {

    const parts = line.split(/(\s+)/);

    return (
      <div key={index}>

        {parts.map((part, i) => {

          // Keywords
          if (keywords.includes(part)) {
            return (
              <span
                key={i}
                className="text-purple-400"
              >
                {part}
              </span>
            );
          }

          // JSX Tags
          if (
            part.includes("<") ||
            part.includes(">")
          ) {
            return (
              <span
                key={i}
                className="text-cyan-400"
              >
                {part}
              </span>
            );
          }

          // Strings
          if (
            part.startsWith('"') ||
            part.startsWith("'") ||
            part.startsWith("`")
          ) {
            return (
              <span
                key={i}
                className="text-green-400"
              >
                {part}
              </span>
            );
          }

          return (
            <span key={i}>
              {part}
            </span>
          );

        })}

      </div>
    );

  });

}

export default function CodePanel({ code }) {

  return (

    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-[40px]"></div>

      {/* Editor */}
      <div className="relative bg-[#07111f] rounded-[32px] overflow-hidden border border-slate-800 shadow-2xl">

        {/* Top Bar */}
        <div className="flex items-center px-5 py-3 border-b border-slate-800">

          {/* Mac Buttons */}
          <div className="flex gap-2">

            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>

          </div>

          {/* Tabs */}
          <div className="ml-auto flex gap-2">

            <div className="px-4 py-2 rounded-t-xl bg-slate-900 text-emerald-400 text-sm">
              globals.css
            </div>

            <div className="px-4 py-2 text-slate-500 text-sm">
              page.jsx
            </div>

            <div className="px-4 py-2 text-slate-500 text-sm">
              tailwind.config.js
            </div>

          </div>

        </div>

        {/* Code Area */}
        <div className="flex font-mono text-[13px] ">

          {/* Line Numbers */}
          <div className="p-7 text-slate-600 select-none leading-5">

            {code.split("\n").map((_, i) => (
              <div key={i}>
                {i + 1}
              </div>
            ))}

          </div>

          {/* Code Content */}
          <div className="flex-1 px-5 py-7 leading-5 text-slate-300 overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={code}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: [0, -8, 0]
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="relative"
            >

              <pre className="whitespace-pre-wrap text-slate-300">
                {highlightCode(code)}
              </pre>

              {/* Blinking Cursor */}
              <span className="inline-block w-[2px] h-5 bg-emerald-400 animate-blink ml-1 align-middle"></span>

            </motion.div>

          </AnimatePresence>

        </div>

        </div>

      </div>

    </div>

  );
}