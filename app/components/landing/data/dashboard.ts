import type { CSSProperties } from "react";

export type BarSegment = {
  h: string;
  background: string;
  animationDelay: string;
};

export const ATTENDANCE_BARS: BarSegment[] = [
  { h: "72%", background: "#e2e8f0", animationDelay: "0.05s" },
  { h: "85%", background: "#b0c4de", animationDelay: "0.1s" },
  { h: "68%", background: "#e2e8f0", animationDelay: "0.15s" },
  { h: "91%", background: "#1a3c6e", animationDelay: "0.2s" },
  { h: "78%", background: "#e2e8f0", animationDelay: "0.25s" },
  { h: "96%", background: "#c9a84c", animationDelay: "0.3s" },
  { h: "88%", background: "#e2e8f0", animationDelay: "0.35s" },
];

export function barStyle(seg: BarSegment): CSSProperties {
  return {
    "--h": seg.h,
    width: "10%",
    background: seg.background,
    animationDelay: seg.animationDelay,
  } as CSSProperties;
}
