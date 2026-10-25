import { Database, History, KeyRound, Lock, ScrollText, ShieldCheck } from "lucide-react";
import { SectionHead } from "./ui/SectionHead";

const SW = 1.75;

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Roles & permissions",
    body: "Access is granted per role and, where needed, per campus. Every request is checked on the server, on web and in the app.",
  },
  {
    icon: ScrollText,
    title: "Audit log",
    body: "A record of who changed what and when, so questions about a change have an answer.",
  },
  {
    icon: KeyRound,
    title: "Sign-in your way",
    body: "Each school chooses its methods: email, admission number, mobile OTP over SMS or WhatsApp, or a student PIN.",
  },
  {
    icon: Database,
    title: "Your data stays yours",
    body: "Every school's data is kept separate from every other school's, in the same system.",
  },
  {
    icon: History,
    title: "History is never rewritten",
    body: "A published result is revised, not overwritten. Attendance corrections and gate passes keep their trail.",
  },
  {
    icon: Lock,
    title: "Hosted in India",
    body: "Runs on AWS in Mumbai, with traffic over HTTPS and the database kept off the public internet.",
  },
] as const;

export function Control() {
  return (
    <section className="control" id="control">
      <SectionHead
        kicker="Trust & control"
        title="Control Over Who Sees What"
        sub="School data is sensitive. The product is built so access is deliberate and changes are traceable."
      />
      <div className="control-grid">
        {ITEMS.map(({ icon: Icon, title, body }, i) => (
          <div key={title} className={`control-card reveal${i % 3 === 1 ? " delay1" : i % 3 === 2 ? " delay2" : ""}`}>
            <div className="control-icon">
              <Icon size={20} strokeWidth={SW} aria-hidden />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
