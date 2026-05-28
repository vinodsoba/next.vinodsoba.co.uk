"use client";

import Link from "next/link";

export default function CTA() {

  return (

    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-[#07111f] px-8 py-16 md:px-16 md:py-24">

          {/* Glow */}
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">

            {/* Eyebrow */}
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">

              Website Maintenance & Support

            </p>

            {/* Heading */}
            <h2 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">

              Let’s keep your website secure, fast, and performing at its best.

            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-slate-300">

              Ongoing maintenance, performance optimisation, security updates,
              and reliable support for modern websites and ecommerce businesses.

            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              {/* Primary */}
              <Link
                href="/contact"
                className="flex h-14 items-center justify-center rounded-2xl bg-emerald-500 px-8 font-medium text-white transition hover:bg-emerald-600"
              >

                Book a Free Call

              </Link>

              {/* Secondary */}
              <Link
                href="/services"
                className="flex h-14 items-center justify-center rounded-2xl border border-slate-700 bg-transparent px-8 font-medium text-white transition hover:border-emerald-500"
              >

                View All Services

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}