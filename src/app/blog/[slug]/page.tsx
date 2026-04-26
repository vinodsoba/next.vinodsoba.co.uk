import { getPostBySlug } from "@/lib/wordpress";

export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <div className="p-10">Invalid slug</div>;
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="p-10">Post not found</div>;
  }

  const image =
    (post as any)?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <main className="bg-black text-white">

      {/* TITLE */}
      <section className="py-24 text-center">
        <h1
          className="text-4xl md:text-6xl font-semibold"
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        />
      </section>

      {/* IMAGE */}
      {image && (
        <img
          src={image}
          alt=""
          className="w-full max-h-[500px] object-cover"
        />
      )}

      {/* CONTENT */}
      <section className="py-20">
        <div
          className="max-w-3xl mx-auto px-6 prose"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        />
      </section>

    </main>
  );
}