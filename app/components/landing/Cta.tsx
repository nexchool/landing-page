import { Mail, Phone } from "lucide-react";
import { brand } from "./brand";

export function Cta() {
  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <h2>
          Ready to make your school <em>unstoppable?</em>
        </h2>
        <p>
          Join 500+ schools already running smarter with {brand.name}. Book a free 30-minute demo —
          no commitment, no credit card.
        </p>
        <div className="cta-btns">
          <a href={brand.phoneHref} className="btn-gold">
            <Phone size={18} strokeWidth={2} aria-hidden />
            Call Now: {brand.phoneDisplay}
          </a>
          <a href={`mailto:${brand.email}`} className="btn-ghost-white">
            <Mail size={18} strokeWidth={2} aria-hidden />
            {brand.email}
          </a>
        </div>
      </div>
    </section>
  );
}
