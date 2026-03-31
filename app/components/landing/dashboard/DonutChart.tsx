export function DonutChart() {
  return (
    <div className="donut-ring">
      <svg viewBox="0 0 70 70" aria-hidden>
        <circle cx="35" cy="35" r="28" fill="none" stroke="#f0f0f0" strokeWidth="10" />
        <circle
          cx="35"
          cy="35"
          r="28"
          fill="none"
          stroke="#1a7a5e"
          strokeWidth="10"
          strokeDasharray="107 69"
          strokeDashoffset="88"
          strokeLinecap="round"
        />
        <circle
          cx="35"
          cy="35"
          r="28"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="10"
          strokeDasharray="40 136"
          strokeDashoffset="-19"
          strokeLinecap="round"
        />
        <text x="35" y="39" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0b0f1a">
          68%
        </text>
      </svg>
    </div>
  );
}
