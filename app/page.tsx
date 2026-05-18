import { Hero } from "@/components/sections/Hero";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { HomeMission } from "@/components/sections/HomeMission";
import { TrustBand } from "@/components/sections/TrustBand";
import { DefensePillars } from "@/components/sections/DefensePillars";
import { FamilyProduct } from "@/components/sections/FamilyProduct";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaFinal } from "@/components/sections/CtaFinal";
export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <HomeMission />
      <TrustBand />
      <DefensePillars />
      <FamilyProduct />
      <DashboardPreview />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <CtaFinal />
    </>
  );
}
