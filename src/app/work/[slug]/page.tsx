// @ts-nocheck

import { getPortfolioBySlug } from "@/lib/getPortfolio";


export const revalidate = 60;

export default async function CaseStudyPage({
  params,
} : {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

   if (!slug) {
    return <div className="p-10">Invalid portfolio slug</div>;
  }

  const portfolio = await getPortfolioBySlug(slug);

   if (!portfolio) {
    return <div className="p-10">Portfolio not found</div>;
  }

  const isAddisonLee = slug === "addison-lee"

  return (

    <main className="min-h-screen bg-[#050816] text-white">

      <section className="px-6 pt-40 pb-24">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">

            Featured Case Study

          </p>

          <h1 className="mt-6 text-6xl font-semibold">

            Addison Lee

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-400">

            Frontend development, performance optimisation,
            and scalable web platform improvements across
            Addison Lee’s customer-facing digital ecosystem.

          </p>

        </div>

      </section>

    </main>

  );

}