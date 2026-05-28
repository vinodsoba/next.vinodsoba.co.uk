// @ts-nocheck

import { getPortfolioBySlug } from "@/lib/getPortfolio";
import Image from "next/image";
import ContentRow from "@/components/casestudy/ContentRow";

export default async function PortfolioCaseStudy({ params }) {

  const { slug } = await params;

  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    return <div>Project not found</div>;
  }

  return (

    <main className="bg-[#050816] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-40 pb-24">

        {/* Glow */}
        <div className="absolute inset-0 bg-violet-500/5 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">

              {portfolio?.acf?.eyebrow}

            </p>

            <h1 className="mt-8 text-6xl font-semibold leading-tight md:text-7xl">

              {portfolio?.title?.rendered}

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-400">

              {portfolio?.acf?.project_focus}

            </p>         

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative overflow-hidden rounded-[32px]">

            {portfolio?.acf?.hero_image ? (

              <img
                src={portfolio?.acf?.hero_image}
                alt={portfolio?.title?.rendered}
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

          ) : (

            <div
              className="
                flex
                min-h-[500px]
                items-center
                justify-center
                bg-[#0d1224]
              "
            >

              <p className="text-slate-500">

                No image uploaded

              </p>

            </div>

          )}

          </div>

        </div>

      </section>

      <section>

          <ContentRow
          eyebrow={portfolio?.acf?.challenge_title}
          title={portfolio?.acf?.challenge_sub_title}
          content={portfolio?.acf?.challenge_content}
          image={portfolio?.acf?.photo_gallery}
        />

        <ContentRow
          reverse
          eyebrow={portfolio?.acf?.eyebrow_2}
          title="Improving frontend performance and UX"
          content={portfolio?.acf?.solution_content}
          image={portfolio?.acf?.photo_gallery_2}
        />

         <ContentRow
          eyebrow={portfolio?.acf?.eyebrow}
          title={portfolio?.acf?.results_title}
          content={portfolio?.acf?.results_content}
          image={portfolio?.acf?.photo_gallery_3}
        />

      </section>

      {/* PROJECT OVERVIEW */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-4">

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">

                Role

              </p>

              <h3 className="mt-4 text-2xl font-semibold">

                {portfolio?.acf?.project_role}

              </h3>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">

                Focus

              </p>

              <h3 className="mt-4 text-2xl font-semibold">

                {portfolio?.acf?.project_focus}

              </h3>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">

                Stack

              </p>

              <h3 className="mt-4 text-2xl font-semibold">

                {portfolio?.acf?.project_stack}

              </h3>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">

                Industry

              </p>

              <h3 className="mt-4 text-2xl font-semibold">

                {portfolio?.acf?.industry}

              </h3>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}