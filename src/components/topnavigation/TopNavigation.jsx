"use client";

import { useState } from "react";
import Link from "next/link";

export default function TopNavigation({
  menuItems = [],
  setMenuOpen,
  mobile = false,
}) {
  const [servicesOpen, setServicesOpen] = useState(false);

  if (!menuItems.length) return null;

  const serviceLinks = [
    {
      title: "Web Design",
      href: "/services/web-design",
    },
    {
      title: "Web Development",
      href: "/services/web-development",
    },
    {
      title: "WordPress",
      href: "/services/wordpress",
    },
    {
      title: "Website Maintenance & Support",
      href: "/services/website-maintenance-support",
    },
    {
      title: "Search Engine Optimisation",
      href: "/services/seo",
    },
    {
      title: "Hosting",
      href: "/services/hosting",
    },
  ];

  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-6 w-[90%]"
          : "flex flex-row items-center gap-8 whitespace-nowrap"
      }
    >
      {menuItems.map((item) => {
        const isServices =
          item.title.toLowerCase() === "services";

        return (
          <li
            key={item.id || item.url}
            className={
              isServices && !mobile
                ? "relative"
                : "whitespace-nowrap"
            }
            onMouseEnter={() => {
              if (isServices && !mobile) {
                setServicesOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (isServices && !mobile) {
                setServicesOpen(false);
              }
            }}
          >
            {isServices && !mobile ? (
              <>
                <Link
                href="/services"
                className="
                  flex items-center gap-1
                  text-base text-gray-300
                  hover:text-white
                  transition
                "
              >
                Services

                <svg
                  className={`
                    w-4 h-4
                    transition-transform duration-300
                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

                {servicesOpen && (
                  <div
                  className={`
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    pt-4
                    z-50

                    transition-all
                    duration-300
                    ease-out

                    ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 visible pointer-events-auto"
                        : "opacity-0 -translate-y-3 invisible pointer-events-none"
                    }
                  `}
                >
                    <div
                      className="
                        w-[560px]
                        grid grid-cols-2
                        gap-2
                        p-4
                        rounded-xl
                        bg-white
                        shadow-2xl
                        border border-gray-200
                      "
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="
                            block
                            p-4
                            rounded-lg
                            text-gray-900
                            hover:bg-gray-100
                            transition
                          "
                        >
                          <span className="block font-semibold">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link
                onClick={() => setMenuOpen?.(false)}
                href={item.url}
                className={
                  mobile
                    ? `
                        text-2xl
                        text-gray-400
                        hover:text-white
                        transition
                      `
                    : `
                        text-base
                        text-gray-300
                        hover:text-white
                        transition
                      `
                }
              >
                {item.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}