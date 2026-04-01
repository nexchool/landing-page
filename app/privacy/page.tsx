import type { Metadata } from "next";
import { LandingEffects } from "../components/landing/LandingEffects";
import { Nav } from "../components/landing/Nav";
import { Footer } from "../components/landing/Footer";
import { site } from "@/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses, discloses, and safeguards your information when you use our School ERP platform.`,
};

export default function PrivacyPage() {
  return (
    <>
      <LandingEffects />
      <Nav />
      <main className="legal-page">
        <div className="legal-bg" aria-hidden />
        <article className="legal-inner legal-prose">
          <header className="legal-header">
            <p className="legal-kicker">Legal</p>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-updated">Last updated: April 1, 2026</p>
          </header>

          <p>
            Welcome to {site.name} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you use our School ERP
            platform, including web applications, mobile applications, and admin panel (collectively, the
            &ldquo;Service&rdquo;).
          </p>
          <p>By using {site.name}, you agree to the terms of this Privacy Policy.</p>

          <section className="legal-section" id="information-we-collect">
            <h2>1. Information We Collect</h2>
            <p>We collect different types of information depending on how you interact with the platform.</p>

            <h3>1.1 Personal Information</h3>
            <p>When you register or use the Service, we may collect:</p>
            <ul className="legal-list">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Profile Picture</li>
              <li>Address</li>
              <li>Date of Birth</li>
              <li>Gender</li>
            </ul>
            <p>For students and guardians:</p>
            <ul className="legal-list">
              <li>Admission Number</li>
              <li>Roll Number</li>
              <li>Guardian Name &amp; Contact Details</li>
            </ul>
            <p>For teachers:</p>
            <ul className="legal-list">
              <li>Employee ID</li>
              <li>Department, Qualification, Experience</li>
            </ul>
            <h3>1.2 Account &amp; Authentication Data</h3>
            <ul className="legal-list">
              <li>Email &amp; password (securely hashed)</li>
              <li>Login sessions &amp; refresh tokens</li>
              <li>Device info, IP address, browser details</li>
              <li>Login timestamps</li>
            </ul>
            <h3>1.3 Academic &amp; Operational Data</h3>
            <ul className="legal-list">
              <li>Class assignments</li>
              <li>Attendance records (present/absent/late)</li>
              <li>Teacher-class relationships</li>
              <li>Academic year data</li>
            </ul>
            <h3>1.4 Usage Data</h3>
            <ul className="legal-list">
              <li>Pages visited</li>
              <li>Features used</li>
              <li>Errors and logs</li>
              <li>Interaction patterns</li>
            </ul>

            <h3>1.5 Communication Data</h3>
            <ul className="legal-list">
              <li>Emails sent via system (e.g., credentials, password reset)</li>
              <li>Support interactions</li>
            </ul>
          </section>

          <section className="legal-section" id="how-we-use">
            <h2>2. How We Use Your Information</h2>
            <p>We use collected data to:</p>

            <h3>2.1 Provide Core Services</h3>
            <ul className="legal-list">
              <li>User authentication and login</li>
              <li>Role-based access control (Admin, Teacher, Student, Parent)</li>
              <li>Managing students, teachers, and classes</li>
              <li>Attendance tracking</li>
            </ul>
            <h3>2.2 Improve Platform</h3>
            <ul className="legal-list">
              <li>Analyze usage trends</li>
              <li>Fix bugs and errors</li>
              <li>Improve UI/UX</li>
            </ul>

            <h3>2.3 Communication</h3>
            <ul className="legal-list">
              <li>Send login credentials</li>
              <li>Password reset emails</li>
              <li>Important updates</li>
            </ul>

            <h3>2.4 Security &amp; Compliance</h3>
            <ul className="legal-list">
              <li>Detect fraud or misuse</li>
              <li>Enforce permissions and roles</li>
              <li>Maintain audit logs</li>
            </ul>
          </section>

          <section className="legal-section" id="rbac">
            <h2>3. Role-Based Access &amp; Data Visibility</h2>
            <p>
              {site.name} uses Role-Based Access Control (RBAC): Admin → full access; Teacher → access to assigned
              classes/students; Student → access to own data; Parent → limited access.
            </p>
            <p>We ensure users only access data they are authorized to view.</p>
          </section>

          <section className="legal-section" id="sharing">
            <h2>4. Data Sharing &amp; Disclosure</h2>
            <p>We do NOT sell your data.</p>
            <p>We may share data only in the following cases:</p>

            <h3>4.1 Within Organization</h3>
            <ul className="legal-list">
              <li>School administrators</li>
              <li>Teachers</li>
              <li>Authorized staff</li>
            </ul>

            <h3>4.2 Service Providers</h3>
            <ul className="legal-list">
              <li>Cloud hosting (AWS infrastructure)</li>
              <li>Email services</li>
            </ul>

            <h3>4.3 Legal Requirements</h3>
            <p>If required by law, regulation, or legal process.</p>

            <h3>4.4 Business Transfers</h3>
            <p>In case of merger, acquisition, or restructuring.</p>
          </section>

          <section className="legal-section" id="security">
            <h2>5. Data Storage &amp; Security</h2>
            <p>We implement strong security practices:</p>
            <ul className="legal-list">
              <li>Encrypted communication (HTTPS)</li>
              <li>Password hashing</li>
              <li>Token-based authentication</li>
              <li>Role-based access restrictions</li>
              <li>Secure database storage</li>
            </ul>
            <p>However, no system is 100% secure.</p>
          </section>

          <section className="legal-section" id="retention">
            <h2>6. Data Retention</h2>
            <p>We retain data:</p>
            <ul className="legal-list">
              <li>As long as the account is active</li>
              <li>As required for school operations</li>
              <li>As required by legal obligations</li>
            </ul>
            <p>Data may be deleted or anonymized upon request, subject to constraints.</p>
          </section>

          <section className="legal-section" id="rights">
            <h2>7. Your Rights</h2>
            <p>Depending on your jurisdiction, you have rights to:</p>
            <ul className="legal-list">
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Restrict processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p>To exercise rights, contact us.</p>
          </section>

          <section className="legal-section" id="children">
            <h2>8. Children&apos;s Privacy</h2>
            <p>
              {site.name} is designed for schools and may collect data of students (including minors). Data is
              collected under school authority; parents/guardians are responsible for consent. We do not knowingly
              collect data outside institutional usage.
            </p>
          </section>

          <section className="legal-section" id="cookies">
            <h2>9. Cookies &amp; Tracking</h2>
            <p>We may use cookies and similar technologies for:</p>
            <ul className="legal-list">
              <li>Authentication sessions</li>
              <li>User preferences</li>
              <li>Analytics</li>
            </ul>
            <p>You can disable cookies via browser settings.</p>
          </section>

          <section className="legal-section" id="third-party">
            <h2>10. Third-Party Services</h2>
            <p>We may integrate with:</p>
            <ul className="legal-list">
              <li>Cloud hosting providers</li>
              <li>Email delivery services</li>
              <li>Analytics tools</li>
            </ul>
            <p>We are not responsible for third-party privacy practices.</p>
          </section>

          <section className="legal-section" id="international">
            <h2>11. International Data Transfers</h2>
            <p>
              Data may be stored and processed in servers located in India or other regions depending on
              infrastructure. We ensure appropriate safeguards are in place.
            </p>
          </section>

          <section className="legal-section" id="breach">
            <h2>12. Data Breach Policy</h2>
            <p>In case of a data breach:</p>
            <ul className="legal-list">
              <li>We will investigate immediately</li>
              <li>Notify affected users if required</li>
              <li>Take corrective actions</li>
            </ul>
          </section>

          <section className="legal-section" id="changes">
            <h2>13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page. Continued use means
              acceptance.
            </p>
          </section>

          <section className="legal-section" id="contact">
            <h2>14. Contact Us</h2>
            <p>For any questions or concerns:</p>
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

          <section className="legal-section" id="compliance">
            <h2>15. Legal Compliance</h2>
            <p>This Privacy Policy is designed to comply with:</p>
            <ul className="legal-list">
              <li>Information Technology Act, 2000 (India)</li>
              <li>GDPR principles (where applicable)</li>
              <li>General data protection best practices</li>
            </ul>
          </section>

          <section className="legal-section" id="consent">
            <h2>16. Consent</h2>
            <p>By using {site.name}, you:</p>
            <ul className="legal-list">
              <li>Agree to this Privacy Policy</li>
              <li>Consent to data collection and usage as described</li>
            </ul>
          </section>

          <section className="legal-section" id="scope">
            <h2>17. Platform Scope Clarification</h2>
            <p>{site.name} includes:</p>
            <ul className="legal-list">
              <li>Web Admin Panel (tenant &amp; platform management)</li>
              <li>Mobile Application (students, teachers, parents)</li>
              <li>Backend APIs and services</li>
            </ul>
          </section>

          <p className="legal-closing">
            We are committed to protecting your data and maintaining transparency while providing a powerful school
            management platform.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
