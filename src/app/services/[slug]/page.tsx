// @ts-nocheck

import { getServiceBySlug } from "@/lib/getServices";
import Section from "@/components/Section/Section";
import WireframeToUI from "@/components/wireframe/WireframeToUI";
import DesignSystem from "@/components/designsystem/DesignSystem";
import UserJourney from "@/components/userjourney/UserJourney";
import CodeToUI from "@/components/codetoui/CodeToUI";
import ResponsivePreview from "@/components/responsivepreview/ResponsivePreview";
import ConversionFlow from "@/components/conversionflow/ConversionFlow";
import LetsTalk from "@/components/letstalk/LetsTalk";
import Hero from "@/components/servicesupport/Hero";
import Features from "@/components/servicesupport/Features";
import Process from "@/components/servicesupport/Process";
import Cta from "@/components/servicesupport/CTA";
import ContentRow from "@/components/seo/ContentRow";
import SeoDashboard from "@/components/seo/SeoDashboard";
import PerformancePanel from "@/components/seo/PerformancePanel";
import CodeEditorPanel from "@/components/webdevelopment/CodeEditorPanel";
import PerformanceDashboard from "@/components/webdevelopment/PerformanceDashboard";
import ApiCmsPanel from "@/components/webdevelopment/ApiCmsPanel";
import ReliableStructure from "@/components/hosting/ReliableInfrastructure";
import SecurityPanel from "@/components/hosting/SecurityPanel";
import WordPressPanel from "@/components/wordpress/WordpressPanel";
import PricingSection from "@/components/servicesupport/PricingSection";

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const metadataMap = {
    "web-development": {
      title: "Web Development Services | Vinod Soba",
      description:
        "Custom web development using React, Next.js, WordPress and Magento.",
      robots: {
        index: true,
        follow: true,
      },
    },

    "web-design": {
      title: "Web Design Services | Vinod Soba",
      description:
        "Professional web design services for businesses.",
      robots: {
        index: true,
        follow: true,
      },
    },

    "website-maintenance-support": {
      title: "Website Maintenance & Support | Vinod Soba",
      description:
        "Website maintenance, security updates and ongoing support.",
      robots: {
        index: true,
        follow: true,
      },
    },

    seo: {
      title: "SEO Services | Vinod Soba",
      description:
        "Technical SEO, optimisation and website audits.",

        robots: {
        index: true,
        follow: true,
      },
    },

    
  };

  return metadataMap[slug] || {
    title: "Freelance Web Designer - London",
    description: "Freelance Web Developer",

    robots: {
    index: true,
    follow: true,
  },
  };
}


export const revalidate = 60;


export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // unwrap params
  const { slug } = await params;


  if (!slug) {
    return <div className="p-10">Invalid service slug</div>;
  }

  const service = await getServiceBySlug(slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  const isWebDesignPage = slug === "web-design";

  const isWebSupportPage = slug === "website-maintenance-support";

  const isWebSeoPage = slug === "seo";

  const isWebDevelopmentPage = slug === "web-development";

  const isWebHostingPage = slug === "hosting";

  const isWebWordPress = slug === "wordpress";

  const image =
    service?.acf?.post_images ||
    (service as any)?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null;

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      {isWebDesignPage || 
      isWebSeoPage || 
      isWebSupportPage ||
      isWebDevelopmentPage ||
      isWebWordPress ||
      isWebHostingPage ? (
        <Hero 
        eyebrow={service.acf?.hero_eyebrow}
        hero_heading_title={service.acf?.hero_heading_title}
        hero_heading_subtitle={service.acf?.hero_heading_subtitle}
        ctaText={service.acf?.hero_cta_text}
        ctaUrl={service.acf?.hero_cta_url}
        isDark={isWebDevelopmentPage}
        badges={
        isWebDevelopmentPage
          ? [
              "Next.js",
              "React",
              "Tailwind CSS",
              "Headless CMS",
              "Performance Optimised",
            ]
          : []
      }
      />
      ) : 
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center"></div>
          <h1
            className="text-5xl md:text-5xl font-semibold text-black leading-tight tracking-tight"
          />
          <p 
          className="mt-6 max-w-2xl text-lg text-[#bfc3c9] leading-relaxed"
          />
        </div>
      </section>
     }

    {isWebSupportPage ?
        (
          <>
          <Features />
          <Process />
          <PricingSection />
          <Cta />
          </>
        )
        
      : null 
    }

    {isWebDevelopmentPage ? (
      <>
      <ContentRow
        number="01"
        title="Frontend Development"
        description="Modern responsive interfaces built using React, Next.js, Tailwind CSS, and scalable component-driven architecture focused on performance and user experience."
        bullets={[
          "Reusable Component Systems",
          "Responsive Frontend Architecture",
          "Modern UI / UX Development",
          "Performance Focused Builds",
        ]}
      >
        <CodeEditorPanel />

      </ContentRow>

      <ContentRow
        reverse
        number="02"
        title="Performance Optimisation"
        description="Performance-focused development designed to improve loading speeds, Core Web Vitals, SEO scores, and overall user experience across modern websites and web applications."
        bullets={[
          "Core Web Vitals Optimisation",
          "Lighthouse Performance Improvements",
          "Fast Loading Frontend Architecture",
          "SEO & Accessibility Best Practices",
        ]}
      >
      
          <PerformanceDashboard />

      </ContentRow>


      <ContentRow
        number="03"
        title="CMS & API Integrations"
        description="Headless CMS integrations and API-driven architectures designed to deliver scalable, flexible, and high-performance digital experiences across modern websites and applications."
        bullets={[
          "Headless WordPress Architecture",
          "REST API Integrations",
          "Dynamic Content Rendering",
          "Scalable CMS Driven Systems",
        ]}
      >
      
          <ApiCmsPanel />

      </ContentRow>

      </>
      
    ) : null}

    {isWebHostingPage ? (
      <>

      <ContentRow
          number="01"
          title={service?.acf?.row_1_title}
          description={service?.acf?.row_1_sub_title}
          bullets={[
            "99.9% Uptime Monitoring",
            "Daily Backups",
            "SSL Certificates",
            "Server Monitoring",
          ]}
          
        >
          <ReliableStructure />

        </ContentRow>
        
        <ContentRow
          reverse
          number="02"
          title={service?.acf?.row_2_title}
          description={service?.acf?.row_2_sub_title}
          bullets={[
            "SSL Certificate Management",
            "Security Monitoring",
            "Backup & Recovery",
            "Software Updates",
          ]}
          
        >
          <SecurityPanel />

        </ContentRow>
      </>

    ) : null }
      
    {isWebSeoPage ? (
      <>

        <ContentRow
          number="01"
          title="Technical SEO"
          description="I help to improve your website’s technical foundation to help search engines crawl and index your content more effectively."
          bullets={[
            "Crawlability & Indexing",
            "Core Web Vitals",
            "Structured Data",
            "Technical Audits",
          ]}
          image="/images/seo-technical.jpg"
        />

        <ContentRow
          reverse
          number="02"
          title="Keyword Strategy"
          description="I can help identify high-intent keywords and optimise your content to improve rankings and attract qualified traffic."
          bullets={[
            "Keyword Research",
            "Search Intent Mapping",
            "Content Optimisation",
            "Competitor Analysis",
          ]}
        >

        <SeoDashboard />

        </ContentRow>

        <ContentRow
          
          number="03"
          title="Performance & Tracking"
          description="Track rankings, traffic, and SEO performance using advanced analytics, reporting, and ongoing monitoring."
          bullets={[
            "GA4 & Search Console",
            "Custom Dashboards",
            "Rank Tracking",
            "Ongoing Monitoring",
          ]}
        >

        <PerformancePanel />

        </ContentRow>

        </>
      ) : null}

      {isWebWordPress ? (
        <>
          <ContentRow
          number="01"
          title={service?.acf?.row_1_eyebrow}
          description={service?.acf?.row_1_title}
          subTitle={service?.acf?.row_1_sub_title}
          bullets={[
            "Custom Theme Development",
            "Responsive Design",
            "Landing Pages",
            "Lead Generation Websites",
            "Business Websites",
            "Conversion Focused UX"
          ]}
          imageClassName="
          w-full
          max-w-[850px]
          mx-auto
          translate-y-8
          scale-110
        "
          image="/images/desktop-image-wordpress.png"
        >
      

        </ContentRow>

         <ContentRow
          reverse
          number="02"
          title={service?.acf?.row_2_eyebrow}
          description={service?.acf?.row_2_title}
          bullets={[
            "Advanced Custom Fields",
            "Flexible Content Layouts",
            "Reusable Components",
            "Page Builders",
            "Custom Post Types",
            "Content Management"
          ]}
          imageClassName="
          w-full
          max-w-[850px]
          mx-auto
          translate-y-8
          scale-110
        "
          
        >
       <WordPressPanel />

        </ContentRow>

        <LetsTalk />
        </>

      ) : null} 

      {/* IMAGE */}

      {!isWebDesignPage && 
      !isWebSupportPage &&
      !isWebSeoPage &&
      !isWebDevelopmentPage &&
      !isWebHostingPage &&
      !isWebWordPress &&
      image && (
        <div className="relative w-full h-[400px] md:h-[500px]">
          <img
            src={image}
            alt={service?.title?.rendered || ""}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      {slug === "web-design" && (
        <>
          <Section
            step="01"
            title="Understanding the user journey"
            description="I start by identifying the purpose of the page, the user’s intent, and the key action they need to take."
            gradient="from-blue-500 via-cyan-400 to-emerald-400"
          >
            <UserJourney />
          </Section>

          <Section
            step="02"
            title="Creating structured page layouts"
            description="I design layouts with clear visual hierarchy, logical content flow, and responsive grid systems."
            gradient="from-purple-500 via-fuchsia-500 to-pink-500"
          >
            <WireframeToUI />
          </Section>

          <Section
            step="03"
            title="Designing consistent UI components"
            description="I use reusable design patterns, spacing, typography, buttons, and cards to create a consistent look and feel."
            gradient="from-orange-400 via-pink-500 to-red-500"
          >
            <DesignSystem />
          </Section>

          <Section
            step="04"
            title="Building with React, Next.js and Tailwind CSS"
            description="I turn designs into clean, maintainable front-end components using modern development tools."
            gradient="from-indigo-500 via-blue-500 to-sky-400"
          >
            <CodeToUI />
          </Section>

          <Section
            step="05"
            title="Optimising for every device"
            description="Every layout is built mobile-first to ensure a smooth experience across desktop, tablet, and mobile."
            gradient="from-emerald-400 via-teal-400 to-cyan-500"
          >
            <ResponsivePreview />
          </Section>

          <Section
            step="06"
            title="Designing for engagement and conversion"
            description="I structure pages with clear calls to action, strong content hierarchy, and intuitive journeys that support business goals."
            gradient="from-yellow-400 via-orange-400 to-red-500"
          >
          <ConversionFlow />
          </Section>
          <LetsTalk />
        </>
      )}


    </main>
  );
}