"use client";

export default function PerformanceDashboard() {
  return (
    <div
      className="
        relative
        flex
        h-[490px]
        flex-col
        justify-between
        overflow-hidden
        rounded-[32px]
        border border-slate-200
        bg-white
        shadow-sm
        p-6
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl"></div>

      {/* Header */}
      <div className="relative flex items-center justify-between">

        <div>
          <h3 className="text-xl font-semibold text-black">
            Performance Overview
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Core Web Vitals & optimisation
          </p>
        </div>

        <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          Optimised
        </div>

      </div>

      {/* Scores */}
      <div className="grid grid-cols-2 gap-3">

        {[
          ["98", "Performance"],
          ["100", "SEO"],
          ["100", "Accessibility"],
          ["96", "Best Practices"],
        ].map((item, index) => (

          <div
            key={index}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-3
            "
          >

            <p className="text-xs text-slate-500">
              {item[1]}
            </p>

            <h4 className="mt-2 text-2xl font-semibold text-black">
              {item[0]}
            </h4>

          </div>

        ))}

      </div>

      {/* Mini Graph */}
      <div
        className="
          relative
          h-24
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
        "
      >

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 500 120"
          fill="none"
        >

          <path
            d="M0 90 C60 80,120 70,180 60 C260 50,320 40,380 25 C430 15,470 10,500 8"
            stroke="#10b981"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

        </svg>

      </div>

      {/* Summary */}
      <div
        className="
          rounded-2xl
          border
          border-emerald-200
          bg-emerald-50
          p-4
        "
      >

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-600">
            Performance Health
          </span>

          <span className="font-semibold text-emerald-600">
            98 / 100
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">

          <div className="h-full w-[98%] rounded-full bg-emerald-500"></div>

        </div>

      </div>

    </div>
  );
}