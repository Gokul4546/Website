import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HeroNetwork } from "@/components/sections/HeroNetwork";
import { TrustSignal } from "@/components/sections/TrustSignal";
import { OverviewStory } from "@/components/sections/OverviewStory";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { ServiceJourney } from "@/components/sections/ServiceJourney";
import { IndustryExplorer } from "@/components/sections/IndustryExplorer";
import { TechnologyArchitecture } from "@/components/sections/TechnologyArchitecture";
import { ValueNarrative } from "@/components/sections/ValueNarrative";
import { AboutStatement } from "@/components/sections/AboutStatement";
import { GlobalOperationsMap } from "@/components/sections/GlobalOperationsMap";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroNetwork />
        <TrustSignal />
        <OverviewStory />
        <ProductEcosystem />
        <ServiceJourney />
        <IndustryExplorer />
        <TechnologyArchitecture />
        <ValueNarrative />
        <AboutStatement />
        <GlobalOperationsMap />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
