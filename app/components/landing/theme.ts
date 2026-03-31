/** Brand palette — mirrors CSS variables in globals.css for inline/icon use */
export const palette = {
  ink: "#0b0f1a",
  ink2: "#1e2535",
  paper: "#faf9f6",
  cream: "#f3f0e8",
  gold: "#c9a84c",
  goldLt: "#f0d98a",
  jade: "#1a7a5e",
  jadeLt: "#d0ede6",
  rose: "#c44569",
  navy: "#1a3c6e",
  muted: "#6b7280",
  border: "#e5e0d5",
  amberBg: "#fef3c7",
  pinkBg: "#fce7f3",
  violetBg: "#ede9fe",
  blueBg: "#dbeafe",
  mintBg: "#ecfdf5",
} as const;

export type PaletteKey = keyof typeof palette;
