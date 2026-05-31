export default function ContentRow({
  eyebrow,
  title,
  content,
  image,
  reverse = false,
  children
  
}) {

  return (

    <section className="px-6 py-24">

      <div
        className={`
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          lg:grid-cols-2
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >

        {/* CONTENT */}
        <div>

          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] text-violet-400">

              {eyebrow}

            </p>
          )}

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">

            {title}

          </h2>

          <div
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-400
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />

        </div>

        {/* IMAGE */}
        <div className="overflow-hidden rounded-[32px]">

          {children ? (
            children
          ): image ? (
            <img
              src={image}
              alt={title}
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />

          ) : null }

        </div>

      </div>

    </section>

  );

}