// @ts-nocheck

import Link from "next/link";
import { getPortfolio } from "@/lib/getPortfolio";
import Image from "next/image";

export default async function WorkPage() {

  const portfolios = await getPortfolio();

  return (

    <main className="bg-[#050816] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-40 pb-20">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-violet-500/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">

          {/* EYEBROW */}
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">

            My Work

          </p>

          {/* TITLE */}
          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">

            Featured Projects

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">

            A selection of recent work that showcases my focus on
            performance, clean architecture, and exceptional user
            experiences.

          </p>

          {/* FILTERS */}
          <div className="mt-12 flex flex-wrap gap-4">

            {[
              "All Projects",
              "Web Development",
              "Ecommerce",
              "UX / UI",
              "Performance",
            ].map((item, index) => (

              <button
                key={index}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-5 py-3
                  text-sm font-medium
                  text-white
                  transition-all duration-300
                  hover:bg-violet-500
                "
              >

                {item}

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-6 pb-24">

        <div className="mx-auto grid max-w-7xl gap-10">

          {portfolios.map((portfolio: Portfolio) => (

            <section
              key={portfolio.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-white/5
              "
            >

              <div className="grid lg:grid-cols-2">

                {/* LEFT COLUMN */}
                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    p-10
                    lg:p-14
                  "
                >

                  {/* EYEBROW */}
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">

                    {portfolio?.acf?.eyebrow}

                  </p>

                  {/* TITLE */}
                  <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">

                    {portfolio?.title?.rendered}

                  </h2>

                  {/* DESCRIPTION */}
                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">

                    {portfolio?.acf?.project_focus}

                  </p>

                  

                  {/* BUTTONS */}
                  <div className="mt-10 flex flex-wrap gap-4">

                    {/* CASE STUDY */}
                    <Link
                      href={`/work/${portfolio.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        bg-violet-500
                        px-6 py-4
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-violet-400
                      "
                    >

                      View Case Study →

                    </Link>

                    {/* WEBSITE */}
                    <Link
                      href={portfolio?.acf?.website_url || "#"}
                      target="_blank"
                      className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        px-6 py-4
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white/10
                      "
                    >

                      Visit Website

                    </Link>

                  </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="relative overflow-hidden flex align-center flex-col my-[50px]">

                    {portfolio?.acf?.hero_image ? (

                    <Image
                      unoptimized
                      src={portfolio?.acf?.hero_image}
                      alt={portfolio?.title?.rendered}
                      width={1400}
                      height={900}
                      className="
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        group-hover:scale-105
                        pr-[20px]
                      "
                    />

                  ) : (

                    <div className="flex h-full min-h-[500px] items-center justify-center bg-[#0d1224]">

                      <p className="text-slate-500">

                        No image uploaded

                      </p>

                    </div>

                  )}
                 

                </div>

              </div>

            </section>

          ))}

        </div>

      </section>

    </main>

  );

}