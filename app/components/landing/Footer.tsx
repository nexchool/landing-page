import Link from "next/link";
import { site } from "@/site";
import { landingSectionHref } from "./landingSectionQuery";

const FOOTER_LINKS = [
  { href: landingSectionHref("features"), label: "Features" },
  { href: landingSectionHref("pricing"), label: "Pricing" },
  { href: landingSectionHref("about"), label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export function Footer() {
  return (
    <footer>
      <div className="ft-logo">{site.name}</div>
      <div className="ft-links">
        {FOOTER_LINKS.map(({ href, label }) => (
          <Link key={label} href={href} scroll={href.startsWith("/?") ? false : true}>
            {label}
          </Link>
        ))}
      </div>
      <div className="ft-copy">
        © {site.copyrightYear} {site.name}. Made with care in India.
      </div>
    </footer>
  );
}
