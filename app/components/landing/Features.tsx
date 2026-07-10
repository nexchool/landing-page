import {
  Bell,
  Bus,
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  Smartphone,
  UsersRound,
  Wallet,
} from "lucide-react";
import { palette } from "./theme";
import { FeatureIconBox } from "./ui/FeatureIconBox";
import { SectionHead } from "./ui/SectionHead";

const ICON = 22;
const SW = 1.65;

export function Features() {
  return (
    <section className="features" id="features">
      <SectionHead
        kicker="Platform Capabilities"
        title="Everything Your School Needs"
        sub="Every module built around real school workflows — no technical knowledge required."
      />
      <div className="feat-bento">
        <div className="fb c8 hero-feat reveal">
          <FeatureIconBox background="rgba(201,168,76,.15)">
            <ClipboardCheck size={ICON} strokeWidth={SW} color={palette.gold} aria-hidden />
          </FeatureIconBox>
          <h3>Attendance, Done in Minutes</h3>
          <p>
            Mark attendance class-by-class or view it student-by-student. A calendar view and full
            history show class-wise trends at a glance, and absence notifications reach parents the
            moment a child is marked absent — every record synced live to the mobile app.
          </p>
          <div className="pill-strip">
            <span className="pill">Class-wise</span>
            <span className="pill">Calendar View</span>
            <span className="pill">Absence Alerts</span>
            <span className="pill">Full History</span>
          </div>
        </div>

        <div className="fb c4 reveal delay1">
          <FeatureIconBox background={palette.jadeLt}>
            <Wallet size={ICON} strokeWidth={SW} color={palette.jade} aria-hidden />
          </FeatureIconBox>
          <h3>Fees & Finance</h3>
          <p>
            Build fee structures, raise student invoices, record payments, and generate instant PDF
            receipts — paperless, with defaulters visible at a glance.
          </p>
          <div className="mini-screen">
            <div className="ms-row">
              <div className="ms-bar" style={{ width: "60%", background: palette.gold }} />
              <div className="ms-badge" style={{ background: palette.jadeLt, color: palette.jade }}>
                Paid
              </div>
            </div>
            <div className="ms-row">
              <div className="ms-bar" style={{ width: "35%", background: "#e2e8f0" }} />
              <div
                className="ms-badge"
                style={{ background: palette.amberBg, color: "#92400e" }}
              >
                Due
              </div>
            </div>
            <div className="ms-row">
              <div className="ms-bar" style={{ width: "80%", background: palette.gold }} />
              <div className="ms-badge" style={{ background: palette.jadeLt, color: palette.jade }}>
                Paid
              </div>
            </div>
          </div>
        </div>

        <div className="fb c4 reveal">
          <FeatureIconBox background={palette.pinkBg}>
            <GraduationCap size={ICON} strokeWidth={SW} color={palette.rose} aria-hidden />
          </FeatureIconBox>
          <h3>Student Records</h3>
          <p>
            One profile per student — class assignment, document uploads, bulk import, and one-click
            promotions at year-end.
          </p>
        </div>

        <div className="fb c4 reveal delay1">
          <FeatureIconBox background={palette.violetBg}>
            <Smartphone size={ICON} strokeWidth={SW} color="#6366f1" aria-hidden />
          </FeatureIconBox>
          <h3>Mobile App</h3>
          <p>
            An iOS & Android app for teachers and students — live attendance, daily schedule, fee
            status, and school notifications in one place.
          </p>
        </div>

        <div className="fb c4 reveal delay2">
          <FeatureIconBox background={palette.amberBg}>
            <UsersRound size={ICON} strokeWidth={SW} color="#92400e" aria-hidden />
          </FeatureIconBox>
          <h3>Teachers & Staff</h3>
          <p>
            Manage teacher records and subject assignments, approve leaves, and track availability
            and workload — all from one panel.
          </p>
        </div>

        <div className="fb c6 reveal">
          <FeatureIconBox background={palette.blueBg}>
            <CalendarDays size={ICON} strokeWidth={SW} color="#2563eb" aria-hidden />
          </FeatureIconBox>
          <h3>Timetable & Schedule</h3>
          <p>
            Build a weekly grid of class × day × period × subject × teacher with automatic conflict
            detection. Everyone opens the app to today&apos;s schedule, ready to go.
          </p>
        </div>

        <div className="fb c6 reveal delay1">
          <div className="fb-icon fb-icon--pair" style={{ background: palette.mintBg }}>
            <Bus size={19} strokeWidth={SW} color={palette.jade} aria-hidden />
            <Bell size={19} strokeWidth={SW} color={palette.navy} aria-hidden />
          </div>
          <h3>Transport & Notifications</h3>
          <p>
            Manage buses, routes, stops, drivers, and student enrollments with per-route fee plans.
            Real-time in-app and push notifications keep parents and staff informed instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
