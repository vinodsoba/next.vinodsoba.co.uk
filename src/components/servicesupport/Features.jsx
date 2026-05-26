"use client";

import {
  ShieldCheck,
  Gauge,
  DatabaseBackup,
  Headphones,
  Activity,
  SearchCheck,
} from "lucide-react";

const features = [

  {
    title: "Security Updates",
    description:
      "Keep your website secure and protected with ongoing updates and monitoring.",
    icon: ShieldCheck
  },

  {
    title: "Performance Optimisation",
    description:
      "Improve loading speeds, Core Web Vitals, and overall website performance.",
    icon: Gauge
  },

  {
    title: "Website Backups",
    description:
      "Automated backups and recovery solutions to protect your business.",
    icon: DatabaseBackup
  },

  {
    title: "Technical Support",
    description:
      "Fast support and troubleshooting whenever issues arise.",
    icon: Headphones
  },

  {
    title: "Website Monitoring",
    description:
      "Ongoing monitoring to keep your website online and running smoothly.",
    icon: Activity
  },

  {
    title: "SEO & Maintenance",
    description:
      "Maintain strong technical SEO and healthy website performance.",
    icon: SearchCheck
  },

];

export default function Features() {

  return (

    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-500">

            Website Support Services

          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-black">

            Everything your website needs to stay secure, fast, and running smoothly.

          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">

            Ongoing website maintenance and technical support designed to help businesses stay secure, perform better, and reduce downtime.

          </p>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >

              {/* Icon Circle */}
              <feature.icon
                className="h-7 w-7 text-emerald-500"
                strokeWidth={1.8}
              />

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-black">

                {feature.title}

              </h3>

              {/* Description */}
              <p className="mt-4 leading-relaxed text-slate-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}