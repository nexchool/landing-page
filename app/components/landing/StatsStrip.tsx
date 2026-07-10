type StatItem = { num: string; label: string; delay?: "delay1" | "delay2" | "delay3" };

const STATS: StatItem[] = [
  { num: "10+", label: "Modules in one platform" },
  { num: "Web + App", label: "Dashboard & mobile", delay: "delay1" },
  { num: "100%", label: "Paperless workflows", delay: "delay2" },
  { num: "24/7", label: "Cloud-hosted access", delay: "delay3" },
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
