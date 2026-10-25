import { Bell, CalendarDays, ClipboardCheck, Play, Wallet } from "lucide-react";
import { site } from "@/site";
import { SectionHead } from "./ui/SectionHead";

const APP_FEATURES = [
  "Teachers mark attendance class by class",
  "Today's schedule and the academic calendar",
  "Fee status, invoices and receipts",
  "Leave requests and approvals",
  "Announcements and push notifications",
  "Hostel and transport details for the student",
] as const;

const LANGUAGES = ["English", "हिन्दी", "ગુજરાતી"] as const;

function PlayBadge() {
  const live = site.playStoreUrl.length > 0;
  const inner = (
    <>
      <Play size={22} strokeWidth={0} fill="currentColor" aria-hidden />
      <span className="store-badge-text">
        <span className="store-badge-small">{live ? "Get it on" : "Coming soon on"}</span>
        <span className="store-badge-big">Google Play</span>
      </span>
    </>
  );
  if (live) {
    return (
      <a href={site.playStoreUrl} className="store-badge" target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <div className="store-badge store-badge--soon" role="img" aria-label="Android app coming soon on Google Play">
      {inner}
    </div>
  );
}

export function MobileApp() {
  return (
    <section className="mobile" id="mobile">
      <div className="mobile-inner">
        <div>
          <SectionHead
            kicker="Mobile app"
            title="The School in Every Pocket"
            sub="Teachers, students and families get an app built for the daily jobs, in the language they are comfortable with."
            className="mobile-head reveal"
          />
          <ul className="mobile-list reveal">
            {APP_FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="mobile-langs reveal">
            <span className="mobile-langs-label">App languages</span>
            {LANGUAGES.map((l) => (
              <span key={l} className="mobile-lang">
                {l}
              </span>
            ))}
          </div>
          <div className="mobile-badges reveal">
            <PlayBadge />
            <p className="mobile-note">Everything is also available on the web dashboard, in any browser.</p>
          </div>
        </div>

        <div className="phone-wrap reveal delay1" aria-hidden>
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-screen">
              <div className="phone-greet">Good morning</div>
              <div className="phone-sub">Today · sample screen</div>
              <div className="phone-row">
                <span className="phone-ico phone-ico--gold">
                  <ClipboardCheck size={16} strokeWidth={1.9} />
                </span>
                <span className="phone-row-text">
                  <strong>Attendance</strong>
                  <small>Class 9B · marked</small>
                </span>
              </div>
              <div className="phone-row">
                <span className="phone-ico phone-ico--blue">
                  <CalendarDays size={16} strokeWidth={1.9} />
                </span>
                <span className="phone-row-text">
                  <strong>Period 3 · Mathematics</strong>
                  <small>10:10 – 10:50</small>
                </span>
              </div>
              <div className="phone-row">
                <span className="phone-ico phone-ico--jade">
                  <Wallet size={16} strokeWidth={1.9} />
                </span>
                <span className="phone-row-text">
                  <strong>Term 2 fees</strong>
                  <small>Due this month</small>
                </span>
              </div>
              <div className="phone-row">
                <span className="phone-ico phone-ico--rose">
                  <Bell size={16} strokeWidth={1.9} />
                </span>
                <span className="phone-row-text">
                  <strong>Annual day notice</strong>
                  <small>From the principal</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
