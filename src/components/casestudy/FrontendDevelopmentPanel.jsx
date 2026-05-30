export default function FrontendDevelopmentPanel() {
  const features = [
    "Responsive Design",
    "Magento 2 Templates",
    "Product Discovery",
    "Category Navigation",
    "UX Improvements",
    "Performance",
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
      <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
          Frontend Development
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          Magento 2 Experience
        </h3>
      </div>

      {/* Device Mockups */}
      <div className="relative mt-8 h-[220px]">

        {/* Desktop */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[140px]
            w-[280px]
            -translate-x-1/2
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-[#111827]
            shadow-xl
          "
        >
          {/* Browser Top */}
          <div className="flex h-8 items-center gap-2 border-b border-white/10 px-3">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <div className="h-2 w-2 rounded-full bg-green-400" />
          </div>

          <div className="p-4">
            <div className="h-6 w-3/4 rounded bg-violet-500/20" />
            <div className="mt-3 h-16 rounded bg-white/5" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-white/5" />
              <div className="h-10 rounded bg-white/5" />
              <div className="h-10 rounded bg-white/5" />
            </div>
          </div>
        </div>

        {/* Tablet */}
        <div
          className="
            absolute
            left-12
            top-24
            h-[120px]
            w-[90px]
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-[#111827]
            shadow-xl
          "
        >
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-white/20" />

          <div className="p-3">
            <div className="h-4 rounded bg-violet-500/20" />
            <div className="mt-2 h-10 rounded bg-white/5" />
            <div className="mt-2 h-4 rounded bg-white/5" />
          </div>
        </div>

        {/* Mobile */}
        <div
          className="
            absolute
            right-12
            top-24
            h-[120px]
            w-[60px]
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-[#111827]
            shadow-xl
          "
        >
          <div className="mx-auto mt-2 h-1 w-6 rounded-full bg-white/20" />

          <div className="p-2">
            <div className="h-3 rounded bg-violet-500/20" />
            <div className="mt-2 h-6 rounded bg-white/5" />
            <div className="mt-2 h-3 rounded bg-white/5" />
          </div>
        </div>

      </div>

      {/* Features */}
      <div className="mt-6 grid grid-cols-2 gap-3">

        {features.map((feature) => (
          <div
            key={feature}
            className="
              flex items-center gap-2
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              px-3 py-2
            "
          >
            <div className="h-2 w-2 rounded-full bg-violet-400" />

            <span className="text-sm text-slate-300">
              {feature}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}