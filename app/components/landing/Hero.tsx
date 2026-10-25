import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/site";
import { landingSectionHref } from "./landingSectionQuery";
import { HeroDashboard } from "./dashboard/HeroDashboard";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Made in India · Now onboarding early-access schools</span>
          </div>
          <h1>
            Your School.
            <br />
            <span className="line2">Fully Digital.</span>
            <span className="line3">Finally Effortless.</span>
          </h1>
          <p className="hero-desc">
            {site.name} runs the whole school, from admission to exam results: attendance, fees,
            timetable, transport and hostel. It works for a single school or a trust with many
            campuses, boards and mediums, with a mobile app for teachers and families.
          </p>
          <div className="hero-actions">
            <Link href={landingSectionHref("cta")} className="btn-main" scroll={false}>
              Book a Free Demo <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
            <Link href="/product" className="btn-outline">
              Explore the Product
            </Link>
          </div>
          <div className="hero-trust">
            <div className="trust-text">
              Book a free demo — <strong>no commitment, no credit card.</strong>
            </div>
          </div>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
