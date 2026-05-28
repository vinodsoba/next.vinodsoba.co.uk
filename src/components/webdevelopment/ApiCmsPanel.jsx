"use client";

export default function ApiCmsPanel() {

  return (

    <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

      {/* Glow */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>

      <div className="relative p-6 md:p-8">

        {/* TOP */}
        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-xl font-semibold text-black">

              API & CMS Architecture

            </h3>

            <p className="mt-1 text-sm text-slate-500">

              Connected systems powering dynamic frontend experiences

            </p>

          </div>

          <div className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-600">

            Live Sync

          </div>

        </div>

        {/* MAIN FLOW */}
        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_120px_1fr]">

          {/* CMS */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">

                  CMS

                </p>

                <h4 className="mt-2 text-2xl font-semibold text-black">

                  WordPress

                </h4>

              </div>

              <div className="rounded-2xl bg-white p-3 shadow-sm">

                <div className="h-8 w-8 rounded-xl bg-cyan-500"></div>

              </div>

            </div>

            <div className="mt-6 space-y-3">

              {[
                "Dynamic Content",
                "ACF Flexible Fields",
                "REST API",
                "SEO Management",
              ].map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* CONNECTION */}
          <div className="relative hidden lg:flex items-center justify-center">

            {/* Line */}
            <div className="absolute h-1 w-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></div>

            {/* Pulse */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">

              <div className="h-5 w-5 rounded-full bg-emerald-400 animate-pulse"></div>

            </div>

          </div>

          {/* FRONTEND */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">

                  Frontend

                </p>

                <h4 className="mt-2 text-2xl font-semibold text-black">

                  Next.js

                </h4>

              </div>

              <div className="rounded-2xl bg-white p-3 shadow-sm">

                <div className="h-8 w-8 rounded-xl bg-emerald-500"></div>

              </div>

            </div>

            <div className="mt-6 space-y-3">

              {[
                "React Components",
                "Dynamic Routing",
                "Performance Optimised",
                "Responsive UI",
              ].map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* API STATUS */}
        <div className="mt-10 grid gap-4 md:grid-cols-4">

          {[
            ["REST API", "Connected"],
            ["Content Sync", "Active"],
            ["Deployment", "Live"],
            ["Response Time", "120ms"],
          ].map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 p-4"
            >

              <p className="text-sm text-slate-500">

                {item[0]}

              </p>

              <div className="mt-3 flex items-center justify-between">

                <h4 className="text-lg font-semibold text-black">

                  {item[1]}

                </h4>

                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>

              </div>

            </div>

          ))}

        </div>

        {/* TECH TAGS */}
        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "Headless CMS",
            "REST API",
            "Dynamic Content",
            "Scalable Architecture",
          ].map((tag, index) => (

            <div
              key={index}
              className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-600"
            >

              {tag}

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}