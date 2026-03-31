import { ArrowRight } from "lucide-react";
import { brand } from "./brand";
import { HeroDashboard } from "./dashboard/HeroDashboard";

type TrustAvatar = { initials: string; bg: string; fg?: string };

const TRUST_AVATARS: TrustAvatar[] = [
  { initials: "RK", bg: "#1a3c6e" },
  { initials: "SP", bg: "#c44569" },
  { initials: "AM", bg: "#1a7a5e" },
  { initials: "DV", bg: "#c9a84c", fg: "#1a1a00" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">
            <div className="eyebrow-dot" />
            <span className="eyebrow-text">Trusted by 500+ Schools Across India</span>
          </div>
          <h1>
            Your School.
            <br />
            <span className="line2">Fully Digital.</span>
            <span className="line3">Finally Effortless.</span>
          </h1>
            <p className="hero-desc">
              {brand.name} is the business-grade school management platform that handles attendance,
              fees, results, parent communication and more — in one beautifully simple system.
            </p>
          <div className="hero-actions">
            <a href="#cta" className="btn-main">
              Book a Free Demo <ArrowRight size={16} className="arrow" aria-hidden />
            </a>
            <a href="#features" className="btn-outline">
              See Features
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-avatars">
              {TRUST_AVATARS.map(({ initials, bg, fg }) => (
                <div key={initials} className="av" style={{ background: bg, ...(fg ? { color: fg } : {}) }}>
                  {initials}
                </div>
              ))}
            </div>
            <div className="trust-text">
              <strong>500+ school leaders</strong> chose {brand.name} this year
            </div>
          </div>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}
