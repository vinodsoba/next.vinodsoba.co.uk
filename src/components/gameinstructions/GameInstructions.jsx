"use client";

import { motion } from "framer-motion";

export default function GameInstructions({ 
  hasDropped, 
  playerX
}) {


  const messages = [
    {
      id: "skills",
      x: 3500,
      y: 120,
      content: (
        <>
          <p className="text-sm font-semibold">
            Use ← → arrows to move <br />
            hold for turbo boost
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Press Space to jump
          </p>
        </>
      ),
    },

    {
      id: "projects",
      visible: playerX > 3300,
      x: 5200,
      y: 180,
      content: "Explore Featured Projects",
    },
  ];

  

  return (
    <>
    {messages.map((message) => {

      if (message.visible === false) {
        return null;
      }
      
    return (
    <motion.div
      key={message.id}
      style={{
        left: "10%",
        top: "120px",
      }}
      initial={{ opacity: 0, y: 200, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={`absolute left-1/2 -translate-x-1/2" z-30 rounded-3xl border px-6 py-4 text-center shadow-2xl backdrop-blur-md transition-all duration-700
         ${
          hasDropped
            ? "border-black/20 bg-black/70 text-white"
            : "border-white/20 bg-white/10 text-white"
        }
      `}
    >
        {message.content}
      </motion.div>
    )  

    })};
    
    </>
  );
}