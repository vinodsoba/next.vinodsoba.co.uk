"use client";

export default function CodeEditorPanel() {

  return (

    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1120] shadow-2xl">

      {/* Glow */}
      <div className="absolute inset-0 bg-emerald-500/5 blur-3xl"></div>

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        {/* Traffic Lights */}
        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>

        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">

          <div className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white">

            app/page.tsx

          </div>

          <div className="rounded-lg px-3 py-1 text-xs text-slate-500">

            components

          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-[1fr_220px]">

        {/* CODE */}
        <div className="p-6 font-mono text-sm leading-7">

          <div className="space-y-2 text-slate-300">

            <div>
              <span className="text-purple-400">export default function</span>{" "}
              <span className="text-blue-400">HomePage</span>() {"{"}
            </div>

            <div className="pl-6">
              <span className="text-purple-400">return</span> (
            </div>

            <div className="pl-12 text-cyan-400">
              &lt;section className="hero"&gt;
            </div>

            <div className="pl-16 text-cyan-400">
              &lt;PerformancePanel /&gt;
            </div>

            <div className="pl-16 text-cyan-400">
              &lt;SeoDashboard /&gt;
            </div>

            <div className="pl-16 text-cyan-400">
              &lt;CodeEditorPanel /&gt;
            </div>

            <div className="pl-12 text-cyan-400">
              &lt;/section&gt;
            </div>

            <div className="pl-6">)</div>

            <div>{"}"}</div>

          </div>

          {/* Terminal */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-4">

            <div className="flex items-center gap-2 text-xs text-slate-500">

              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

              Development Server Running

            </div>

            <div className="mt-4 space-y-2 font-mono text-sm">

              <div className="text-emerald-400">
                ✓ Compiled successfully
              </div>

              <div className="text-slate-400">
                Ready in 1.8s
              </div>

              <div className="text-slate-400">
                Lighthouse Score: 98
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="border-l border-white/10 bg-white/[0.02] p-6">

          {/* Deployment */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">

                Deployment

              </p>

              <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">

                Live

              </div>

            </div>

            <div className="mt-4">

              <h3 className="text-2xl font-semibold text-white">

                Successful

              </h3>

              <p className="mt-1 text-sm text-slate-500">

                Production build deployed

              </p>

            </div>

          </div>

          {/* Stack */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <p className="text-sm text-slate-400">

              Stack

            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              {[
                "Next.js",
                "React",
                "Tailwind",
                "WordPress API",
              ].map((item, index) => (

                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* Performance */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

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