"use client";

import Image from "next/image";

export default function FeaturedProjectCard({
  title,
  category,
  description,
  image,
  tags = [],
}) {

  return (

    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black">

      {/* IMAGE */}
      <div className="relative h-[650px] w-full overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-black/20
            transition-all duration-500
            group-hover:bg-black/70
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          absolute inset-0
          flex items-end
          p-10
        "
      >

        <div
          className="
            max-w-2xl
            translate-y-10
            opacity-0
            transition-all duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >

          {/* CATEGORY */}
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">

            Featured Case Study

          </p>

          {/* TITLE */}
          <h2 className="mt-4 text-5xl font-semibold text-white">

            {title}

          </h2>

          {/* CATEGORY */}
          <p className="mt-4 text-lg text-slate-300">

            {category}

          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-xl text-slate-400">

            {description}

          </p>

          {/* TAGS */}
          <div className="mt-8 flex flex-wrap gap-3">

            {tags.map((tag, index) => (

              <div
                key={index}
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-4 py-2
                  text-sm text-white
                  backdrop-blur-md
                "
              >

                {tag}

              </div>

            ))}

          </div>

          {/* CTA */}
          <button
            className="
              mt-10
              text-lg font-medium
              text-violet-400
              transition-all duration-300
              hover:translate-x-2
            "
          >

            View Case Study →

          </button>

        </div>

      </div>

    </div>

  );

}