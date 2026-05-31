"use client";

export default function FrontendCampaignPanel() {
  const features = [
    "Responsive Development",
    "CMS Management",
    "Landing Pages",
    "Campaign Delivery",
    "Cross-Browser Testing",
    "UX Optimisation",
  ];

  return (
    <div
      className="
        relative
        h-[450px]
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-[#0B1220]
        p-6
      "
    >
      {/* Glow */}
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Solution
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Frontend Delivery
          </h3>
        </div>

        <div
          className="
            rounded-full
            border border-cyan-500/20
            bg-cyan-500/10
            px-3 py-1
            text-sm
            text-cyan-400
          "
        >
          Active Projects
        </div>
      </div>

      {/* Main Card */}
      <div
        className="
          mt-8
          rounded-3xl
          border border-white/10
          bg-white/[0.03]
          p-6
        "
      >
        <p className="text-sm uppercase tracking-[0.15em] text-slate-500">
          Core Focus
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white">
          Build & Optimise
        </h2>

        <p className="mt-3 text-slate-400">
          Developing responsive digital experiences while
          supporting campaign launches, content publishing
          and ongoing website enhancements.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {features.map((item) => (
          <div
            key={item}
            className="
              flex items-center gap-3
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-4 py-3
            "
          >
            <div
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full
                bg-cyan-500/10
              "
            >
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>

            <span className="text-sm text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
          mt-6
          rounded-2xl
          border border-cyan-500/20
          bg-cyan-500/5
          px-5 py-4
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Delivery Status
          </span>

          <span className="font-semibold text-cyan-400">
            Optimised
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-cyan-400" />
        </div>
      </div>
    </div>
  );
}