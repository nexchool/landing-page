import { Check } from "lucide-react";
import { SWITCHABLE_MODULE_NAMES } from "./data/modules";
import { SectionHead } from "./ui/SectionHead";

const STEPS = [
  {
    n: "1",
    title: "Tell us how your school works",
    body: "Your campuses, boards, mediums, grades and the modules you need. A short call is enough.",
  },
  {
    n: "2",
    title: "We set it up and bring your data in",
    body: "Your structure is configured for you. Students and teachers come in from a spreadsheet, and sign-in slips are ready to hand out.",
  },
  {
    n: "3",
    title: "Go live, one module at a time",
    body: "Start with attendance and student records, and switch on fees, exams or hostel when you are ready.",
  },
] as const;

export function Setup() {
  return (
    <section className="setup" id="setup">
      <SectionHead
        kicker="Getting started"
        title="Switch On Only What You Use"
        sub="Not every school runs a hostel or its own exams. Modules your school doesn't use stay hidden from every screen."
      />
      <div className="setup-inner">
        <div className="setup-steps">
          {STEPS.map(({ n, title, body }) => (
            <div key={n} className="setup-step reveal">
              <div className="setup-num">{n}</div>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="setup-switches reveal delay1">
          <div className="setup-switches-title">Switched on per school</div>
          <ul>
            {SWITCHABLE_MODULE_NAMES.map((name) => (
              <li key={name}>
                <Check size={14} strokeWidth={2.5} aria-hidden />
                {name}
              </li>
            ))}
          </ul>
          <p>Students, teachers, classes and the academic structure are always on. They are the school.</p>
        </div>
      </div>
    </section>
  );
}
