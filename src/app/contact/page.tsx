import Link from "next/link";

export const metadata = {
  title: "Contact | Vinod Soba",
  description:
    "Contact Vinod Soba for web design, front-end development, React, Next.js, WordPress and eCommerce website projects.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold text-pink-500">
              Let’s Talk
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Have a project in mind?
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Whether you need a new website, front-end development support,
              improved page layouts, or help with an eCommerce project, I’d be
              happy to hear from you.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hello@vinodsoba.co.uk"
                  className="text-pink-500 hover:underline"
                >
                  hello@vinodsoba.co.uk
                </a>
              </p>

              <p>
                <strong>Services:</strong> Web Design, Front-End Development,
                React, Next.js, WordPress, Magento & eCommerce
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">
            <h2 className="text-2xl font-bold">Start a conversation</h2>

            <p className="mt-3 text-slate-300">
              Tell me what you’re working on and I’ll get back to you as soon
              as possible.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-pink-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-pink-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Project type
                </label>
                <select
                  name="projectType"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-pink-400"
                >
                  <option className="text-slate-900">Web Design</option>
                  <option className="text-slate-900">Front-End Development</option>
                  <option className="text-slate-900">WordPress / Next.js</option>
                  <option className="text-slate-900">Magento / eCommerce</option>
                  <option className="text-slate-900">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-pink-400"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-bold">Web Design</h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern, responsive page layouts with strong UX and clear visual
              hierarchy.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-bold">Front-End Development</h3>
            <p className="mt-2 text-sm text-slate-600">
              React, Next.js and Tailwind CSS builds focused on performance and
              maintainability.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <h3 className="font-bold">eCommerce</h3>
            <p className="mt-2 text-sm text-slate-600">
              Conversion-focused layouts, product journeys and scalable
              eCommerce development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}