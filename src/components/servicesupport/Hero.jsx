"use client";

import Link from "next/link";

export default function Hero({
  eyebrow,
  hero_heading_title,
  hero_heading_subtitle,
  ctaText,
  ctaUrl,
  badges=[],
  isDark = false,
  //image,
}) {

  return (

    <section 
    className={`relative overflow-hidden ${
      isDark 
      ? "bg-black text-white" 
      : "bg-whitectext-black"}
      `}
      >

      <div className="max-w-7xl mx-auto px-6 py-29 md:py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Eyebrow */}
            <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">

              {/*Website Maintenance & Support*/}
              {eyebrow}
            </div>

            {/* Heading */}
           <h1
            className={`mt-6 text-3xl md:text-7xl font-semibold leading-tight tracking-tight ${
              isDark 
              ? "text-white"
              : "text-black"            
            }`}
            dangerouslySetInnerHTML={{
              __html: hero_heading_title || "",
            }}
          />

            {/* Description */}
            <p 
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600" />

              {/*I take care of the technical stuff so you can focus
              on growing your business with confidence.*/}
              {hero_heading_subtitle}

            {/* Buttons */}
            {/*<div className="mt-10 flex flex-col sm:flex-row gap-4">*/}

              {/* Primary */}
              {/*<Link 
              href={`${ctaUrl}`}
              className="flex items-center justify-center h-14 rounded-2xl bg-emerald-500 px-8 font-medium text-white transition hover:bg-emerald-600">
                {ctaText}
              </Link>*/}

              {/* Secondary */}
              {/*<Link 
              href="/services"
              className="flex items-center justify-center h-14 rounded-2xl border border-slate-200 bg-white px-8 font-medium text-black transition hover:border-emerald-500">
                View All Services
              </Link>

            </div>
            {/* TECH STACK BADGES */}
            {badges.length > 0 && (

              <div className="mt-8 flex flex-wrap gap-3">

                {badges.map((badge, index) => (

                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      px-4 py-2
                      text-sm font-medium
                      text-white
                      backdrop-blur-md
                    "
                  >

                    {badge}

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:block">

            <div className="absolute inset-0 rounded-full bg-emerald-100 blur-3xl opacity-40"></div>

            <div className="relative flex items-center justify-center">

              {/* Circle */}
              <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full bg-emerald-50">

                {/* Shield */}
                <div className="flex h-40 w-40 items-center justify-center rounded-[40px] border border-emerald-200 bg-white shadow-xl">

                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}