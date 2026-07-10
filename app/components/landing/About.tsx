import { Globe2, Headphones, ShieldCheck, Zap } from "lucide-react";
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
            With {site.name}, attendance, fees, timetables, transport and parent communication live
            in one system — replacing scattered registers, spreadsheets and paper. We&apos;re
            building it hand-in-hand with schools and onboarding our first partners now.
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
            <div className="amc-num">1</div>
            <div className="amc-text">
              platform to run your entire school —
              <br />
              from attendance to fees
            </div>
            <div className="amc-grid">
              <div className="amc-cell">
                <div className="amc-cell-num">10+</div>
                <div className="amc-cell-lbl">Modules</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">Web + App</div>
                <div className="amc-cell-lbl">Dashboard & Mobile</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">100%</div>
                <div className="amc-cell-lbl">Paperless</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">24/7</div>
                <div className="amc-cell-lbl">Cloud Access</div>
              </div>
            </div>
          </div>
          <div className="about-side-cards">
            <div className="asc">
              <div className="asc-t">
                <ShieldCheck size={14} strokeWidth={2} aria-hidden />
                Secure by design
              </div>
              <div className="asc-s">Encrypted & privately hosted</div>
            </div>
            <div className="asc">
              <div className="asc-t">
                <Globe2 size={14} strokeWidth={2} aria-hidden />
                Made in India
              </div>
              <div className="asc-s">Built for Indian schools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
