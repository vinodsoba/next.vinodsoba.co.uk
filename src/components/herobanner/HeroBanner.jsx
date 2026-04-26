"use client";
import Link from "next/link";
import Galaxy from "./../galaxy/Galaxy";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroBanner({
  title = "Freelance Web Designer London",
  subtitle = "High-performing websites built for growth, ecommerce and SEO.",
  ctaText = "View Services",
  ctaUrl = "/services",
}) {

  const { scrollY } = useScroll();

  // scoped parallax (0 → 1)
  const planetY = useTransform(scrollY, [0, 300], [0, 100]);
  const starsY = useTransform(scrollY, [0, 300], [0, 30]);
  const titleY = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section
      className="relative w-full min-h-[100vh] overflow-hidden md:overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/images/bg-stars.png')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        y: starsY
      }}
    >
      {/* Galaxy */}
      <div className="absolute inset-0 z-0">
      <motion.div 
        style={{ 
          y: starsY, 
          scale: 1.05 
        }} 
        className="w-full h-full"
      >
        <Galaxy />
      </motion.div>

      </div>
      

      {/* Planet */}
      <motion.div
        style={{ y: planetY }}
        className="absolute bottom-0 right-0 z-[1] pointer-events-none"
      >
        <img
          src="/images/planet.svg"
          alt="planet"
          className="
            w-[250px]
            sm:w-[350px]
            md:w-[450px]
            lg:w-[550px]
            xl:w-[650px]
            translate-y-[10%]
            opacity-80
          "
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: titleY }}
        className="
          relative z-10
          flex flex-col justify-center
          h-screen
          px-6
          max-w-6xl
          mx-auto
          text-left md:text-left
        "
      >
        <h1
          className="mb-6 text-4xl font-semibold leading-tight text-[#62faed] md:text-6xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <h4 className="mb-8 max-w-2xl text-lg text-white md:text-2xl">
          {subtitle}
        </h4>

        <div className="mt-4">
          <Link
            href={ctaUrl}
            className="inline-block rounded-md border border-[#62faed] px-6 py-3 text-base font-medium text-[#62faed]"
          >
          {ctaText}
        </Link>
        </div>
      </motion.div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-black/10 to-white z-[2]" />
    </section>
  );
}

export default HeroBanner;