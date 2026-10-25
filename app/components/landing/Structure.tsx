import { Layers, Languages, Network, School } from "lucide-react";
import { SectionHead } from "./ui/SectionHead";

const SW = 1.75;

const POINTS = [
  {
    icon: School,
    title: "One school or twenty campuses",
    body: "Each campus has its own classes, teachers and students, and a campus head sees only their campus.",
  },
  {
    icon: Layers,
    title: "More than one board, side by side",
    body: "CBSE and a state board can run on the same campus. Board differences are data you set, not separate software.",
  },
  {
    icon: Languages,
    title: "Parallel mediums and streams",
    body: "English and Gujarati sections of the same grade, or Science, Commerce and Arts streams in Grades 11 and 12.",
  },
  {
    icon: Network,
    title: "Onboarding needs no custom work",
    body: "A new school or trust is set up by configuring its structure. Nothing is rebuilt for you.",
  },
] as const;

export function Structure() {
  return (
    <section className="structure" id="structure">
      <SectionHead
        kicker="Built for scale"
        title="Fits How Your School Is Actually Structured"
        sub="From a single school to a trust with many campuses, boards and mediums."
      />
      <div className="structure-inner">
        <div className="structure-points">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="structure-point reveal">
              <div className="structure-icon">
                <Icon size={20} strokeWidth={SW} aria-hidden />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="structure-tree reveal delay1" role="img" aria-label="Example structure: a trust with two campuses, each running one or more boards, with grades, sections, mediums and streams beneath.">
          <div className="st-caption">Example structure</div>
          <div className="st-node st-root">Your Trust</div>
          <div className="st-row">
            <div className="st-col">
              <div className="st-node st-campus">Campus A</div>
              <div className="st-node st-board">CBSE</div>
              <div className="st-node st-leaf">Grades 1–12 · English</div>
              <div className="st-node st-leaf">Grades 11–12 · Science, Commerce</div>
            </div>
            <div className="st-col">
              <div className="st-node st-campus">Campus B</div>
              <div className="st-node st-board">CBSE</div>
              <div className="st-node st-leaf">Grades 1–8 · English</div>
              <div className="st-node st-board">State board</div>
              <div className="st-node st-leaf">Grades 1–10 · Gujarati</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
