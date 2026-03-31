export type PricingPlan = {
  id: string;
  name: string;
  priceDisplay: "amount" | "custom";
  amount?: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  variant: "default" | "featured" | "enterprise";
  revealClass?: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    priceDisplay: "amount",
    amount: "2,999",
    cadence: "/ month · up to 300 students",
    description:
      "Perfect for small schools beginning their digital journey with essential tools.",
    features: [
      "Attendance Management",
      "Fee Collection & Receipts",
      "Basic Report Cards",
      "Parent SMS Alerts (500/mo)",
      "1 Admin Login",
      "Email Support",
    ],
    cta: "Get Started",
    variant: "default",
  },
  {
    id: "professional",
    name: "Professional",
    priceDisplay: "amount",
    amount: "5,999",
    cadence: "/ month · up to 1,000 students",
    description:
      "The complete digital school — everything you need to run your institution smoothly.",
    features: [
      "Everything in Starter",
      "Parent & Teacher App",
      "Exam Portal & Results",
      "Staff, HR & Payroll",
      "Timetable Builder",
      "Unlimited SMS Alerts",
      "5 Admin Logins",
      "Priority Phone Support",
    ],
    cta: "Get Started",
    variant: "featured",
    revealClass: "delay1",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceDisplay: "custom",
    cadence: "1,000+ students · custom setup",
    description:
      "Tailored for large schools, chains, and multi-branch institutions needing deep integration.",
    features: [
      "Everything in Professional",
      "Custom School Branding",
      "Multi-Branch Dashboard",
      "ERP / Tally Integration",
      "Unlimited Admin Logins",
      "Dedicated Account Manager",
    ],
    cta: "Talk to Sales",
    variant: "enterprise",
    revealClass: "delay2",
  },
];
