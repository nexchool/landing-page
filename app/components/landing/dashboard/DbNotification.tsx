import type { ReactNode } from "react";

type DbNotificationProps = {
  icon: ReactNode;
  iconBackground: string;
  title: string;
  sub: string;
};

export function DbNotification({ icon, iconBackground, title, sub }: DbNotificationProps) {
  return (
    <div className="db-notif">
      <div
        className="notif-icon"
        style={{
          background: iconBackground,
          color: "#0b0f1a",
        }}
      >
        {icon}
      </div>
      <div className="notif-text">
        <div className="notif-title">{title}</div>
        <div className="notif-sub">{sub}</div>
      </div>
    </div>
  );
}
