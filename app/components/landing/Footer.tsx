import { brand } from "./brand";

const FOOTER_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "#", label: "Privacy" },
] as const;

export function Footer() {
  return (
    <footer>
      <div className="ft-logo">{brand.name}</div>
      <div className="ft-links">
        {FOOTER_LINKS.map(({ href, label }) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </div>
      <div className="ft-copy">© 2025 {brand.name}. Made with care in India.</div>
    </footer>
  );
}
