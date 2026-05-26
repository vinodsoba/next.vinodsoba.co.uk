import Image from "next/image";

export default function ContentRow({
  number,
  title,
  description,
  bullets = [],
  image,
  reverse = false,
  children,
}) {

  return (

    <section className="py-16 md:py-24">

      <div
        className={`
          max-w-7xl mx-auto px-6
          grid lg:grid-cols-2 gap-16 items-center
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >

        {/* TEXT */}
        <div>

          {/* Number */}
          <div className="mb-6 flex items-center gap-4">

            <span className="text-sm font-semibold text-emerald-500">

              {number}

            </span>

            <div className="h-px w-16 bg-emerald-200"></div>

          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black leading-tight">

            {title}

          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">

            {description}

          </p>

          {/* Bullets */}
          <div className="mt-8 space-y-4">

            {bullets.map((bullet, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500">

                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>

                </div>

                <span className="text-slate-700">

                  {bullet}

                </span>

              </div>

            ))}

          </div>

        </div>

        {/* VISUAL */}
        <div className="relative">

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">

            {children ? (

            children

            ) : (

            <Image
                src={image}
                alt={title}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
            />

            )}

        </div>

        </div>

      </div>

    </section>

  );

}