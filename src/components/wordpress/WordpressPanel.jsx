export default function AcfContentBuilderPanel() {
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
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
            Advanced Custom Fields
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Flexible Content Builder
          </h3>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <span className="text-xs text-emerald-400">
            Live Preview
          </span>
        </div>
      </div>

      {/* Builder Layout */}
      <div className="mt-6 grid h-[320px] grid-cols-2 gap-4">

        {/* Left Side */}
        <div className="space-y-3">

          {[
            "Hero Banner",
            "Services Section",
            "Portfolio Projects",
            "Testimonials",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-4
              "
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">
                  {item}
                </span>

                <span className="text-violet-400">
                  →
                </span>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Editable content block
              </p>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div
          className="
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-4
          "
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Live Website Preview
          </p>

          <div
            className="
              mt-4
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-[#101828]
            "
          >
            {/* Website Header */}
            <div className="border-b border-white/10 p-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-400" />
                <div className="h-2 w-2 rounded-full bg-yellow-400" />
                <div className="h-2 w-2 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Hero */}
            <div className="p-5">
              <div className="h-3 w-24 rounded bg-violet-400/40" />

              <div className="mt-4 h-6 w-40 rounded bg-white/70" />

              <div className="mt-2 h-3 w-full rounded bg-white/10" />
              <div className="mt-2 h-3 w-4/5 rounded bg-white/10" />

              <div className="mt-5 h-8 w-24 rounded-xl bg-violet-500" />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">

            <div className="rounded-xl bg-white/[0.03] p-3 text-center">
              <p className="text-lg font-semibold text-white">
                ACF
              </p>
              <p className="text-xs text-slate-500">
                Powered
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-3 text-center">
              <p className="text-lg font-semibold text-white">
                CMS
              </p>
              <p className="text-xs text-slate-500">
                Editable
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.03] p-3 text-center">
              <p className="text-lg font-semibold text-white">
                UX
              </p>
              <p className="text-xs text-slate-500">
                Friendly
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}