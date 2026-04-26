"use client";

import { useState } from "react";

export default function TabView({ tabs = [] }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabs.length) {
    return <div>No Tabs</div>;
  }

  return (
    <div className="w-full">

      {/* Tabs Row */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-4 md:px-0 w-max md:w-full">
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
              {tab.name}
              <p className="text-sm mt-2 text-black">{tab.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Image */}
        <div className="w-full">
          {tabs[activeTabIndex].image}
        </div>

        {/* Content */}
        <div className="text-gray-700 text-lg leading-relaxed">
          {tabs[activeTabIndex].content}
        </div>

      </div>

    </div>
  );
}