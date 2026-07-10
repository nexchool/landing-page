import { About } from "./About";
import { Cta } from "./Cta";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Nav } from "./Nav";
import { Pricing } from "./Pricing";
import { StatsStrip } from "./StatsStrip";
import { Features } from "./Features";

export function PitchLanding() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <StatsStrip />
      <Features />
      <Pricing />
      <About />
      <Cta />
      <Footer />
    </>
  );
}
