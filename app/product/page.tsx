import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { site } from "@/site";
import { LandingEffects } from "../components/landing/LandingEffects";
import { Nav } from "../components/landing/Nav";
import { Footer } from "../components/landing/Footer";
import { PrintButton } from "../components/landing/PrintButton";
import { FAQ } from "../components/landing/data/faq";
import { MODULE_GROUPS, MODULES, modulesInGroup } from "../components/landing/data/modules";
import { landingSectionHref } from "../components/landing/landingSectionQuery";

export const metadata: Metadata = {
  title: `Product Overview — ${site.name}`,
  description: `Everything ${site.name} does, module by module: academic structure, students and staff, attendance, fees, examinations, transport, hostel and the mobile app.`,
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <>
      <LandingEffects />
      <Nav />
      <main className="product-page">
        <div className="legal-bg" aria-hidden />
        <div className="product-inner">
          <header className="product-header">
            <p className="legal-kicker">Product overview</p>
            <h1 className="legal-title">What {site.name} does, module by module</h1>
            <p className="product-lead">
              {site.name} runs a school from admission to exam results: {MODULES.length} modules for
              one school or a trust of many campuses, with boards, mediums and streams as settings
              and a mobile app for teachers and families.
            </p>
            <div className="product-actions">
              <Link href={landingSectionHref("cta")} className="btn-main">
                Book a Free Demo <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
              <PrintButton />
            </div>
            <div className="product-jump" role="navigation" aria-label="Jump to a group of modules">
              {MODULE_GROUPS.map((g) => (
                <a key={g.id} href={`#${g.id}`}>
                  {g.title}
                </a>
              ))}
            </div>
          </header>

          {MODULE_GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="product-group">
              <h2>{group.title}</h2>
              <p className="product-group-blurb">{group.blurb}</p>
              {modulesInGroup(group.id).map(
                ({ id, icon: Icon, iconBackground, iconColor, title, summary, points, usedBy, optional }) => (
                  <article key={id} className="product-module">
                    <div className="product-module-head">
                      <div className="fb-icon" style={{ background: iconBackground }}>
                        <Icon size={22} strokeWidth={1.65} color={iconColor} aria-hidden />
                      </div>
                      <div>
                        <h3>{title}</h3>
                        {optional ? <span className="product-optional">Switched on per school</span> : null}
                      </div>
                    </div>
                    <p className="product-summary">{summary}</p>
                    <ul className="product-points">
                      {points.map((p) => (
                        <li key={p}>
                          <Check size={14} strokeWidth={2.5} aria-hidden />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="product-usedby">
                      <strong>Used by:</strong> {usedBy}
                    </p>
                  </article>
                ),
              )}
            </section>
          ))}

          <section className="product-group">
            <h2>Mobile app &amp; languages</h2>
            <p className="product-group-blurb">
              The Android app is going live on Google Play shortly. It covers attendance, schedule,
              the academic calendar, fees, leave and approvals, announcements, hostel and transport
              details, and is available in English, हिन्दी and ગુજરાતી. The admin dashboard runs on
              the web in any browser, in English.
            </p>
          </section>

          <section className="product-group">
            <h2>Security &amp; control</h2>
            <p className="product-group-blurb">
              Access is granted per role and per campus, and every request is checked on the server.
              Each school&apos;s data is kept separate, an audit log records who changed what, and
              published results are revised rather than overwritten. It runs on AWS in Mumbai over
              HTTPS, with the database kept off the public internet.
            </p>
          </section>

          <section className="product-group">
            <h2>Pricing model</h2>
            <p className="product-group-blurb">
              One yearly rate per enrolled student, with every module included and no per-feature
              upsells. SMS and WhatsApp messages, if your school turns them on, are charged by usage.
              We agree the exact price on a short call, based on your school and the modules you
              need.
            </p>
          </section>

          <section className="product-group product-faq">
            <h2>Common questions</h2>
            {FAQ.map(({ q, a }) => (
              <div key={q} className="product-qa">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </section>

          <section className="product-contact">
            <h2>Talk to us</h2>
            <p>
              Book a free 30-minute demo, no commitment and no credit card. You will speak to the
              person who built {site.name}.
            </p>
            <div className="cta-btns">
              <a href={site.phoneHref} className="btn-gold">
                <Phone size={18} strokeWidth={2} aria-hidden />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="btn-ghost-white">
                <Mail size={18} strokeWidth={2} aria-hidden />
                {site.email}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
