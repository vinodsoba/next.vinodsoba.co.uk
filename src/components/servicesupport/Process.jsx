"use client";

const steps = [

  {
    number: "01",
    title: "Audit & Review",
    description:
      "I review your website, hosting, plugins, performance, and overall setup to identify issues and opportunities.",
  },

  {
    number: "02",
    title: "Optimise & Secure",
    description:
      "Updates, backups, security improvements, and performance optimisation are implemented to keep everything running smoothly.",
  },

  {
    number: "03",
    title: "Ongoing Monitoring",
    description:
      "Your website is continuously monitored to reduce downtime, improve reliability, and catch issues early.",
  },

  {
    number: "04",
    title: "Support & Improvements",
    description:
      "Get reliable technical support and ongoing improvements whenever your business needs them.",
  },

];

export default function Process() {

  return (

    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-500">

            Simple Process

          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-black">

            A simple process designed to keep your website performing at its best.

          </h2>

        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Number */}
              <div className="text-sm font-semibold tracking-[0.2em] text-emerald-500">

                {step.number}

              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-black">

                {step.title}

              </h3>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-slate-600">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}