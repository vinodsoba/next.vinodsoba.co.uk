import { getServiceBySlug } from "@/lib/getServices";
import Image from "next/image";
import Section from "@/components/Section/Section";
import WireframeToUI from "@/components/wireframe/WireframeToUI";
import DesignSystem from "@/components/designsystem/DesignSystem";


export const revalidate = 60;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  if (!slug) {
    return <div className="p-10">Invalid service slug</div>;
  }

  const service = await getServiceBySlug(slug);

  if (!service) {
    return <div className="p-10">Service not found</div>;
  }

  const isWebDesignPage = slug === "web-design";

  const image =
    service?.acf?.post_images ||
    (service as any)?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    null;

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 text-center">
        <h1
          className="text-4xl md:text-6xl font-semibold"
          dangerouslySetInnerHTML={{
            __html: service?.title?.rendered || "",
          }}
        />
      </section>

      {/* IMAGE */}

      {!isWebDesignPage && image && (
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={image}
            alt={service?.title?.rendered || ""}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* CONTENT */}
      <section className="py-20">
        <div
          className="max-w-3xl mx-auto px-6 prose"
          dangerouslySetInnerHTML={{
            __html: service?.content?.rendered || "",
          }}
        />
      </section>

      {slug === "web-design" && (
        <>
          <Section
            step="01"
            title="Understanding the user journey"
            description="I start by identifying the purpose of the page, the user’s intent, and the key action they need to take."
          />

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
          />

          <Section
            step="05"
            title="Optimising for every device"
            description="Every layout is built mobile-first to ensure a smooth experience across desktop, tablet, and mobile."
          />

          <Section
            step="06"
            title="Designing for engagement and conversion"
            description="I structure pages with clear calls to action, strong content hierarchy, and intuitive journeys that support business goals."
          />
        </>
      )}

    </main>
  );
}