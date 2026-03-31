type StatItem = { num: string; label: string; delay?: "delay1" | "delay2" | "delay3" };

const STATS: StatItem[] = [
  { num: "500+", label: "Schools across India" },
  { num: "2L+", label: "Students managed daily", delay: "delay1" },
  { num: "98%", label: "Client satisfaction rate", delay: "delay2" },
  { num: "5 Min", label: "Average onboarding time", delay: "delay3" },
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
