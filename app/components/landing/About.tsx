import { Globe2, Headphones, Rocket, ShieldCheck } from "lucide-react";
import { site } from "@/site";
import { MODULES } from "./data/modules";

const VALUES = [
  {
    icon: Globe2,
    title: "Made in India",
    description: "Built around Indian boards and mediums, with Hindi and Gujarati in the app",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description: "Permission-checked requests, separate school data, hosted in India",
  },
  {
    icon: Headphones,
    title: "Direct support",
    description: "Reach the founder directly by phone or email",
  },
  {
    icon: Rocket,
    title: "Early-access releases",
    description: "Every new release reaches every school at no extra cost for now",
  },
] as const;

const SW = 1.75;

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div>
          <div className="about-label reveal">About {site.name}</div>
          <h2 className="reveal">Built end to end by one person, and supported by the same one.</h2>
          <p className="about-body reveal">
            {site.name}{" "}
            is designed, built and supported by its founder. There is no ticket queue
            or call centre: if you have a question or something isn&apos;t working, you reach the
            person who built it.
          </p>
          <p className="about-body reveal">
            Attendance, fees, timetable, examinations, transport, hostel and parent communication
            live in one system, replacing scattered registers, spreadsheets and paper. We are in
            early access and building each module around how schools really run, before
            onboarding our first partner schools.
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
              from admission to exam results
            </div>
            <div className="amc-grid">
              <div className="amc-cell">
                <div className="amc-cell-num">{MODULES.length}</div>
                <div className="amc-cell-lbl">Modules</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">Multi-campus</div>
                <div className="amc-cell-lbl">Boards & Mediums</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">Web + Mobile</div>
                <div className="amc-cell-lbl">Dashboard & App</div>
              </div>
              <div className="amc-cell">
                <div className="amc-cell-num">3</div>
                <div className="amc-cell-lbl">App Languages</div>
              </div>
            </div>
          </div>
          <div className="about-side-cards">
            <div className="asc">
              <div className="asc-t">
                <Headphones size={14} strokeWidth={2} aria-hidden />
                Direct support
              </div>
              <div className="asc-s">Straight to the founder</div>
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
