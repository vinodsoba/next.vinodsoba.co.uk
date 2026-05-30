 export default function EventEcosystemPanel() {
  const audiences = [
    "Brides & Grooms",
    "Exhibitors",
    "Ticket Sales",
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
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.2em] text-pink-400">
          Event Platform
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          Digital Ecosystem
        </h3>
      </div>

      {/* Main Flow */}
      <div className="mt-8 flex flex-col items-center">

        {/* Main Website */}
        <div
          className="
            w-full
            rounded-3xl
            border border-white/10
            bg-white/[0.03]
            p-5
            text-center
          "
        >
          <p className="text-sm uppercase tracking-[0.15em] text-slate-500">
            Platform
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            National Wedding Show
          </h3>
        </div>

        {/* Connector */}
        <div className="h-8 w-px bg-white/10" />

        {/* Audience Cards */}
        <div className="grid w-full grid-cols-3 gap-3">

          {audiences.map((item) => (
            <div
              key={item}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-4
                text-center
              "
            >
              <span className="text-sm text-slate-300">
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* Connector */}
        <div className="h-8 w-px bg-white/10" />

        {/* Outcomes */}
        <div
          className="
            w-full
            rounded-3xl
            border border-pink-500/20
            bg-pink-500/5
            p-5
          "
        >
          <div className="grid grid-cols-2 gap-3">

            {[
              "Event Registrations",
              "Lead Generation",
              "Marketing Campaigns",
              "Customer Engagement",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-2
                  rounded-xl
                  bg-white/[0.03]
                  px-3 py-2
                "
              >
                <div className="h-2 w-2 rounded-full bg-pink-400" />

                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}