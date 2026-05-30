export default function ResultsDashboard({
eyebrow = "Project Outcome",
title = "Successful Migration",
status = "Live",
platformLabel = "Platform Status",
platformValue = "Magento 2",
description = "Successfully migrated from Magento 1.9 to a modern, scalable ecommerce platform.",
outcomes = [],
footerLabel = "Migration Completion",
footerValue = "100%",

}) {
  
  
  outcomes = [];

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
      <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
            {eyebrow}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {title}
          </h3>
        </div>

        <div
          className="
            flex items-center gap-2
            rounded-full
            border border-emerald-500/20
            bg-emerald-500/10
            px-3 py-1
          "
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-sm text-emerald-400">
            {status}
          </span>
        </div>
      </div>

      {/* Main Result */}
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
          {platformLabel}
        </p>

        <h2 className="mt-4 text-5xl font-semibold text-white">
          {platformValue}
        </h2>

        <p className="mt-3 text-slate-400">
          {description}
        </p>
      </div>

      {/* Outcome Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3">

        {outcomes.map((item) => (
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
                bg-emerald-500/10
              "
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400" />
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
          border border-emerald-500/20
          bg-emerald-500/5
          px-5 py-4
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            {footerLabel}
          </span>

          <span className="font-semibold text-emerald-400">
            {footerValue}
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
}