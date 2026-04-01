import type { Metadata } from "next";
import Link from "next/link";
import { LandingEffects } from "../components/landing/LandingEffects";
import { Nav } from "../components/landing/Nav";
import { Footer } from "../components/landing/Footer";
import { site } from "@/site";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${site.name}`,
  description: `Terms governing access to and use of the ${site.name} school management platform, applications, and related services.`,
};

export default function TermsPage() {
  return (
    <>
      <LandingEffects />
      <Nav />
      <main className="legal-page">
        <div className="legal-bg" aria-hidden />
        <article className="legal-inner legal-prose">
          <header className="legal-header">
            <p className="legal-kicker">Legal</p>
            <h1 className="legal-title">Terms &amp; Conditions</h1>
            <p className="legal-updated">Last updated: April 1, 2026</p>
          </header>

          <p>
            Welcome to <strong>{site.name}</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
            &ldquo;us&rdquo;). These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the{" "}
            {site.name} platform, including our website, mobile applications, web dashboards, admin panel, APIs, and
            related services (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p>
            By accessing or using {site.name}, you agree to be bound by these Terms. If you do not agree, you must not
            use the Service.
          </p>

          <section className="legal-section" id="definitions">
            <h2>1. Definitions</h2>
            <p>For the purpose of these Terms:</p>
            <ul className="legal-list">
              <li>
                <strong>&ldquo;Platform&rdquo;</strong> means the {site.name} software system, including web, mobile,
                backend APIs, and administrative dashboards.
              </li>
              <li>
                <strong>&ldquo;Institution&rdquo; / &ldquo;School&rdquo;</strong> means the educational organization
                subscribing to or using {site.name}.
              </li>
              <li>
                <strong>&ldquo;User&rdquo;</strong> means any person accessing the Service, including administrators,
                teachers, students, parents, or authorized staff.
              </li>
              <li>
                <strong>&ldquo;Account&rdquo;</strong> means a registered login or access profile created on the
                Platform.
              </li>
              <li>
                <strong>&ldquo;Content&rdquo;</strong> means any data, records, text, files, attendance entries,
                academic records, communications, or other information uploaded or managed through the Platform.
              </li>
            </ul>
          </section>

          <section className="legal-section" id="eligibility">
            <h2>2. Eligibility &amp; Authority</h2>
            <p>By using the Service, you represent and warrant that:</p>
            <ul className="legal-list">
              <li>You are legally capable of entering into these Terms, or</li>
              <li>
                You are using the Platform under the authority of a school, institution, parent/guardian, or authorized
                representative.
              </li>
            </ul>
            <p>
              If you are using {site.name} on behalf of a school or organization, you confirm that you have authority
              to bind that institution to these Terms.
            </p>
          </section>

          <section className="legal-section" id="scope-of-service">
            <h2>3. Scope of Service</h2>
            <p>{site.name} provides a school management and education operations platform that may include:</p>
            <ul className="legal-list">
              <li>User authentication and login</li>
              <li>Role-based access control</li>
              <li>Student management</li>
              <li>Teacher management</li>
              <li>Class management</li>
              <li>Attendance tracking</li>
              <li>Academic dashboards and related workflows</li>
              <li>Administrative controls</li>
              <li>Tenant and platform management features</li>
            </ul>
            <p>
              The actual features available may vary depending on subscription, account role, plan, development stage, or
              institution configuration. Some modules may be under development, beta, limited release, or not yet
              available.
            </p>
          </section>

          <section className="legal-section" id="account-security">
            <h2>4. Account Registration &amp; Security</h2>
            <h3>4.1 Account Information</h3>
            <p>
              To use certain features, you may need to create or receive an account. You agree to provide accurate,
              current, and complete information.
            </p>
            <h3>4.2 Credentials</h3>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials and for all activity
              under your account.
            </p>
            <h3>4.3 Unauthorized Access</h3>
            <p>You must immediately notify us if you suspect:</p>
            <ul className="legal-list">
              <li>Unauthorized access</li>
              <li>Credential theft</li>
              <li>Security breach</li>
              <li>Misuse of your account</li>
            </ul>
            <p>We are not responsible for losses caused by your failure to secure your credentials.</p>
          </section>

          <section className="legal-section" id="roles">
            <h2>5. User Roles &amp; Access Restrictions</h2>
            <p>{site.name} may provide access based on user roles such as:</p>
            <ul className="legal-list">
              <li>Super Admin</li>
              <li>School Admin</li>
              <li>Teacher</li>
              <li>Student</li>
              <li>Parent</li>
              <li>Staff or other authorized roles</li>
            </ul>
            <p>
              Access to features and data is governed by permissions and role-based controls. Users may only access
              information that they are authorized to access.
            </p>
            <p>You must not:</p>
            <ul className="legal-list">
              <li>Attempt to bypass access controls</li>
              <li>View or modify data without authorization</li>
              <li>Escalate privileges</li>
              <li>Share credentials across unauthorized users</li>
            </ul>
          </section>

          <section className="legal-section" id="acceptable-use">
            <h2>6. Acceptable Use</h2>
            <p>
              You agree to use {site.name} only for lawful and authorized educational, administrative, and institutional
              purposes.
            </p>
            <p>You must not:</p>
            <ul className="legal-list">
              <li>Use the Platform for unlawful, fraudulent, or deceptive purposes</li>
              <li>Upload false, harmful, defamatory, abusive, or infringing content</li>
              <li>Attempt to hack, disrupt, overload, reverse engineer, or exploit the Service</li>
              <li>Introduce malware, viruses, bots, scripts, or harmful code</li>
              <li>Interfere with platform stability or other users</li>
              <li>Use the Service to spam or send unauthorized communications</li>
              <li>Use the Service in violation of any applicable law or school policy</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts engaged in misuse.</p>
          </section>

          <section className="legal-section" id="institution">
            <h2>7. Institution Responsibilities</h2>
            <p>If you are a school, institution, or administrator using {site.name}, you are responsible for:</p>
            <ul className="legal-list">
              <li>Ensuring lawful use of student, teacher, parent, and staff data</li>
              <li>Obtaining all required permissions, notices, and consents</li>
              <li>Managing internal access and permissions responsibly</li>
              <li>Verifying the correctness of entered records</li>
              <li>Maintaining compliance with applicable education, privacy, and data laws</li>
              <li>Managing your users, staff, and operational workflows appropriately</li>
            </ul>
            <p>
              {site.name} acts as a software platform provider and does not independently verify the correctness of
              institutional records entered by users.
            </p>
          </section>

          <section className="legal-section" id="minors">
            <h2>8. Student &amp; Minor Data</h2>
            <p>{site.name} may be used to manage information related to students, including minors.</p>
            <p>
              By using the Platform for students, the institution or authorized parent/guardian confirms that they
              have the legal authority to provide and manage such data within the Service.
            </p>
            <p>The institution is responsible for ensuring that:</p>
            <ul className="legal-list">
              <li>Student records are entered lawfully</li>
              <li>Parent/guardian permissions are handled appropriately</li>
              <li>Access to minor data is restricted to authorized persons</li>
            </ul>
          </section>

          <section className="legal-section" id="content-ownership">
            <h2>9. User Content &amp; Data Ownership</h2>
            <h3>9.1 Ownership</h3>
            <p>You or your institution retain ownership of the data and content you submit to {site.name}.</p>
            <h3>9.2 Platform Rights</h3>
            <p>
              You grant {site.name} a limited, non-exclusive, revocable right to host, process, store, transmit,
              display, and use such data solely for the purpose of operating, maintaining, securing, and improving the
              Service.
            </p>
            <h3>9.3 Responsibility for Content</h3>
            <p>
              You are solely responsible for the accuracy, legality, and appropriateness of all content uploaded,
              entered, or managed through the Platform.
            </p>
          </section>

          <section className="legal-section" id="data-accuracy">
            <h2>10. Data Accuracy &amp; Educational Records</h2>
            <p>
              {site.name} provides a system for storing and managing school records, but we do not guarantee that all
              information entered by users will always be accurate, complete, or up to date.
            </p>
            <p>Institutions and authorized users are responsible for reviewing and validating:</p>
            <ul className="legal-list">
              <li>Student records</li>
              <li>Teacher records</li>
              <li>Attendance data</li>
              <li>Class assignments</li>
              <li>Contact details</li>
              <li>Any operational or academic entries</li>
            </ul>
          </section>

          <section className="legal-section" id="communications">
            <h2>11. Communications</h2>
            <p>By using {site.name}, you agree that we may send service-related communications, including:</p>
            <ul className="legal-list">
              <li>Login or account-related emails</li>
              <li>Verification emails</li>
              <li>Password reset instructions</li>
              <li>Administrative notices</li>
              <li>Security alerts</li>
              <li>Service updates</li>
            </ul>
            <p>
              These communications are necessary for operation and security and may not be opted out of while using the
              Service.
            </p>
          </section>

          <section className="legal-section" id="billing">
            <h2>12. Subscription, Pricing &amp; Billing</h2>
            <p>If {site.name} is offered under a paid plan or subscription:</p>
            <ul className="legal-list">
              <li>
                Pricing, billing cycles, plan limits, and commercial terms may be communicated separately through
                proposals, invoices, subscription agreements, or plan documentation.
              </li>
              <li>Failure to make payment may result in restricted access, suspension, or termination.</li>
              <li>
                We reserve the right to update pricing, plans, features, and packaging at our discretion, subject to
                applicable notice requirements.
              </li>
            </ul>
            <p>
              For enterprise or institution-level customers, additional contractual terms may apply and shall prevail
              where expressly stated.
            </p>
          </section>

          <section className="legal-section" id="beta">
            <h2>13. Trial, Beta &amp; Early Features</h2>
            <p>Certain features, modules, dashboards, workflows, or integrations may be offered as:</p>
            <ul className="legal-list">
              <li>Beta</li>
              <li>Preview</li>
              <li>Trial</li>
              <li>Experimental</li>
              <li>Limited release</li>
            </ul>
            <p>
              Such features may change, break, or be discontinued at any time without notice. They may not be fully
              stable or complete.
            </p>
            <p>You use such features at your own discretion.</p>
          </section>

          <section className="legal-section" id="availability">
            <h2>14. Service Availability</h2>
            <p>
              We aim to keep {site.name} available and reliable, but we do not guarantee uninterrupted or error-free
              service.
            </p>
            <p>The Service may be temporarily unavailable due to:</p>
            <ul className="legal-list">
              <li>Maintenance</li>
              <li>Upgrades</li>
              <li>Security actions</li>
              <li>Internet/network failures</li>
              <li>Hosting or third-party outages</li>
              <li>Technical faults</li>
            </ul>
            <p>We reserve the right to modify, suspend, or discontinue parts of the Service at any time.</p>
          </section>

          <section className="legal-section" id="third-party">
            <h2>15. Third-Party Services</h2>
            <p>{site.name} may rely on or integrate with third-party providers, including but not limited to:</p>
            <ul className="legal-list">
              <li>Cloud hosting providers</li>
              <li>Email providers</li>
              <li>Domain and infrastructure services</li>
              <li>Analytics or notification systems</li>
            </ul>
            <p>We are not responsible for third-party systems, outages, or policies beyond our reasonable control.</p>
          </section>

          <section className="legal-section" id="ip">
            <h2>16. Intellectual Property</h2>
            <p>All rights, title, and interest in {site.name}, including but not limited to:</p>
            <ul className="legal-list">
              <li>Software</li>
              <li>Code</li>
              <li>UI/UX</li>
              <li>Branding</li>
              <li>Logos</li>
              <li>Designs</li>
              <li>Workflows</li>
              <li>Documentation</li>
              <li>Features and architecture</li>
            </ul>
            <p>
              are owned by or licensed to {site.name} and are protected by applicable intellectual property laws.
            </p>
            <p>Except as expressly permitted, you may not:</p>
            <ul className="legal-list">
              <li>Copy</li>
              <li>Resell</li>
              <li>Reproduce</li>
              <li>Modify</li>
              <li>Reverse engineer</li>
              <li>Decompile</li>
              <li>Distribute</li>
              <li>Create derivative works from the Platform</li>
            </ul>
          </section>

          <section className="legal-section" id="feedback">
            <h2>17. Feedback</h2>
            <p>
              If you submit suggestions, ideas, feedback, improvements, or feature requests, you agree that we may use
              them without restriction, obligation, or compensation.
            </p>
          </section>

          <section className="legal-section" id="privacy-ref">
            <h2>18. Privacy</h2>
            <p>
              Your use of {site.name} is also governed by our{" "}
              <Link href="/privacy">Privacy Policy</Link>, which explains how personal and institutional data is
              collected, used, and protected.
            </p>
            <p>You should read the Privacy Policy together with these Terms.</p>
          </section>

          <section className="legal-section" id="termination">
            <h2>19. Suspension &amp; Termination</h2>
            <p>We may suspend, restrict, or terminate your access to {site.name} at any time, with or without notice, if:</p>
            <ul className="legal-list">
              <li>You violate these Terms</li>
              <li>Your use creates legal, security, or operational risk</li>
              <li>Required payments are not made</li>
              <li>Your institution requests account deactivation</li>
              <li>We are required to do so by law</li>
            </ul>
            <p>Upon termination:</p>
            <ul className="legal-list">
              <li>Your access may be revoked</li>
              <li>Some or all stored data may become inaccessible, subject to retention obligations</li>
              <li>Certain legal provisions of these Terms will survive termination</li>
            </ul>
          </section>

          <section className="legal-section" id="disclaimer">
            <h2>20. Disclaimer of Warranties</h2>
            <p>
              To the maximum extent permitted by law, {site.name} is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis.
            </p>
            <p>We do not warrant that:</p>
            <ul className="legal-list">
              <li>The Service will always be uninterrupted, secure, or error-free</li>
              <li>The Platform will meet every institutional requirement</li>
              <li>All defects will be corrected immediately</li>
              <li>Data entered by users will always be accurate or complete</li>
            </ul>
            <p>Use of the Platform is at your own risk.</p>
          </section>

          <section className="legal-section" id="liability">
            <h2>21. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {site.name}, its founders, operators, affiliates, employees,
              contractors, and partners shall not be liable for any indirect, incidental, special, consequential,
              exemplary, or punitive damages, including but not limited to:
            </p>
            <ul className="legal-list">
              <li>Loss of data</li>
              <li>Loss of revenue</li>
              <li>Business interruption</li>
              <li>Reputational damage</li>
              <li>Unauthorized access caused by user negligence</li>
              <li>Errors in institutional records entered by users</li>
            </ul>
            <p>
              Our total liability for any claim relating to the Service shall not exceed the amount actually paid by you
              or your institution to {site.name} in the preceding <strong>12 months</strong>, or{" "}
              <strong>INR 10,000</strong>, whichever is lower, unless otherwise required by law.
            </p>
          </section>

          <section className="legal-section" id="indemnification">
            <h2>22. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless {site.name} and its affiliates, officers, employees,
              contractors, and representatives from and against any claims, damages, liabilities, losses, costs, or
              expenses arising from:
            </p>
            <ul className="legal-list">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of applicable law</li>
              <li>Data or content submitted by you or your institution</li>
              <li>Claims related to unauthorized or unlawful handling of student, teacher, or institutional data</li>
            </ul>
          </section>

          <section className="legal-section" id="force-majeure">
            <h2>23. Force Majeure</h2>
            <p>
              We shall not be liable for any failure or delay caused by events beyond our reasonable control, including
              but not limited to:
            </p>
            <ul className="legal-list">
              <li>Natural disasters</li>
              <li>Government actions</li>
              <li>Internet or telecom failures</li>
              <li>Cyberattacks</li>
              <li>Power failures</li>
              <li>Labor disputes</li>
              <li>Hosting outages</li>
            </ul>
          </section>

          <section className="legal-section" id="law">
            <h2>24. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>.
            </p>
            <p>
              Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive
              jurisdiction of the courts located in <strong>Gujarat, India</strong>, unless otherwise required by
              applicable law.
            </p>
          </section>

          <section className="legal-section" id="disputes">
            <h2>25. Dispute Resolution</h2>
            <p>
              Before initiating formal legal proceedings, you agree to first contact us and attempt to resolve the
              dispute in good faith.
            </p>
            <p>We encourage parties to attempt resolution through written communication before litigation.</p>
          </section>

          <section className="legal-section" id="modifications">
            <h2>26. Modifications to Terms</h2>
            <p>We may update these Terms from time to time.</p>
            <p>When we do:</p>
            <ul className="legal-list">
              <li>The updated version will be posted on this page</li>
              <li>The &ldquo;Last Updated&rdquo; date will change</li>
              <li>Continued use of the Service after updates constitutes acceptance of the revised Terms</li>
            </ul>
          </section>

          <section className="legal-section" id="severability">
            <h2>27. Severability</h2>
            <p>
              If any provision of these Terms is found invalid or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </p>
          </section>

          <section className="legal-section" id="waiver">
            <h2>28. Waiver</h2>
            <p>
              Failure to enforce any provision of these Terms shall not constitute a waiver of that provision or any
              other rights.
            </p>
          </section>

          <section className="legal-section" id="entire-agreement">
            <h2>29. Entire Agreement</h2>
            <p>
              These Terms, together with our <Link href="/privacy">Privacy Policy</Link> and any separately agreed
              commercial terms (if applicable), constitute the entire agreement between you and {site.name} regarding use
              of the Service.
            </p>
          </section>

          <section className="legal-section" id="contact">
            <h2>30. Contact Us</h2>
            <p>If you have any questions regarding these Terms &amp; Conditions, you may contact us at:</p>
            <p>
              <strong>{site.name}</strong>
            </p>
            <ul className="legal-list">
              <li>
                Email:{" "}
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </li>
              <li>
                Website:{" "}
                <a href={site.websiteUrl} rel="noopener noreferrer">
                  {site.websiteLabel}
                </a>
              </li>
            </ul>
          </section>

          <p className="legal-closing">
            By using {site.name}, you acknowledge that you have read and understood these Terms &amp; Conditions.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
