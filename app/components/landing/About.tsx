import { Globe2, Headphones, ShieldCheck, Star, Trophy, Zap } from "lucide-react";
import { site } from "@/site";

const VALUES = [
  {
    icon: Globe2,
    title: "Made in India",
    description: "Built for Indian schools, in Indian languages",
  },
  {
    icon: ShieldCheck,
    title: "Data Secure",
    description: "Your data is encrypted & privately hosted",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Real humans, not chatbots, always available",
  },
  {
    icon: Zap,
    title: "Always Updating",
    description: "Free updates every month based on feedback",
  },
] as const;

const SW = 1.75;

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <div className="about-label reveal">About {site.name}</div>
          <h2 className="reveal">Built by people who ran schools. Not just engineers.</h2>
          <p className="about-body reveal">
            We are a team of ed-tech professionals and former school administrators who lived the
            chaos of manual paperwork, missed parent calls, and lost fee records. {site.name} was
            born from that frustration.
          </p>
          <p className="about-body reveal">
            Since 2020, we&apos;ve helped 500+ schools across India go fully digital — saving
            thousands of staff-hours every month and dramatically improving parent trust and
            satisfaction.
          </p>
          <div className="about-values reveal">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="val">
                <div className="val-icon-wrap">
                  <Icon size={18} strokeWidth={SW} aria-hidden />
                </div>
                <div className="val-name">{title}</div>
                <div className="val-desc">{description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-visual-wrap reveal delay1">
          <div className="about-main-card">
            <div className="amc-num">500+</div>
            <div className="amc-text">
              Schools trust {site.name} to manage
              <br />
              their daily operations
            </div>
            <div className="amc-grid">
              <div className="amc-cell">
                <div className="amc-cell-num">2L+</div>
                <div className="amc-cell-lbl">Students</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">5 yrs</div>
                <div className="amc-cell-lbl">In Ed-Tech</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">15+</div>
                <div className="amc-cell-lbl">Team Members</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">98%</div>
                <div className="amc-cell-lbl">Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="about-side-cards">
            <div className="asc">
              <div className="asc-t">
                <Trophy size={14} strokeWidth={2} aria-hidden />
                Award 2024
              </div>
              <div className="asc-s">Best Ed-Tech Platform · Gujarat</div>
            </div>
            <div className="asc">
              <div className="asc-t">
                <Star size={14} fill="currentColor" strokeWidth={0} aria-hidden />
                4.9 / 5.0
              </div>
              <div className="asc-s">Average client rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
