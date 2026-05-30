"use client";

export default function SeoDashboard() {
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
            SEO Performance
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Organic growth & keyword visibility
          </p>

        </div>

        <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
          Growing
        </div>

      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3">

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

          <p className="text-sm text-slate-500">
            Organic Traffic
          </p>

          <h4 className="mt-2 text-2xl font-semibold text-black">
            +215%
          </h4>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">

          <p className="text-sm text-slate-500">
            Top 10 Rankings
          </p>

          <h4 className="mt-2 text-2xl font-semibold text-black">
            82
          </h4>

        </div>

      </div>

      {/* Top Keywords */}
      <div className="space-y-3">

        {[
          ["website maintenance", "#5"],
          ["seo optimisation", "#3"],
          ["ecommerce seo", "#4"],
        ].map((keyword, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
            "
          >

            <span className="font-medium text-black">
              {keyword[0]}
            </span>

            <span className="font-semibold text-emerald-500">
              {keyword[1]}
            </span>

          </div>

        ))}

      </div>

      {/* Ranking Summary */}
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
            Page 1 Visibility
          </span>

          <span className="font-semibold text-emerald-600">
            68%
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">

          <div className="h-full w-[68%] rounded-full bg-emerald-500"></div>

        </div>

      </div>

    </div>
  );
}