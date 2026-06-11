import Link from "next/link";

export default function BlogCard({ post }) {
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  return (
    <article
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <Link href={`/blog/${post.slug}`}>
        <img
          src={image}
          alt={post.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-6">
          <span className="text-sm text-violet-600 font-medium">
            {post.category}
          </span>

          <h2
            className="text-2xl font-semibold mb-2 group-hover:text-gray-300 transition"
            dangerouslySetInnerHTML={{
            __html: post.title.rendered,
            }}
        />


          <div className="mt-6 font-medium text-violet-600">
            Read More →
          </div>
        </div>
      </Link>
    </article>
  );
}