import {
  BedDouble,
  Building2,
  Bus,
  CalendarDays,
  CalendarOff,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Contact,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  ShieldCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { palette } from "../theme";

/**
 * Single source for what Nexchool does. The home page shows `summary` + `tags`;
 * the /product page shows `points` and `usedBy`. Keep every claim here true to
 * the shipped product — if a capability is not built, it does not belong here.
 */

export type ModuleGroupId = "academics" | "people" | "daily" | "money" | "exams" | "campus";

export type ProductModule = {
  id: string;
  group: ModuleGroupId;
  icon: LucideIcon;
  iconBackground: string;
  iconColor: string;
  title: string;
  summary: string;
  /** Short chips for the home-page card */
  tags: string[];
  /** Full capability list for the /product page */
  points: string[];
  usedBy: string;
  /** Modules a school can switch off entirely (hidden from every screen) */
  optional?: boolean;
};

export type ModuleGroup = {
  id: ModuleGroupId;
  title: string;
  blurb: string;
};

export const MODULE_GROUPS: ModuleGroup[] = [
  {
    id: "academics",
    title: "Academics & structure",
    blurb: "The shape of your school: campuses, boards, grades, sections, timetable and calendar.",
  },
  {
    id: "people",
    title: "People & access",
    blurb: "Students, teachers, staff, and exactly who is allowed to see and do what.",
  },
  {
    id: "daily",
    title: "Daily operations",
    blurb: "What happens every morning: attendance, leave, announcements and the day's dashboard.",
  },
  {
    id: "money",
    title: "Fees & finance",
    blurb: "From fee structure to receipt, with a clear view of who has paid and who hasn't.",
  },
  {
    id: "exams",
    title: "Examinations",
    blurb: "From scheduling a paper to publishing a result a parent can trust.",
  },
  {
    id: "campus",
    title: "Campus services",
    blurb: "The buses and boarding houses that make a school run beyond the classroom.",
  },
];

export const MODULES: ProductModule[] = [
  {
    id: "academic-structure",
    group: "academics",
    icon: Building2,
    iconBackground: palette.blueBg,
    iconColor: "#2563eb",
    title: "Academic Structure",
    summary:
      "Model your school as it really is: several campuses, more than one board, parallel mediums and streams, all as settings rather than workarounds.",
    tags: ["Multi-campus", "Boards & mediums", "Streams", "Year rollover"],
    points: [
      "Run several campuses from one account, each with its own classes, teachers and students.",
      "Keep different boards side by side, even two boards on the same campus.",
      "Run parallel mediums, such as English and Gujarati sections of the same grade.",
      "Cover pre-primary to Grade 12, including streams for the senior classes.",
      "Maintain programmes, grades, sections, subjects and departments from one place.",
      "Roll the structure forward at year-end instead of rebuilding it every June.",
    ],
    usedBy: "Principal, trust office, academic coordinator",
  },
  {
    id: "timetable",
    group: "academics",
    icon: Clock,
    iconBackground: palette.violetBg,
    iconColor: "#6366f1",
    title: "Timetable & Bell Schedules",
    summary:
      "A weekly grid of class, day, period, subject and teacher, with clashes caught before they reach a classroom.",
    tags: ["Bell schedules", "Clash detection", "Today's schedule"],
    points: [
      "Define the periods of the school day with bell schedules.",
      "Build the weekly grid of class × day × period × subject × teacher.",
      "Automatic conflict detection stops a teacher or a class being booked twice.",
      "Teachers and students open the app to today's schedule, ready to go.",
    ],
    usedBy: "Timetable coordinator, teachers, students",
    optional: true,
  },
  {
    id: "academic-calendar",
    group: "academics",
    icon: CalendarDays,
    iconBackground: palette.amberBg,
    iconColor: "#92400e",
    title: "Academic Calendar & Holidays",
    summary:
      "Terms, events, exam windows and holidays in one calendar that everyone in the school can see.",
    tags: ["Terms", "Events", "Holidays", "PDF export"],
    points: [
      "Plan terms, events, holidays and exam windows for the year.",
      "Import an existing calendar instead of typing it in again.",
      "Print or export the calendar as a PDF for the notice board.",
      "Changes notify the people they affect.",
    ],
    usedBy: "Principal, academic coordinator, everyone (view)",
    optional: true,
  },
  {
    id: "students",
    group: "people",
    icon: GraduationCap,
    iconBackground: palette.pinkBg,
    iconColor: palette.rose,
    title: "Student Management",
    summary:
      "One record per child, from admission to graduation, with the history of every class and every change.",
    tags: ["Admission to graduation", "Bulk import", "Documents", "Promotion"],
    points: [
      "Admit, enrol, promote, move between sections, withdraw, graduate and re-enrol, each as a proper workflow.",
      "A timeline on every student shows what happened and when.",
      "Bulk-import students from a spreadsheet and export lists back out.",
      "Upload and keep documents against each student.",
      "Print sign-in slips so families can log in on day one.",
      "Duplicate-record detection and instant search by name keep the register clean.",
    ],
    usedBy: "Admission desk, class teachers, principal",
  },
  {
    id: "staff",
    group: "people",
    icon: Contact,
    iconBackground: palette.mintBg,
    iconColor: palette.jade,
    title: "Teachers & Staff",
    summary:
      "The full employment lifecycle of everyone who works at the school, and who teaches what.",
    tags: ["Employment lifecycle", "Teaching assignments", "Bulk import"],
    points: [
      "Onboard, appoint, transfer, separate, retire and rejoin staff with a record of each step.",
      "Assign class teachers and subject teachers per section and year.",
      "Hand over a role cleanly when someone moves or leaves.",
      "Bulk-import and export teacher and staff lists.",
      "Organise people into departments.",
    ],
    usedBy: "Principal, HR / admin office",
  },
  {
    id: "access",
    group: "people",
    icon: ShieldCheck,
    iconBackground: palette.jadeLt,
    iconColor: palette.jade,
    title: "Roles, Sub-Admins & Audit Log",
    summary:
      "Give the fees desk, the warden or a campus head exactly the access they need, and see who did what.",
    tags: ["Roles & permissions", "Campus-scoped access", "Audit log"],
    points: [
      "Create sub-admin roles such as a fees clerk, hostel warden or transport manager.",
      "Limit access to a single campus when someone only runs one.",
      "Permissions are checked on the server for every request, on web and in the app.",
      "An audit log records who changed what, and when.",
      "Each school chooses its own sign-in methods: email, admission number, mobile OTP or PIN.",
    ],
    usedBy: "Principal, trust office",
  },
  {
    id: "attendance",
    group: "daily",
    icon: ClipboardCheck,
    iconBackground: "rgba(201,168,76,.15)",
    iconColor: palette.gold,
    title: "Attendance",
    summary:
      "Teachers mark attendance on a phone in minutes, and parents hear about an absence the same day.",
    tags: ["Daily or period-wise", "Corrections", "Absence alerts", "Reports"],
    points: [
      "Record attendance daily or period by period, whichever your school follows.",
      "Mark class by class, or look at one student's history.",
      "Corrections go through an approval step, so a register is never quietly changed.",
      "Attendance can be locked once it is final.",
      "Calendar view and class-wise trends show patterns at a glance.",
      "Absence notifications reach the family, and every record syncs to the mobile app.",
    ],
    usedBy: "Teachers, class teachers, principal",
    optional: true,
  },
  {
    id: "leave",
    group: "daily",
    icon: CalendarOff,
    iconBackground: palette.amberBg,
    iconColor: "#92400e",
    title: "Student & Staff Leave",
    summary:
      "Leave requests that follow your school's chain of approval, and keep attendance honest automatically.",
    tags: ["Class teacher → admin", "Leave balances", "Auto attendance"],
    points: [
      "Families request a child's leave; the class teacher decides, with an optional second step for the admin.",
      "If the class teacher is away, a campus head can decide in their place.",
      "A rejection always carries a reason; a cancellation is recorded, not erased.",
      "Approved leave marks attendance for you.",
      "Staff leave has its own balances, requests and approvals.",
    ],
    usedBy: "Class teachers, principal, staff, families",
  },
  {
    id: "announcements",
    group: "daily",
    icon: Megaphone,
    iconBackground: palette.pinkBg,
    iconColor: palette.rose,
    title: "Announcements & Notifications",
    summary:
      "Reach exactly the right people, a whole school or a single class, now or scheduled for later.",
    tags: ["Audience targeting", "Scheduling", "Push notifications"],
    points: [
      "Target everyone, a role, specific classes or individual students.",
      "Send now, schedule for later, save a draft, or recall a notice.",
      "Attach files, and keep a history of every revision.",
      "See who has read it.",
      "Delivered in-app and as push notifications on the mobile app.",
    ],
    usedBy: "Principal, office, teachers",
    optional: true,
  },
  {
    id: "dashboard",
    group: "daily",
    icon: LayoutDashboard,
    iconBackground: palette.blueBg,
    iconColor: "#2563eb",
    title: "Dashboards & Search",
    summary:
      "Everyone opens a dashboard built for their job, and finds any student in a keystroke.",
    tags: ["Role-based", "Today at a glance", "Search"],
    points: [
      "Headcount, today's attendance, fee position, transport and pending approvals on one screen.",
      "Each person sees only the sections that concern their role.",
      "Modules your school doesn't use never clutter the screen.",
      "Search students by name from anywhere.",
    ],
    usedBy: "Principal, desk staff",
  },
  {
    id: "fees",
    group: "money",
    icon: Wallet,
    iconBackground: palette.jadeLt,
    iconColor: palette.jade,
    title: "Fees & Finance",
    summary:
      "Build fee structures, raise invoices, record payments and hand out PDF receipts, with defaulters visible at a glance.",
    tags: ["Fee structures", "Invoices", "PDF receipts", "Defaulters"],
    points: [
      "Create fee structures per class, with mandatory and optional components.",
      "Raise invoices for students and record payments against them.",
      "Generate PDF invoices and receipts instantly.",
      "Transport fees follow the route a child is enrolled on, and are kept per academic year.",
      "A finance dashboard shows collections over time and who still owes.",
      "Families see their fee status in the mobile app.",
    ],
    usedBy: "Accounts desk, principal, families",
    optional: true,
  },
  {
    id: "examinations",
    group: "exams",
    icon: ClipboardList,
    iconBackground: palette.violetBg,
    iconColor: "#6366f1",
    title: "Examinations, Results & Marksheets",
    summary:
      "Schedule papers, enter marks, compute results and publish marksheets, with every correction on record.",
    tags: ["Papers & marks", "Corrections", "Grading schemes", "Marksheets"],
    points: [
      "Define your own exam types: unit test, half-yearly, board, mock, practical.",
      "Schedule papers per subject, section and date; theory and practical are separate papers.",
      "Enter marks, or import them in bulk from a spreadsheet.",
      "The teacher who teaches the subject marks it; a closed paper changes only through an approved correction request.",
      "Set your own grading schemes and bands, per board.",
      "Publish results, and revise them later without overwriting what was published.",
      "Issue marksheets as PDF.",
    ],
    usedBy: "Exam coordinator, subject teachers, principal",
    optional: true,
  },
  {
    id: "transport",
    group: "campus",
    icon: Bus,
    iconBackground: palette.mintBg,
    iconColor: palette.jade,
    title: "Transport",
    summary:
      "Buses, routes, stops and drivers, linked to the students who ride and the fee they pay.",
    tags: ["Routes & stops", "Drivers", "Per-route fees", "Student view"],
    points: [
      "Keep a register of buses, drivers and transport staff.",
      "Build routes with stops and schedules, and record exceptions for a day.",
      "Enrol students on a route with pickup and drop stops.",
      "Set a fee plan per route.",
      "Students see their own bus, route, stop and driver in the app.",
    ],
    usedBy: "Transport manager, accounts desk, students",
    optional: true,
  },
  {
    id: "hostel",
    group: "campus",
    icon: BedDouble,
    iconBackground: palette.blueBg,
    iconColor: "#2563eb",
    title: "Hostel & Boarding",
    summary:
      "Know where every boarder is sleeping tonight, and who has walked out of the gate.",
    tags: ["Rooms & beds", "Gate passes", "Visitors", "Warden dashboard"],
    points: [
      "Set up hostels, rooms and beds, with capacity checked at every level.",
      "Allocate each boarder to a bed; one student, one bed.",
      "Gate passes for day-out and night-out: raised, approved by the warden, marked out and in by the gatekeeper.",
      "Late returns are flagged automatically, and every step of a pass is recorded.",
      "Keep a log of hostel visitors and each visit.",
      "A warden dashboard shows occupancy and overdue returns.",
    ],
    usedBy: "Hostel warden, gatekeeper, boarders",
    optional: true,
  },
];

export function modulesInGroup(group: ModuleGroupId): ProductModule[] {
  return MODULES.filter((m) => m.group === group);
}

/** Optional modules, as names a school would recognise — used by the "switch on only what you use" section */
export const SWITCHABLE_MODULE_NAMES: string[] = [
  "Attendance",
  "Fees & Finance",
  "Timetable",
  "Academic Calendar",
  "Announcements",
  "Transport",
  "Hostel",
  "Examinations",
];
