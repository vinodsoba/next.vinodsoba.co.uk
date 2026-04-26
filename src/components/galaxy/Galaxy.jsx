"use client";

import { useContext } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
//import { ThemeContext } from "@/Theme";

export default function Galaxy() {
  //const { theme } = useContext(ThemeContext);
  //const isDark = theme === "dark-theme";

  const { scrollY } = useScroll();

  const rocketY = useTransform(scrollY, [0, 500], [0, 30]); 
  
  // spaceman (faster)
  const manY = useTransform(scrollY, [0, 500], [0, 180]);
  

  return (
    <div className="relative w-full h-full">

      {/* Spaceman */}
      <div className="absolute top-[60px] right-[400px] z-[11] xl:right-[100px]">
        <motion.div
          animate={{ x: [1, 8, 10, 8, 1], y: [1, 2, 3, 2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{manY}}
        >
          <Image
            src="/images/spaceman.svg"
            alt="space-man"
            width={80}
            height={80}
          />
        </motion.div>
      </div>

      {/* Stars / Planets */}
      <div
        className={`
          absolute right-0 bottom-0 flex justify-end items-center
          w-[807px] h-[499px]
          max-[767px]:z-[-11]
        `}
      >
        <motion.div className="absolute right-0 w-[429px] h-[340px]" />
      </div>

      {/* Rocket */}
      <div className="absolute bottom-[20px] right-[255px] flex flex-col items-center w-[55%] opacity-50">
        <motion.div
        initial={{ opacity: 0, scale: 0, y: -200 }}
        animate={{ opacity: 1, scale: 1, y: -240, x: 0 }}
        transition={{ duration: 3 }}
        style={{rocketY}}
        >
            <Image
                src="/images/rocket.svg"
                alt="rocket"
                width={100}
                height={100}
            />
        </motion.div>
        </div>
        
    </div>

  );
}