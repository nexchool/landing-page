import { Bell, CreditCard, IndianRupee, UserCheck } from "lucide-react";
import { site } from "@/site";
import { ATTENDANCE_BARS, barStyle } from "../data/dashboard";
import { palette } from "../theme";
import { DbNotification } from "./DbNotification";
import { DonutChart } from "./DonutChart";

const ICON_STROKE = 1.75;

export function HeroDashboard() {
  return (
    <div className="dashboard-wrap">
      <div className="float-chip chip-a">
        <UserCheck size={16} strokeWidth={ICON_STROKE} color={palette.jade} aria-hidden />
        <span>1,248 Students Active</span>
      </div>
      <div className="float-chip chip-b" style={{ animationDelay: "1.5s" }}>
        <IndianRupee size={16} strokeWidth={ICON_STROKE} color={palette.gold} aria-hidden />
        <span>₹2.4L Collected Today</span>
      </div>
      <div className="dashboard-card">
        <div className="db-topbar">
          <div className="db-dots">
            <div className="db-dot" style={{ background: "#ff5f57" }} />
            <div className="db-dot" style={{ background: "#febc2e" }} />
            <div className="db-dot" style={{ background: "#28c840" }} />
          </div>
          <div className="db-title">{site.name} — Admin Dashboard</div>
        </div>
        <div className="db-body">
          <div className="mini-stats">
            <div className="ms">
              <div className="ms-val">1,248</div>
              <div className="ms-lbl">Students</div>
              <div className="ms-delta pos">↑ 12 new</div>
            </div>
            <div className="ms">
              <div className="ms-val" style={{ color: palette.jade }}>
                96.4%
              </div>
              <div className="ms-lbl">Attendance</div>
              <div className="ms-delta pos">↑ 2.1%</div>
            </div>
            <div className="ms">
              <div className="ms-val" style={{ color: palette.gold }}>
                ₹2.4L
              </div>
              <div className="ms-lbl">Fee Today</div>
              <div className="ms-delta pos">↑ ₹18K</div>
            </div>
          </div>
          <div className="db-chart-row">
            <div className="db-chart">
              <div className="chart-label">Monthly Attendance %</div>
              <div className="bar-group">
                {ATTENDANCE_BARS.map((seg, i) => (
                  <div key={i} className="b" style={barStyle(seg)} />
                ))}
              </div>
            </div>
            <div className="db-donut">
              <DonutChart />
              <div className="donut-legend">
                <div className="dl">
                  <div className="dl-dot" style={{ background: palette.jade }} />
                  Paid · 68%
                </div>
                <div className="dl">
                  <div className="dl-dot" style={{ background: palette.gold }} />
                  Partial · 21%
                </div>
                <div className="dl">
                  <div className="dl-dot" style={{ background: "#f0f0f0" }} />
                  Due · 11%
                </div>
              </div>
            </div>
          </div>
          <DbNotification
            icon={<Bell size={15} strokeWidth={ICON_STROKE} />}
            iconBackground={palette.jadeLt}
            title="Priya Shah marked absent — SMS sent to parent"
            sub="Class 9B · Just now"
          />
          <DbNotification
            icon={<CreditCard size={15} strokeWidth={ICON_STROKE} />}
            iconBackground={palette.amberBg}
            title="Fee payment received from Arjun Mehta"
            sub="₹12,500 · Term 2 · 2 min ago"
          />
        </div>
      </div>
    </div>
  );
}
