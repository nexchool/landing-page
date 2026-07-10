import { Mail, Phone } from "lucide-react";
import { site } from "@/site";

export function Cta() {
  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <h2>
          Ready to make your school <em>unstoppable?</em>
        </h2>
        <p>
          Be one of the first schools to run smarter with {site.name}. Book a free 30-minute demo —
          no commitment, no credit card.
        </p>
        <div className="cta-btns">
          <a href={site.phoneHref} className="btn-gold">
            <Phone size={18} strokeWidth={2} aria-hidden />
            Call Now: {site.phoneDisplay}
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
