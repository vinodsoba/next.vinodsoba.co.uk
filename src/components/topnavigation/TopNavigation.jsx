"use client";

import Link from "next/link";

export default function TopNavigation({ menuItems = [] }) {
  if (!menuItems.length) return null;

  return (
    <ul className="space-y-6 w-[90%]">
      {menuItems.map((item) => (
        <li key={item.id || item.url}>
          <Link
            href={item.url}
            className="
              group flex items-center justify-between
              text-2xl md:text-xl
              text-gray-400 hover:text-white
              transition
            "
          >
            <span>{item.title}</span>

            {/* Arrow */}
            <span
              className="
                transform transition-transform duration-300
                group-hover:translate-x-1
                opacity-60 group-hover:opacity-100
              "
            >
              <svg
              className="
                w-5 h-5
                opacity-60
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}