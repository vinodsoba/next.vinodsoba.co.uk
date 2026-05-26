"use client";

export default function SeoDashboard() {

  return (

    <div className="bg-white p-6 md:p-8">

      {/* TOP STATS */}
      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-slate-200 p-4">

          <p className="text-sm text-slate-500">
            Organic Traffic
          </p>

          <h3 className="mt-2 text-3xl font-semibold text-black">
            +215%
          </h3>

          <p className="mt-1 text-sm text-emerald-500">
            Last 6 months
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 p-4">

          <p className="text-sm text-slate-500">
            Keywords Ranked
          </p>

          <h3 className="mt-2 text-3xl font-semibold text-black">
            82
          </h3>

          <p className="mt-1 text-sm text-emerald-500">
            Top 10 positions
          </p>

        </div>

      </div>

        {/* BOTTOM GRID */}
        <div className="mt-6 grid gap-1 md:grid-cols-2">

        {/* KEYWORDS */}
        <div className="rounded-3xl border border-slate-200 p-6">

            <div className="flex items-center justify-between">

            <h4 className="text-lg font-semibold text-black">

                Top Performing Keywords

            </h4>

            <span className="text-sm text-slate-500">

                Rankings

            </span>

            </div>

            <div className="mt-6 space-y-4">

            {[
                ["seo optimisation", "#3"],
                ["website maintenance", "#5"],
                ["web design london", "#7"],
                ["ecommerce seo", "#4"],
            ].map((keyword, index) => (

                <div
                key={index}
                className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                >

                <p className="font-medium text-black">

                    {keyword[0]}

                </p>

                <span className="text-sm font-semibold text-emerald-500">

                    {keyword[1]}

                </span>

                </div>

            ))}

            </div>

        </div>

        {/* MINI DASHBOARD */}
        <div className="rounded-3xl border border-slate-200 p-6">

            <h4 className="text-lg font-semibold text-black">

            Keyword Rankings

            </h4>

            <div className="mt-8 flex items-center justify-center">

            {/* Circle */}
            <div className="relative h-40 w-40 rounded-full bg-[conic-gradient(#10b981_0deg,#10b981_220deg,#dbeafe_220deg,#dbeafe_360deg)]">

                <div className="absolute inset-5 rounded-full bg-white"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center">

                <span className="text-3xl font-semibold text-black">

                    42%

                </span>

                <span className="mt-1 text-sm text-slate-500">

                    Top 3

                </span>

                </div>

            </div>

            </div>

            {/* Stats */}
            <div className="mt-8 space-y-3">

            <div className="flex items-center justify-between text-sm">

                <span className="text-slate-500">

                Top 3 Rankings

                </span>

                <span className="font-medium text-black">

                42%

                </span>

            </div>

            <div className="flex items-center justify-between text-sm">

                <span className="text-slate-500">

                Page 1 Keywords

                </span>

                <span className="font-medium text-black">

                68%

                </span>

            </div>

            <div className="flex items-center justify-between text-sm">

                <span className="text-slate-500">

                Organic CTR

                </span>

                <span className="font-medium text-black">

                +18%

                </span>

            </div>

            </div>

        </div>

        </div>
      

    </div>

  );

}