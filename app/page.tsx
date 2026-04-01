import { Suspense } from "react";
import { LandingEffects, LandingSectionScroll, PitchLanding } from "./components/landing";

export default function Home() {
  return (
    <>
      <LandingEffects />
      <Suspense fallback={null}>
        <LandingSectionScroll />
      </Suspense>
      <PitchLanding />
    </>
  );
}
