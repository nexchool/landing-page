import { Contact, GraduationCap, Presentation, ShieldCheck } from "lucide-react";
import { SectionHead } from "./ui/SectionHead";

const SW = 1.75;

const ROLES = [
  {
    icon: ShieldCheck,
    title: "Principal & admin office",
    items: [
      "One dashboard: headcount, today's attendance, fee position, pending approvals",
      "Approve leave, corrections and gate passes",
      "Publish announcements and results",
      "Campus heads see only their own campus",
    ],
  },
  {
    icon: Presentation,
    title: "Teachers",
    items: [
      "Mark attendance on a phone in minutes",
      "See today's schedule and classes",
      "Decide student leave as class teacher",
      "Enter marks for the subjects they teach",
    ],
  },
  {
    icon: GraduationCap,
    title: "Students & families",
    items: [
      "Attendance, schedule and fee status in the app",
      "Request leave and track the answer",
      "Receive announcements and absence alerts",
      "See their own bus, route and stop",
    ],
  },
  {
    icon: Contact,
    title: "Desk staff",
    items: [
      "Accounts desk: invoices, payments, receipts, defaulters",
      "Hostel warden: beds, gate passes, visitors",
      "Transport manager: buses, routes, enrolments",
      "Gatekeeper: marks boarders out and back in",
    ],
  },
] as const;

export function WhoItsFor() {
  return (
    <section className="who" id="who">
      <SectionHead
        kicker="Made for every role"
        title="What Each Person Sees"
        sub="Everyone gets the screens for their job and nothing else."
      />
      <div className="who-grid">
        {ROLES.map(({ icon: Icon, title, items }, i) => (
          <div key={title} className={`who-card reveal${i % 2 ? " delay1" : ""}`}>
            <div className="who-icon">
              <Icon size={20} strokeWidth={SW} aria-hidden />
            </div>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
