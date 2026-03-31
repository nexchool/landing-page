import { TESTIMONIALS } from "./data/testimonials";
import { SectionHead } from "./ui/SectionHead";
import { StarRating } from "./ui/StarRating";

export function Testimonials() {
  const [featured, ...compact] = TESTIMONIALS;

  return (
    <section className="testi" id="testimonials">
      <SectionHead
        kicker="Real Stories"
        title="Loved by School Leaders"
        style={{ marginBottom: "3rem" }}
      />
      <div className="testi-grid" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <article className="tc big reveal">
          <StarRating />
          <p className="tc-quote">&quot;{featured.quote}&quot;</p>
          <div className="tc-author">
            <div className="tc-av" style={{ background: featured.avatarBg }}>
              {featured.initials}
            </div>
            <div>
              <div className="tc-name">{featured.name}</div>
              <div className="tc-role">{featured.role}</div>
            </div>
          </div>
        </article>
        <div>
          {compact.map((t) => (
            <article
              key={t.id}
              className={t.revealClass ? `tc reveal ${t.revealClass}` : "tc reveal"}
              style={t.style}
            >
              <StarRating />
              <p className="tc-quote">&quot;{t.quote}&quot;</p>
              <div className="tc-author">
                <div
                  className="tc-av"
                  style={{
                    background: t.avatarBg,
                    ...(t.avatarFg ? { color: t.avatarFg } : {}),
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="tc-name">{t.name}</div>
                  <div className="tc-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
