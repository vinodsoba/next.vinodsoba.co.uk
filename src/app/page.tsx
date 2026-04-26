import SkillsSection from "@/components/skills/SkillsSection";
import HeroBanner from "@/components/herobanner/HeroBanner";
import HowIWork from "@/components/howiwork/HowIWork";
import WhatIDo from "@/components/whatido/WhatIDo";
import WhyHireMe from "@/components/whyhire/WhyHire"

import { getSkills } from "@/lib/getSkills";
import { getHomepage } from "@/lib/getHomepage";

export default async function Home() {
  let skills: any[] = [];
  let homepage: any = null;

  try {
    const [skillsData, homepageData] = await Promise.all([
      getSkills(),
      getHomepage(),
    ]);

    skills = skillsData || [];
    homepage = homepageData || null;

  } catch (error) {
    console.error("Homepage data fetch failed:", error);
  }

  const acf = homepage?.acf ?? {};

  return (
    <main>

      {/* HERO */}
      <section className="text-center bg-black text-white">
        <HeroBanner
          title={acf?.hero_banner_h1 || ""}
          subtitle={acf?.sub_header_title || ""}
          ctaText={acf?.hero_banner_cta_text || ""}
          ctaUrl={acf?.hero_banner_cta_url || ""}
        />
      </section>

      {/* HOW I WORK */}
      <HowIWork
        subTitle={acf?.how_i_work_title || ""}
        content={acf?.sub_title_how_i_work || ""}
      />

      <WhatIDo acf={acf} />

      {/* SKILLS */}
      <SkillsSection skills={(skills || []) as any} />

      <WhyHireMe acf={acf}/>

    </main>
  );
}