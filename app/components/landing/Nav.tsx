"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { site } from "@/site";
import { LogoMark } from "./LogoMark";
import { landingSectionHref } from "./landingSectionQuery";

const NAV_LINKS = [
  { href: landingSectionHref("features"), label: "Features" },
  { href: "/product", label: "Product" },
  { href: landingSectionHref("pricing"), label: "Pricing" },
  { href: landingSectionHref("faq"), label: "FAQ" },
  { href: landingSectionHref("about"), label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 721px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    onChange();
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav>
      <div className="nav-row">
        <Link href="/" className="logo" onClick={close}>
          <LogoMark />
          {site.name}
        </Link>

        <ul className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} scroll={href.startsWith("/?") ? false : true}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={landingSectionHref("cta")} className="nav-pill" scroll={false}>
              Book Demo
              <ArrowRight size={14} strokeWidth={2} aria-hidden />
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* Only mount when open so nothing (including Book Demo) can “stick” off-screen on mobile */}
      {open ? (
        <>
          <div
            className="nav-mobile-backdrop nav-mobile-backdrop--visible"
            aria-hidden
            onClick={close}
          />
          <div className="nav-mobile-panel" id="mobile-nav">
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} scroll={href.startsWith("/?") ? false : true} onClick={close}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={landingSectionHref("cta")}
                  className="nav-pill nav-pill--block"
                  scroll={false}
                  onClick={close}
                >
                  Book Demo
                  <ArrowRight size={14} strokeWidth={2} aria-hidden />
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
}
