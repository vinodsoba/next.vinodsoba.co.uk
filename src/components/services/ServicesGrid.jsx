"use client";

export default function ServicesGrid({ services = [] }) {
  if (!services.length) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((item) => {
            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              item.acf?.post_images;

            return (
              <div
                key={item.id}
                className="group border rounded-xl p-6 hover:shadow-lg transition"
              >

                {/* Image */}
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-2"
                  dangerouslySetInnerHTML={{
                    __html: item.title?.rendered,
                  }}
                />

                {/* Content */}
                <div
                  className="text-gray-600 text-sm mb-4"
                  dangerouslySetInnerHTML={{
                    __html: item.excerpt?.rendered,
                  }}
                />

                {/* Link */}
                <a
                  href={`/services/${item.slug}`}
                  className="text-black font-medium hover:underline"
                >
                  Learn more →
                </a>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}