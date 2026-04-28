import Link from "next/link";
import { getServices } from "@/lib/getServices";
import ServiceCard from "@/components/servicecard/ServiceCard";

type Service = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  acf?: {
    post_images?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url: string }];
  };
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Services
        </h1>
        <p className="text-gray-400">
          Ecommerce, development and digital growth solutions.
        </p>
      </section>

      {/* GRID */}
      <section className="px-6 py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
      Services
    </h1>

    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service: Service, index: number) => {
        const image =
          service?.acf?.post_images ||
          service?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          null;

        return (
          <ServiceCard
            key={service.id}
            index={index}
            title={service?.title?.rendered || "Service"}
            excerpt={service?.excerpt?.rendered || ""}
            slug={service.slug}
            image={image}
          />
        );
      })}
    </div>
  </div>
</section>

    </main>
  );
}