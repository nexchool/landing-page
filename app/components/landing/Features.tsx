import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MODULE_GROUPS, modulesInGroup } from "./data/modules";
import { SectionHead } from "./ui/SectionHead";

const ICON = 22;
const SW = 1.65;

export function Features() {
  return (
    <section className="features" id="features">
      <SectionHead
        kicker="Platform Capabilities"
        title="Everything Your School Needs"
        sub="Every module is built around how schools actually work, so your staff learn it in a day, not a month."
      />
      <div className="mod-groups">
        {MODULE_GROUPS.map((group) => (
          <div key={group.id} className="mod-group reveal">
            <div className="mod-group-head">
              <h3>{group.title}</h3>
              <p>{group.blurb}</p>
            </div>
            <div className="mod-grid">
              {modulesInGroup(group.id).map(
                ({ id, icon: Icon, iconBackground, iconColor, title, summary, tags }) => (
                  <article key={id} className="fb mod-card">
                    <div className="fb-icon" style={{ background: iconBackground }}>
                      <Icon size={ICON} strokeWidth={SW} color={iconColor} aria-hidden />
                    </div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <div className="mod-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="mod-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mod-more reveal">
        <Link href="/product" className="btn-main">
          See the full product overview <ArrowRight size={16} className="arrow" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
