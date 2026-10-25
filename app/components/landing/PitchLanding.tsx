import { About } from "./About";
import { Control } from "./Control";
import { Cta } from "./Cta";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { MobileApp } from "./MobileApp";
import { Nav } from "./Nav";
import { Pricing } from "./Pricing";
import { Setup } from "./Setup";
import { StatsStrip } from "./StatsStrip";
import { Structure } from "./Structure";
import { WhoItsFor } from "./WhoItsFor";

export function PitchLanding() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <StatsStrip />
      <Features />
      <Structure />
      <WhoItsFor />
      <MobileApp />
      <Setup />
      <Control />
      <Pricing />
      <Faq />
      <About />
      <Cta />
      <Footer />
    </>
  );
}
