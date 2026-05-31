"use client";

export default function DigitalCampaignPanel() {
  const challenges = [
    "Multiple Campaign Launches",
    "Responsive Experiences",
    "Fast Turnaround Times",
    "CMS Driven Content",
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
      <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
            Project Challenge
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Campaign Delivery
          </h3>
        </div>

        <div
          className="
            rounded-full
            border border-violet-500/20
            bg-violet-500/10
            px-3 py-1
            text-sm
            text-violet-400
          "
        >
          Agency Environment
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
          Primary Objective
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-white">
          Deliver Digital Campaigns
        </h2>

        <p className="mt-3 text-slate-400">
          Supporting multiple campaign launches while
          maintaining performance, consistency and user
          experience across devices.
        </p>
      </div>

      {/* Challenge Cards */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {challenges.map((item) => (
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
                bg-violet-500/10
              "
            >
              <div className="h-2 w-2 rounded-full bg-violet-400" />
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
          border border-violet-500/20
          bg-violet-500/5
          px-5 py-4
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Project Focus
          </span>

          <span className="font-semibold text-violet-400">
            UX & Performance
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[85%] rounded-full bg-violet-400" />
        </div>
      </div>
    </div>
  );
}