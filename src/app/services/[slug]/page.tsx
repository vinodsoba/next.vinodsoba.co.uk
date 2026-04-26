import { getServiceBySlug } from "@/lib/getServices";
import Image from "next/image";

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
      {image && (
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

    </main>
  );
}