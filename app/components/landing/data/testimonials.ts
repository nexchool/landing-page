import type { CSSProperties } from "react";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarFg?: string;
  size: "featured" | "compact";
  revealClass?: string;
  style?: CSSProperties;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rajesh",
    quote:
      "Nexchool transformed how we manage 1,200 students. Fee collection that took our staff 3 days every month now takes 20 minutes. Parents are happier, staff is less stressed, and I finally have real-time data to make decisions.",
    name: "Rajesh Verma",
    role: "Principal · Sunrise Public School, Delhi",
    initials: "RV",
    avatarBg: "#1a3c6e",
    size: "featured",
  },
  {
    id: "sunita",
    quote:
      "Parents love the app. They see attendance and results before I even finish the day. The SMS alerts have reduced parent calls by 70%.",
    name: "Sunita Patel",
    role: "Admin Head · Modern Academy, Mumbai",
    initials: "SP",
    avatarBg: "#1a7a5e",
    size: "compact",
    revealClass: "delay1",
    style: { marginBottom: "1.25rem" },
  },
  {
    id: "arvind",
    quote:
      "Setup was done same day. The support team is unbelievably patient and responsive. Best investment we made this year.",
    name: "Arvind Kumar",
    role: "Director · Future Stars Academy, Ahmedabad",
    initials: "AK",
    avatarBg: "#c9a84c",
    avatarFg: "#1a1a00",
    size: "compact",
    revealClass: "delay2",
  },
];
