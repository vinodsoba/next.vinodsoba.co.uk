import { getHomepage } from "@/lib/getHomepage";

export const revalidate = 60;

export default async function AboutPage() {
  const homepage = await getHomepage();
  const acf = homepage?.acf || {};

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          About Me
        </h1>

        <div
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: acf?.about_me_title || "",
          }}
        />
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{
              __html: acf?.what_i_do_content || "",
            }}
          />

        </div>
      </section>

      {/* IMAGE */}
      {acf?.about_me_background_image && (
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={acf.about_me_background_image}
              alt=""
              className="w-full rounded-xl"
            />
          </div>
        </section>
      )}


      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl mb-6">
          Let’s work together
        </h2>

        <a
          href="/contact"
          className="inline-block border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Get in touch
        </a>
      </section>

    </main>
  );
}