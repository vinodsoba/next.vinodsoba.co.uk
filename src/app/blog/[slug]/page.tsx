import { getPostBySlug } from "@/lib/wordpress";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const { slug } = await props.params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title:
      post.yoast_head_json?.title ||
      post.title.rendered,

    description:
      post.yoast_head_json?.description ||
      "",

    openGraph: {
      title:
        post.yoast_head_json?.og_title,
      description:
        post.yoast_head_json?.og_description,
      url:
        post.yoast_head_json?.og_url,
      images:
        post.yoast_head_json?.og_image?.map(
          (img) => img.url
        ) || [],
    },
  };
}

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
    <main className="bg-white text-black">

      {/* TITLE */}
      <section className="pt-[160px] pb-[80px] text-left bg-[#FAF7F7] 2xl:pt-[160px]">
        <h1
          className="mx-[30px] md:mx-[60px] 2xl:mx-[60px] 2xl:text-center text-4xl md:text-5xl/14 font-semibold"
          dangerouslySetInnerHTML={{
            __html: post.title.rendered,
          }}
        />
      </section>

      {/* IMAGE */}
      {/*{image && (
        <img
          src={image}
          alt=""
          className="w-full max-h-[500px] object-cover"
        />
      )}*/}

      {/* CONTENT */}
      <section className="py-20">
        <article
          className="blog-content max-w-6xl mx-auto px-6 prose"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        />
      </section>

    </main>
  );
}