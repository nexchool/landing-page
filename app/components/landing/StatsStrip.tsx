import { MODULES } from "./data/modules";

type StatItem = { num: string; label: string; delay?: "delay1" | "delay2" | "delay3" };

const STATS: StatItem[] = [
  { num: `${MODULES.length}`, label: "Modules in one platform" },
  { num: "Multi-campus", label: "Boards, mediums & streams as settings", delay: "delay1" },
  { num: "Web + Mobile", label: "Admin dashboard & Android app", delay: "delay2" },
  { num: "3", label: "App languages: English, हिन्दी, ગુજરાતી", delay: "delay3" },
];

export function StatsStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-inner">
        {STATS.map(({ num, label, delay }) => (
          <div key={label} className={delay ? `reveal ${delay}` : "reveal"}>
            <div className="stat-num">{num}</div>
            <div className="stat-lbl">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
