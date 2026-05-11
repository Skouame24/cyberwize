import { Hero } from "@/components/sections/Hero";
import { TrustBand } from "@/components/sections/TrustBand";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
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
      <TrustBand />
      <About />
      <Features />
      <FamilyProduct />
      <DashboardPreview />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <CtaFinal />
    </>
  );
}

