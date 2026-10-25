import { ArrowRight, Mail, Phone } from "lucide-react";
import { site } from "@/site";
import { SectionHead } from "./ui/SectionHead";

const MODEL = [
  {
    title: "One rate per student, per year",
    body: "Your yearly cost follows the number of students you enrol, so a small school pays like a small school.",
  },
  {
    title: "Every module included",
    body: "You switch on what your school uses. Nothing is held back for a higher tier, and there are no per-feature upsells.",
  },
  {
    title: "Early-access releases included",
    body: "While we are in early access, every new release goes to every school at no extra cost.",
  },
] as const;

export function Pricing() {
  return (
    <section className="pricing" id="pricing" style={{ background: "var(--cream)" }}>
      <SectionHead
        kicker="Pricing"
        title="Pricing Built Around Your School"
        sub="Simple to understand, agreed on a call, with no lock-ins."
      />
      <div className="price-model">
        {MODEL.map(({ title, body }, i) => (
          <div key={title} className={`price-card reveal${i ? ` delay${i}` : ""}`}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <p className="price-note reveal">
        SMS and WhatsApp messages, if your school turns them on, are charged by usage.
      </p>
      <div className="pricing-contact reveal">
        <div className="pc-contact-badge">
          <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
          Let&apos;s talk
        </div>
        <h3>
          We agree the price on a call, based on your school and the modules you need
          <em> so you only pay for what fits.</em>
        </h3>
        <p>
          Tell us about your school and we will set you up with the modules you need, tailored to
          how you already work. One conversation is all it takes to get started.
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
