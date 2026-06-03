import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | Vinod Soba",
  description:
    "Contact Vinod Soba for web design, front-end development, React, Next.js, WordPress and eCommerce website projects.",

    robots: {
    index: true,
    follow: true,
  },
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

          <ContactForm />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-md bg-slate-50 p-6">
            <h3 className="font-bold">Web Design</h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern, responsive page layouts with strong UX and clear visual
              hierarchy.
            </p>
          </div>

          <div className="rounded-md bg-slate-50 p-6">
            <h3 className="font-bold">Front-End Development</h3>
            <p className="mt-2 text-sm text-slate-600">
              React, Next.js and Tailwind CSS builds focused on performance and
              maintainability.
            </p>
          </div>

          <div className="rounded-md bg-slate-50 p-6">
            <h3 className="font-bold">eCommerce</h3>
            <p className="mt-2 text-sm text-slate-600">
              Conversion-focused layouts, product journeys and scalable
              eCommerce development.
            </p>
          </div>
        </div>
      </section>
    </main>
    )
  }