"use client";

export default function PerformanceDashboard() {

  return (

    <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

      {/* Glow */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl"></div>

      <div className="relative p-6 md:p-8">

        {/* TOP */}
        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xl font-semibold text-black">

              Performance Overview

            </h3>

            <p className="mt-1 text-sm text-slate-500">

              Core Web Vitals & optimisation metrics

            </p>

          </div>

          <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">

            Optimised

          </div>

        </div>

        {/* SCORES */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

          {[
            ["98", "Performance"],
            ["100", "SEO"],
            ["100", "Accessibility"],
            ["96", "Best Practices"],
          ].map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">

                  {item[1]}

                </span>

                <span className="text-xs font-medium text-emerald-500">

                  +12%

                </span>

              </div>

              <h4 className="mt-4 text-3xl font-semibold text-black">

                {item[0]}

              </h4>

            </div>

          ))}

        </div>

        {/* GRAPH */}
        <div className="mt-8 rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <h4 className="text-lg font-semibold text-black">

                Load Time Optimisation

              </h4>

              <p className="mt-1 text-sm text-slate-500">

                Performance improvements across devices

              </p>

            </div>

            <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">

              0.8s Faster

            </div>

          </div>

          {/* GRAPH */}
          <div className="relative mt-8 h-56 overflow-hidden rounded-2xl bg-slate-50">

            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

            {/* LINE */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 220"
              fill="none"
            >

              <path
                d="M0 170 C60 150, 120 130, 180 110 C260 90, 320 70, 380 50 C430 35, 470 25, 500 20"
                stroke="#10b981"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

            </svg>

            {/* Glow */}
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-emerald-100/50 to-transparent"></div>

          </div>

        </div>

        {/* METRICS */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {[
            ["Largest Contentful Paint", "1.2s"],
            ["First Input Delay", "12ms"],
            ["Cumulative Layout Shift", "0.01"],
          ].map((metric, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 p-4"
            >

              <p className="text-sm text-slate-500">

                {metric[0]}

              </p>

              <h4 className="mt-3 text-2xl font-semibold text-black">

                {metric[1]}

              </h4>

            </div>

          ))}

        </div>

        {/* TAGS */}
        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "Core Web Vitals",
            "Fast Loading",
            "Optimised Assets",
            "Responsive Performance",
          ].map((tag, index) => (

            <div
              key={index}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600"
            >

              {tag}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}