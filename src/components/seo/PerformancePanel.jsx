"use client";

export default function PerformancePanel() {

  return (

    <div className="bg-white p-6 md:p-8">

        {/* TOP STATS */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {[
          ["18.2K", "Visitors"],
          ["256K", "Impressions"],
          ["7.1%", "CTR"],
          ["12.4", "Avg Position"],
        ].map((stat, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-200 p-4"
          >

            <h3 className="text-2xl font-semibold text-black">

              {stat[0]}

            </h3>

            <p className="mt-1 text-sm text-slate-500">

              {stat[1]}

            </p>

          </div>

        ))}

        </div>

      {/* PERFORMANCE GRAPH */}
      <div className="mt-6 rounded-3xl border border-slate-200 p-6">

        <div className="flex items-center justify-between">

          <div>

            <h4 className="text-lg font-semibold text-black">

              Search Performance Overview

            </h4>

            <p className="mt-1 text-sm text-slate-500">

              Organic traffic and visibility trends

            </p>

          </div>

          <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">

            Live Data

          </div>

        </div>

        {/* GRAPH */}
        <div className="relative mt-8 h-56 overflow-hidden rounded-2xl bg-slate-50">

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

          {/* BLUE LINE */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 220"
            fill="none"
          >

            <path
              d="M0 170 C60 150, 100 130, 160 135 C230 140, 260 90, 320 100 C390 110, 430 70, 500 50"
              stroke="#3b82f6"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

          </svg>

          {/* GREEN LINE */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 220"
            fill="none"
          >

            <path
              d="M0 190 C60 180, 100 170, 160 140 C220 110, 280 90, 340 80 C410 70, 450 40, 500 20"
              stroke="#10b981"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

          </svg>

          {/* GLOW */}
          <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-emerald-100/40 to-transparent"></div>

        </div>

      </div>

      {/* TAGS */}
      <div className="mt-6 flex flex-wrap gap-3">

        {[
          "GA4 Connected",
          "Search Console",
          "Live Tracking",
          "Weekly Reports",
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

  );

}