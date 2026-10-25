import { ImageResponse } from "next/og";
import { site } from "@/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0f1a",
          color: "#faf9f6",
        }}
      >
        <div style={{ fontSize: 34, color: "#c9a84c", letterSpacing: 2, textTransform: "uppercase" }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 112, fontWeight: 700, marginTop: 24 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 28, color: "rgba(250,249,246,0.7)", maxWidth: 900 }}>
          Admission to exam results, for one school or a trust of many campuses.
        </div>
      </div>
    ),
    { ...size },
  );
}
