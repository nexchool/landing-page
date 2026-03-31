import type { CSSProperties } from "react";

type SectionHeadProps = {
  kicker: string;
  title: string;
  sub?: string;
  className?: string;
  style?: CSSProperties;
  titleAs?: "h2" | "h3";
};

export function SectionHead({
  kicker,
  title,
  sub,
  className = "section-head reveal",
  style,
  titleAs: TitleTag = "h2",
}: SectionHeadProps) {
  return (
    <div className={className} style={style}>
      <div className="section-kicker">{kicker}</div>
      <TitleTag className="section-title">{title}</TitleTag>
      {sub ? <p className="section-sub">{sub}</p> : null}
    </div>
  );
}
