"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-black text-white
        py-20
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              I'm a freelance web designer/developer working remotely with clients in London & across the country.
              If you're looking for a quote, or even just some advice then please don't hesitate to get in touch.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

            <a
              href="mailto:hello@vinodsoba.co.uk"
              className="block text-[#62FAED] hover:underline mb-4"
            >
              hello@vinodsoba.co.uk
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Pages</h2>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          © 2026 Vinod Soba Design – Freelance Web Designer London UK. <br />
          All rights reserved. Trademarks and brands are the property of their respective owners.
        </div>

      </div>
    </footer>
  );
}