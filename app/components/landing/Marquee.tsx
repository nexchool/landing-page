import { MARQUEE_ITEMS } from "./data/marquee";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((label, i) => (
          <span key={`${label}-${i}`} className="marquee-item">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
