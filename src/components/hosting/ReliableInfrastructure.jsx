export default function InfrastructurePanel() {
  return (
    <div
      className="
        relative
        flex
        h-[400px]
        flex-col
        justify-between
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-[#0B1220]
        p-8
      "
    >
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
            Infrastructure
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Hosting Environment
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-sm text-emerald-400">
            Online
          </span>
        </div>
      </div>

      {/* Services */}
      <div className="space-y-3">

        {[
          {
            name: "Nginx",
            status: "Running",
          },
          {
            name: "Apache",
            status: "Running",
          },
          {
            name: "MySQL",
            status: "Optimised",
          },
        ].map((service) => (
          <div
            key={service.name}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-3
            "
          >
            <span className="text-slate-300">
              {service.name}
            </span>

            <span className="text-sm font-medium text-emerald-400">
              {service.status}
            </span>
          </div>
        ))}

      </div>

      {/* Infrastructure Health */}
      <div
        className="
          rounded-2xl
          border border-violet-500/20
          bg-violet-500/5
          p-5
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Infrastructure Health
          </span>

          <span className="font-semibold text-violet-400">
            99.9%
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[99%] rounded-full bg-violet-400" />
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Uptime</span>
          <span>Daily Backups Enabled</span>
        </div>
      </div>
    </div>
  );
}