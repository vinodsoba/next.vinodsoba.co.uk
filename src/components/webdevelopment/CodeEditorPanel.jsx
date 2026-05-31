"use client";

export default function CodeEditorPanel() {
  return (
    <div
      className="
        relative
        flex
        h-[400px]
        flex-col
        overflow-hidden
        rounded-[32px]
        border border-white/10
        bg-[#0b1120]
        shadow-2xl
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl"></div>

      {/* Top Bar */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>

        <div className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white">
          app/page.tsx
        </div>

      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col justify-between p-6">

        {/* Code */}
        <div className="font-mono text-sm leading-7">

          <div className="space-y-2 text-slate-300">

            <div>
              <span className="text-purple-400">
                export default function
              </span>{" "}
              <span className="text-blue-400">
                HomePage
              </span>() {"{"}
            </div>

            <div className="pl-6">
              <span className="text-purple-400">
                return
              </span> (
            </div>

            <div className="pl-12 text-cyan-400">
              &lt;HeroSection /&gt;
            </div>

            <div className="pl-12 text-cyan-400">
              &lt;ContentRow /&gt;
            </div>

            <div className="pl-12 text-cyan-400">
              &lt;PerformancePanel /&gt;
            </div>

            <div className="pl-6">)</div>

            <div>{"}"}</div>

          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 gap-4">

          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-4
            "
          >
            <p className="text-sm text-slate-400">
              Deployment
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              Live
            </p>

            <p className="mt-1 text-xs text-emerald-400">
              Production Ready
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-4
            "
          >
            <div className="flex items-center justify-between">

              <span className="text-sm text-slate-400">
                Performance
              </span>

              <span className="text-sm font-medium text-emerald-400">
                98/100
              </span>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-[98%] rounded-full bg-emerald-400"></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}