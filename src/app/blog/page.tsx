import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Blog
        </h1>
        <p className="text-gray-400">
          Insights on ecommerce, development and digital growth.
        </p>
      </section>

      {/* POSTS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {posts.map((post) => {
            const image =
              (post as any)?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
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
                  className="text-2xl font-semibold mb-2 group-hover:text-gray-300 transition"
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />

                <div
                  className="text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
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