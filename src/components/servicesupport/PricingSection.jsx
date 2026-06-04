import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Essential",
      price: "£149",
      description: "Perfect for small business websites that need ongoing care.",
      features: [
        "Monthly website health check",
        "CMS & plugin update checks",
        "Basic security checks",
        "Monthly backup verification",
        "Small content edits",
        "Email support",
      ],
    },
    {
      name: "Business",
      price: "£299",
      description: "Ideal for growing businesses that require regular support.",
      featured: true,
      features: [
        "Everything in Essential",
        "Priority support",
        "Performance monitoring",
        "SEO checks",
        "Monthly content updates",
        "Up to 1 hour support time",
      ],
    },
    {
      name: "Growth",
      price: "£499",
      description: "For businesses wanting proactive improvements and development support.",
      features: [
        "Everything in Business",
        "Ongoing development support",
        "Analytics & GA4 review",
        "Conversion recommendations",
        "SEO improvements",
        "Up to 3 hours support time",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-green-400 font-medium">
            Maintenance Packages
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6">
            Flexible Support Plans
          </h2>

          <p className="text-slate-400">
            Choose a support package that fits your business. All plans can be
            tailored to your specific requirements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.featured
                  ? "border-green-500 bg-slate-900"
                  : "border-slate-800 bg-slate-900/50"
              }`}
            >
              {plan.featured && (
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 mb-4">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-4 mb-4">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-slate-400">/month</span>
              </div>

              <p className="text-slate-400 mb-8">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
              href="/contact"
              className="w-full py-3 px-6 rounded-lg border border-slate-700 hover:border-green-500 transition">
                Request a Free Website Review
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 max-w-2xl mx-auto">
            Every website is different, so pricing may vary depending on the
            platform, website size, update frequency and level of support
            required.
          </p>
        </div>
      </div>
    </section>
  );
}