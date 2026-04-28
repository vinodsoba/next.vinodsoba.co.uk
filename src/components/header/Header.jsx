"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import { usePathname } from "next/navigation";

export default function Header({ menuItems = [], variant = "light"  }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

   const isLightPage = pathname === "/contact";

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed w-full z-50 px-6 py-5 transition-all duration-300
          ${
          isLightPage
            ? "bg-black/90 backdrop-blur-md shadow text-slate-900"
            : scrolled
            ? "bg-black shadow-md text-white"
            : "bg-transparent text-white"
        }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LEFT: Burger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1 cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

          {/* CENTER: Logo */}
          <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2
    ml-auto md:ml-0">
            <Logo />
          </Link>

          {/* RIGHT: CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-white/30 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SLIDE MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[85%] md:w-[400px]
          bg-black text-white z-50
          transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button onClick={() => setMenuOpen(false)} className="p-6 text-2xl cursor-pointer">
          ✕
        </button>

        <div className="px-6 space-y-6 text-lg">
          <Navigation menuItems={menuItems} mobile />
        </div>

        <div className="md:hidden px-6 mt-10 space-y-4 text-center">
          <Link href="/login" className="block text-lg text-gray-400 hover:text-white">
            Login
          </Link>
          <Link
            href="/signup"
            className="block text-lg border border-white/20 rounded-full py-3 max-w-[280px] mx-auto hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}