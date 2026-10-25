import { ChevronDown } from "lucide-react";
import { FAQ } from "./data/faq";
import { SectionHead } from "./ui/SectionHead";

export function Faq() {
  return (
    <section className="faq" id="faq">
      <SectionHead
        kicker="Questions"
        title="Questions Schools Ask Us"
        sub="Straight answers, including what Nexchool doesn't do yet."
      />
      <div className="faq-list reveal">
        {FAQ.map(({ q, a }) => (
          <details key={q} className="faq-item">
            <summary>
              <span>{q}</span>
              <ChevronDown size={18} strokeWidth={2} aria-hidden />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
