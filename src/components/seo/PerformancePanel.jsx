"use client";

export default function PerformancePanel() {
  return (
    <div
      className="
        flex
        h-[400px]
        flex-col
        justify-between
        rounded-[32px]
        border border-slate-200
        bg-white
        p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-semibold text-black">
            Search Performance
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Traffic & visibility insights
          </p>

        </div>

        <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          Live Data
        </div>

      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3">

        {[
          ["18.2K", "Visitors"],
          ["256K", "Impressions"],
          ["7.1%", "CTR"],
          ["12.4", "Position"],
        ].map((stat, index) => (

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
              {stat[1]}
            </p>

            <h4 className="mt-2 text-2xl font-semibold text-black">
              {stat[0]}
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
            d="M0 90 C60 80,100 70,160 75 C230 80,260 45,320 50 C390 55,430 35,500 20"
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
          border border-emerald-200
          bg-emerald-50
          p-4
        "
      >

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-600">
            Visibility Score
          </span>

          <span className="font-semibold text-emerald-600">
            +68%
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">

          <div className="h-full w-[68%] rounded-full bg-emerald-500"></div>

        </div>

      </div>

    </div>
  );
}