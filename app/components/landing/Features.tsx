import {
  BarChart3,
  BookOpen,
  Bus,
  CalendarDays,
  ClipboardCheck,
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
          <h3>Smart Attendance System</h3>
          <p>
            Mark attendance in seconds via manual entry, QR code, or biometric integration.
            Real-time dashboards show class-wise and student-wise trends. Automated SMS alerts reach
            parents the moment their child is marked absent.
          </p>
          <div className="pill-strip">
            <span className="pill">QR Code</span>
            <span className="pill">Biometric</span>
            <span className="pill">Parent SMS</span>
            <span className="pill">Reports</span>
          </div>
        </div>

        <div className="fb c4 reveal delay1">
          <FeatureIconBox background={palette.jadeLt}>
            <Wallet size={ICON} strokeWidth={SW} color={palette.jade} aria-hidden />
          </FeatureIconBox>
          <h3>Fee Management</h3>
          <p>
            Online & offline payment tracking, automatic reminders, defaulter lists, and instant
            receipts — all paperless.
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
            <BarChart3 size={ICON} strokeWidth={SW} color={palette.rose} aria-hidden />
          </FeatureIconBox>
          <h3>Exam & Results</h3>
          <p>
            Create exams, enter marks, and auto-generate beautiful report cards. Share with parents
            instantly via app or PDF.
          </p>
        </div>

        <div className="fb c4 reveal delay1">
          <FeatureIconBox background={palette.violetBg}>
            <Smartphone size={ICON} strokeWidth={SW} color="#6366f1" aria-hidden />
          </FeatureIconBox>
          <h3>Parent App</h3>
          <p>
            Dedicated parent app showing live attendance, results, fee status, timetable, and
            school notifications.
          </p>
        </div>

        <div className="fb c4 reveal delay2">
          <FeatureIconBox background={palette.amberBg}>
            <UsersRound size={ICON} strokeWidth={SW} color="#92400e" aria-hidden />
          </FeatureIconBox>
          <h3>Staff & Payroll</h3>
          <p>
            Manage staff records, salaries, leave approvals, and monthly payroll — all in one unified
            HR panel.
          </p>
        </div>

        <div className="fb c6 reveal">
          <FeatureIconBox background={palette.blueBg}>
            <CalendarDays size={ICON} strokeWidth={SW} color="#2563eb" aria-hidden />
          </FeatureIconBox>
          <h3>Timetable Builder</h3>
          <p>
            Drag-and-drop timetable creation with auto conflict detection. Share with teachers and
            students in one click. Works for every class and section simultaneously.
          </p>
        </div>

        <div className="fb c6 reveal delay1">
          <div className="fb-icon fb-icon--pair" style={{ background: palette.mintBg }}>
            <Bus size={19} strokeWidth={SW} color={palette.jade} aria-hidden />
            <BookOpen size={19} strokeWidth={SW} color={palette.navy} aria-hidden />
          </div>
          <h3>Transport & Library</h3>
          <p>
            GPS-based bus tracking with route management. Library issue/return tracking with overdue
            alerts. Both modules included in all plans.
          </p>
        </div>
      </div>
    </section>
  );
}
