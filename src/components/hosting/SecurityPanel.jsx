export default function SecurityPanel() {
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
      <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
            Security
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            Protection & Monitoring
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-sm text-emerald-400">
            Protected
          </span>
        </div>
      </div>

      {/* Security Checks */}
      <div className="space-y-3">

        {[
          {
            name: "SSL Certificate",
            status: "Active",
          },
          {
            name: "Firewall Protection",
            status: "Enabled",
          },
          {
            name: "24/7 Monitoring",
            status: "Running",
          },
        ].map((item) => (
          <div
            key={item.name}
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
              {item.name}
            </span>

            <span className="text-sm font-medium text-emerald-400">
              {item.status}
            </span>
          </div>
        ))}

      </div>

      {/* Security Health */}
      <div
        className="
          rounded-2xl
          border border-emerald-500/20
          bg-emerald-500/5
          p-5
        "
      >
        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Security Health
          </span>

          <span className="font-semibold text-emerald-400">
            98 / 100
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[98%] rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );
}