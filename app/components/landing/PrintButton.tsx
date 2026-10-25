"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" className="btn-outline print-btn" onClick={() => window.print()}>
      <Printer size={16} strokeWidth={2} aria-hidden />
      Save as PDF
    </button>
  );
}
