import Link from "next/link";
import { getPosts } from "@/lib/wordpress";

import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import BlogCard from "@/components/blog/BlogCard";


export default async function BlogPage() {
  const posts = await getPosts();

  const featuredPosts = posts.slice(0, 2);
  const regularPosts = posts.slice(2);

  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="py-24 text-left bg-[#FAF7F7]">
        <h1 className="mx-[60px] text-4xl md:text-6xl font-semibold mb-4">
          Blog
        </h1>
        <p className="text-gray-400 mx-[60px]">
          Insights on ecommerce, development and digital growth.
        </p>
      </section>

      {/* POSTS */}
      <section className="mb-20 mx-[60px]">
        <div className="mb-10">
          <span className="text-violet-600 font-semibold">
            Featured Articles
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            Insights, tutorials and real project experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <FeaturedBlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>

      <section className="mx-[60px]">
  <h2 className="mb-8 text-3xl font-bold">
    Latest Articles
  </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {regularPosts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  </section>
    </main>
  );
}