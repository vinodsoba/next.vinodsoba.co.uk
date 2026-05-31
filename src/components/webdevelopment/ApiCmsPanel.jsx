"use client";

export default function ApiCmsPanel() {
  return (
    <div
      className="
        relative
        flex
        min-h-[400px]
        min-w-0
        flex-col
        justify-between
        overflow-hidden
        rounded-[32px]
        border border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-cyan-500/5 blur-3xl" />

      {/* Header */}
      <div className="relative flex items-center justify-between gap-3">

        <div>

          <h3 className="text-xl font-semibold text-black">
            API & CMS Architecture
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Headless CMS powering dynamic experiences
          </p>

        </div>

        <div
          className="
            shrink-0
            rounded-full
            bg-cyan-50
            px-3
            py-1
            text-sm
            font-medium
            text-cyan-600
          "
        >
          Live Sync
        </div>

      </div>

      {/* Architecture Flow */}
      <div className="relative flex items-center justify-center">

        <div
          className="
            flex
            flex-col
            items-center
            gap-4
            md:flex-row
            md:gap-6
          "
        >

          {/* WordPress */}
          <div
            className="
              w-full
              max-w-[140px]
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-4
              text-center
            "
          >

            <p className="text-xs uppercase tracking-wide text-slate-500">
              CMS
            </p>

            <h4 className="mt-2 text-lg font-semibold text-black">
              WordPress
            </h4>

          </div>

          {/* Connector */}
          <div
            className="
              flex
              flex-col
              items-center
              md:flex-row
            "
          >

            <div
              className="
                h-10
                w-[2px]
                bg-gradient-to-b
                from-cyan-400
                to-emerald-400

                md:h-[2px]
                md:w-16
                md:bg-gradient-to-r
              "
            />

            <div
              className="
                mx-0
                my-2
                h-3
                w-3
                rounded-full
                bg-emerald-400
                animate-pulse

                md:mx-2
                md:my-0
              "
            />

            <div
              className="
                h-10
                w-[2px]
                bg-gradient-to-b
                from-emerald-400
                to-cyan-400

                md:h-[2px]
                md:w-16
                md:bg-gradient-to-r
              "
            />

          </div>

          {/* Next.js */}
          <div
            className="
              w-full
              max-w-[140px]
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-4
              text-center
            "
          >

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Frontend
            </p>

            <h4 className="mt-2 text-lg font-semibold text-black">
              Next.js
            </h4>

          </div>

        </div>

      </div>

      {/* Health Card */}
      <div
        className="
          rounded-2xl
          border
          border-cyan-200
          bg-cyan-50
          p-4
        "
      >

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-600">
            Architecture Health
          </span>

          <span className="font-semibold text-cyan-600">
            Connected
          </span>

        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">

          <div>

            <p className="text-xs text-slate-500">
              API
            </p>

            <p className="font-semibold text-black">
              Active
            </p>

          </div>

          <div>

            <p className="text-xs text-slate-500">
              Sync
            </p>

            <p className="font-semibold text-black">
              Live
            </p>

          </div>

          <div>

            <p className="text-xs text-slate-500">
              Response
            </p>

            <p className="font-semibold text-black">
              120ms
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}