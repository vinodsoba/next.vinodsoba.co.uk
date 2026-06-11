"use client";

import Link from "next/link";

export default function FeaturedBlogCard({ post }) {
  const image = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/10]">
      
      {image && (
            <img
            src={image}
            alt={post.title.rendered}
            className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
            "
            />
        ) }
        

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/30
            to-transparent
          "
        />

        <div className="absolute bottom-0 p-8 text-white">
          <span className="inline-block rounded-full bg-violet-600 px-3 py-1 text-xs font-medium mb-4">
            {post.category}
          </span>

        <h2
            className="text-[14px] sm:text-3xl lg:text-2xl font-semibold mb-2 group-hover:text-gray-300 transition"
            dangerouslySetInnerHTML={{
            __html: post.title.rendered,
            }}
        />

          <span className="text-violet-300 font-medium">
            Read article →
          </span>
        </div>
      </div>
    </Link>
  );
}