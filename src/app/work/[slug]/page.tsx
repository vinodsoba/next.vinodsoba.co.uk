// @ts-nocheck

import { getPortfolioBySlug } from "@/lib/getPortfolio";
import Image from "next/image";
import ContentRow from "@/components/casestudy/ContentRow";
import MigrationJourneyPanel from "@/components/casestudy/MigrationJourneyPanel";
import FrontendDevelopmentPanel from "@/components/casestudy/FrontendDevelopmentPanel";
import ResultsDashboard from "@/components/casestudy/ResultsDashboard";
import EventEcosystemPanel from "@/components/casestudy/EventEcoSystemPanel";
import ConversionFunnelPanel from "@/components/casestudy/ConversionFunnelPanel";
import CampaignResultsPanel from "@/components/casestudy/CampaignResultsPanel";
import DigitalCampaignPanel from "@/components/casestudy/DigitalCampaignPanel";
import FrontendCampaignPanel from "@/components/casestudy/FrontendCampaignPanel";
import ResultsPanel from "@/components/casestudy/ResultsPanel";

export const revalidate = 60;

export default async function PortfolioCaseStudy({ 
  params 
} : {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  if (!slug) {
    return <div className="p-10">Invalid portfolio slug</div>;
  }


  const portfolio = await getPortfolioBySlug(slug);

    if (!portfolio) {
    return <div className="p-10">Project not found</div>;
  }

  const isAddisonLee= slug === "addison-lee";

  const isWorkStJohnsLab = slug === "stjohns-labs";

  const isWorkOceanMedia = slug === "ocean-media-group";

  const isWorkNationalWedding = slug === "national-wedding-show";

  const isWorkNteractive = slug === "nteractive";
  const image =
    portfolio?.acf?.post_images ||
    (portfolio as any)?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null;

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
      {/* Hero Ends here */}

      <section>   
  
        {isAddisonLee ? (
          <>
           <ContentRow
            eyebrow={portfolio?.acf?.challenge_title}
            title={portfolio?.acf?.challenge_sub_title}
            content={portfolio?.acf?.challenge_content}
            image={portfolio?.acf?.photo_gallery}
          />

          <ContentRow
            reverse
            eyebrow={portfolio?.acf?.eyebrow_2}
            title={portfolio?.acf?.solution_title}
            content={portfolio?.acf?.solution_content}
            image={portfolio?.acf?.photo_gallery_2}
          />

          <ContentRow
            eyebrow={portfolio?.acf?.eyebrow}
            title={portfolio?.acf?.results_title}
            content={portfolio?.acf?.results_content}
            image={portfolio?.acf?.photo_gallery_3}
          />
          
          </>
          

        ) : null}
       

          {isWorkStJohnsLab ? (
            <>

               <ContentRow
    
                eyebrow="The Challenge"
                title={portfolio?.acf?.challenge_sub_title}
                content={portfolio?.acf?.challenge_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                <MigrationJourneyPanel />
              </ContentRow>


              <ContentRow
                reverse
                eyebrow="The Solution"
                title={portfolio?.acf?.solution_title}
                content={portfolio?.acf?.solution_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                  <FrontendDevelopmentPanel />
                
              </ContentRow>

             
             <ContentRow
                eyebrow="Project Outcome"
                title={portfolio?.acf?.results_title}
                content={portfolio?.acf?.results_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                 <ResultsDashboard 
                 
                 />
                
              </ContentRow>



            </>
            ) : null }

          {isWorkOceanMedia ? (
            <>
            <ContentRow
    
                eyebrow="The Challenge"
                title={portfolio?.acf?.challenge_sub_title}
                content={portfolio?.acf?.challenge_content}
                image={portfolio?.acf?.photo_gallery}
              >
              </ContentRow>

              <ContentRow
                reverse
                eyebrow="The Solution"
                title={portfolio?.acf?.solution_title}
                content={portfolio?.acf?.solution_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                  
                
              </ContentRow>

              <ContentRow
                eyebrow="Project Outcome"
                title={portfolio?.acf?.results_title}
                content={portfolio?.acf?.results_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                 <ResultsDashboard 
                 title="Digital Delivery Success"
                 status="Active"
                 platformLabel="Delivery Focus"
                 platformValue="Multi-Site"
                 description="Supporting multiple brands through campaign delivery, website enhancements and ongoing frontend development."
                footerLabel="Delivery Performance"
                footerValue="Excellent"
                outcomes={[
                  "Campaign Launches",
                  "Landing Pages",
                  "Responsive Design",
                  "UX Improvements",
                  "Marketing Support",
                  "Website Enhancements",
                  ]}
                 />
                
              </ContentRow>

              
            
            </>
              
            


          ) : null}

          
           {isWorkNationalWedding ? (
              <>
                <ContentRow
                eyebrow="The Challenge"
                title={portfolio?.acf?.challenge_sub_title}
                content={portfolio?.acf?.challenge_content}
                image={portfolio?.acf?.photo_gallery}
                >
                  <EventEcosystemPanel />
                </ContentRow>

                <ContentRow
                reverse
                eyebrow="The Solution"
                title={portfolio?.acf?.solution_title}
                content={portfolio?.acf?.solution_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                  <ConversionFunnelPanel />
                
              </ContentRow>

              <ContentRow
                eyebrow="Project Outcome"
                title={portfolio?.acf?.results_title}
                content={portfolio?.acf?.results_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                 <CampaignResultsPanel />
                
              </ContentRow>
              </>

            ) : null }

            {isWorkNteractive ? (
              <>
               <ContentRow
                eyebrow="The Challenge"
                title={portfolio?.acf?.challenge_title}
                content={portfolio?.acf?.challenge_content}
                image={portfolio?.acf?.photo_gallery}
                >
                  <DigitalCampaignPanel />
                </ContentRow>

                <ContentRow
                reverse
                eyebrow="The Solution"
                title={portfolio?.acf?.solution_title}
                content={portfolio?.acf?.solution_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                  <FrontendCampaignPanel />
                
              </ContentRow>

              <ContentRow
                eyebrow="Project Outcome"
                title={portfolio?.acf?.results_title}
                content={portfolio?.acf?.results_content}
                image={portfolio?.acf?.photo_gallery_2}
              >
                 <ResultsPanel />
                
              </ContentRow>
              </>

            ): null }


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