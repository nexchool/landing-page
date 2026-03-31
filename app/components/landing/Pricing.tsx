import { ArrowRight, Check, Star } from "lucide-react";
import { PRICING_PLANS } from "./data/pricing";
import { SectionHead } from "./ui/SectionHead";

export function Pricing() {
  return (
    <section className="pricing" id="pricing" style={{ background: "var(--cream)" }}>
      <SectionHead
        kicker="Transparent Pricing"
        title="One Plan for Every School"
        sub="No hidden charges. No lock-ins. Cancel anytime."
      />
      <div className="pricing-grid">
        {PRICING_PLANS.map((plan) => {
          const isFeatured = plan.variant === "featured";
          const cardClass = ["pc", "reveal", plan.revealClass, isFeatured ? "featured" : ""]
            .filter(Boolean)
            .join(" ");

          return (
            <div key={plan.id} className={cardClass}>
              {isFeatured ? (
                <div className="pop-badge">
                  <Star size={12} fill="currentColor" strokeWidth={0} aria-hidden />
                  Most Popular
                </div>
              ) : null}

              <div className="plan-name">{plan.name}</div>

              {plan.priceDisplay === "amount" ? (
                <div className="plan-amount">
                  <sup>₹</sup>
                  {plan.amount}
                </div>
              ) : (
                <div className="plan-amount" style={{ fontSize: "2.2rem", paddingTop: "0.4rem" }}>
                  Custom
                </div>
              )}

              <div className="plan-cadence">{plan.cadence}</div>
              <div className="plan-desc">{plan.description}</div>

              <ul className="plan-feats">
                {plan.features.map((feat) => (
                  <li key={feat}>
                    <Check size={15} strokeWidth={2.25} className="feat-check" aria-hidden />
                    {feat}
                  </li>
                ))}
              </ul>

              <button type="button" className={isFeatured ? "plan-btn inv" : "plan-btn"}>
                {plan.cta}
                <ArrowRight size={16} aria-hidden />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
