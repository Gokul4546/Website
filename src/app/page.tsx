import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Overview } from "@/components/sections/Overview";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { TechnologyDna } from "@/components/sections/TechnologyDna";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { About } from "@/components/sections/About";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Overview />
        <Products />
        <Services />
        <Industries />
        <TechnologyDna />
        <WhyChoose />
        <About />
        <GlobalPresence />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
