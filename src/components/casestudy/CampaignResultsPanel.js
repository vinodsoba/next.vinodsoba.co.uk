export default function CampaignResultsPanel() {
  const outcomes = [
    "Ticket Sales Support",
    "Lead Generation",
    "Landing Pages",
    "Marketing Campaigns",
    "Responsive UX",
    "Event Promotion",
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
      <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
            Project Outcome
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Successful Campaign Delivery
          </h3>
        </div>

        <div
          className="
            rounded-full
            border border-emerald-500/20
            bg-emerald-500/10
            px-3 py-1
            text-sm text-emerald-400
          "
        >
          Live
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
          Platform Focus
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white">
          Event Marketing
        </h2>

        <p className="mt-3 text-slate-400">
          Supporting ticket sales, exhibitor promotion and
          customer engagement through ongoing website development.
        </p>
      </div>

      {/* Outcomes */}
      <div className="mt-6 grid grid-cols-2 gap-3">

        {outcomes.map((item) => (
          <div
            key={item}
            className="
              flex items-center gap-3
              rounded-xl
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

      {/* Score */}
      <div
        className="
          mt-6
          rounded-2xl
          border border-emerald-500/20
          bg-emerald-500/5
          p-4
        "
      >
        <div className="flex items-center justify-between">

          <span className="text-slate-300">
            Campaign Support
          </span>

          <span className="font-semibold text-emerald-400">
            Ongoing
          </span>

        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-full rounded-full bg-emerald-400" />

        </div>

      </div>
    </div>
  );
}