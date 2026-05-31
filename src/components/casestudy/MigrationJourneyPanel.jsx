export default function MigrationJourneyPanel() {
  const steps = [
    "Magento 1.9",
    "Data Migration",
    "Magento 2 Setup",
    "Frontend Build",
    "Testing",
    "Go Live",
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
        p-8
      "
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
          Migration Journey
        </p>

        <h3 className="mt-3 text-3xl font-semibold text-white">
          Magento 1.9 → Magento 2
        </h3>

        <p className="mt-3 max-w-md text-slate-400">
          Modernising an established ecommerce platform while
          preserving data, functionality and customer experience.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Line */}
        <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />

        <div className="grid grid-cols-6 gap-3">
          {steps.map((step, index) => (
            <div key={step} className="text-center">
              <div
                className="
                  mx-auto
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  border border-violet-500/30
                  bg-violet-500/10
                  text-sm font-semibold text-violet-400
                "
              >
                {index + 1}
              </div>

              <p className="mt-4 text-xs text-slate-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-4 gap-4">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-2xl font-semibold text-white">
            0
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Data Loss
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-2xl font-semibold text-white">
            99%
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Accuracy
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-2xl font-semibold text-white">
            M2
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Platform
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-2xl font-semibold text-white">
            ✓
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Go Live
          </p>
        </div>

      </div>
    </div>
  );
}