export default function ConversionFunnelPanel() {
  const steps = [
    "Website Visitor",
    "Event Landing Page",
    "Ticket Booking",
    "Event Attendance",
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
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
          Conversion Journey
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          User Experience Optimisation
        </h3>
      </div>

      <div className="mt-8 space-y-3">

        {steps.map((step, index) => (
          <div key={step}>
            <div
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-5 py-4
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-full
                    bg-violet-500/10
                    text-sm font-semibold text-violet-400
                  "
                >
                  {index + 1}
                </div>

                <span className="text-slate-200">
                  {step}
                </span>

              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="mx-auto h-5 w-px bg-white/10" />
            )}
          </div>
        ))}

      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">

        {[
          "Landing Pages",
          "Responsive Design",
          "UX Improvements",
          "Marketing Campaigns",
        ].map((item) => (
          <div
            key={item}
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
              {item}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}