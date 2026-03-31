"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand } from "./brand";
import { LogoMark } from "./LogoMark";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
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
        <a href="#" className="logo" onClick={close}>
          <LogoMark />
          {brand.name}
        </a>

        <ul className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#cta" className="nav-pill">
              Book Demo
              <ArrowRight size={14} strokeWidth={2} aria-hidden />
            </a>
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
                  <a href={href} onClick={close}>
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#cta" className="nav-pill nav-pill--block" onClick={close}>
                  Book Demo
                  <ArrowRight size={14} strokeWidth={2} aria-hidden />
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
}
