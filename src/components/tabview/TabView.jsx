"use client";

import { useState } from "react";
import CodePanel from "../codepanel/CodePanel";
import { motion } from "framer-motion";

export default function TabView({ tabs = [] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabs.length) {
    return <div>No Tabs</div>;
  }

  return (
    <div className="w-full">

      {/* Tabs Row */}
      <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      >

        <div className="flex gap-6 px-4 md:px-0 w-max md:w-full justify-end">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTabIndex(index)}
              onTouchStart={() => setActiveTabIndex(index)}
              className={`
                snap-start flex-shrink-0 cursor-pointer text-center transition-all duration-300 touch-manipulation w-[100px] sm:w-[110px] md:w-[120px]
                ${index === activeTabIndex
                  ? "opacity-100 border-b-2 border-black pb-2"
                  : "opacity-50 hover:opacity-80"}
              `}
              
            >
              <div className="flex flex-col items-center">
                {tab.name}

                <p className="text-sm mt-2 text-black">
                  {tab.title}
                </p>

              </div>
              
            </div>
          ))}
        
      </div>
      </motion.div>
     
      {/* Content Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Code Panel */}
        <div className="w-[80%] lg:w-full md:w-[50%]">
          <CodePanel
            code={tabs[activeTabIndex].code}
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg  w-[80%] lg:w-full text-slate-600 leading-8">
          {tabs[activeTabIndex].content}
        </div>        

      </div>

    </div>
  );
}