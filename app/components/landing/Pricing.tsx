import { ArrowRight, Mail, Phone } from "lucide-react";
import { site } from "@/site";
import { SectionHead } from "./ui/SectionHead";

export function Pricing() {
  return (
    <section className="pricing" id="pricing" style={{ background: "var(--cream)" }}>
      <SectionHead
        kicker="Getting Started"
        title="Pricing Built Around Your School"
        sub="Every module included — no per-feature upsells, no lock-ins."
      />
      <div className="pricing-contact reveal">
        <div className="pc-contact-badge">
          <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
          Let&apos;s talk
        </div>
        <h3>
          Contact us to get started with {site.name} — and make your school
          <em> paperless and effortless.</em>
        </h3>
        <p>
          Tell us about your school and we&apos;ll set you up with the modules you need, tailored to
          how you already work. One conversation is all it takes to go fully digital.
        </p>
        <div className="pc-contact-btns">
          <a href={site.phoneHref} className="btn-gold">
            <Phone size={18} strokeWidth={2} aria-hidden />
            Call: {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="btn-ghost-white">
            <Mail size={18} strokeWidth={2} aria-hidden />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
