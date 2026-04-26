import Link from "next/link";
import { getServices } from "@/lib/getServices";

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
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {services.map((service: any) => {
            const image =
              service.acf?.post_images ||
              service._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group block"
              >
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[300px] object-cover rounded-xl mb-4"
                  />
                )}

                <h2
                  className="text-2xl font-semibold mb-2 group-hover:text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: service.title.rendered,
                  }}
                />

                <div
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: service.excerpt?.rendered || "",
                  }}
                />
              </Link>
            );
          })}

        </div>
      </section>

    </main>
  );
}