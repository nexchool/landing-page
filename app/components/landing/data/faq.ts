export type FaqItem = { q: string; a: string };

/** Shared by the home-page FAQ and the /product page. Every answer must match the shipped product. */
export const FAQ: FaqItem[] = [
  {
    q: "Who is Nexchool for?",
    a: "Any school, from a single school with a few hundred students to a trust running many campuses. Campuses, boards, mediums and streams are settings, so the same product fits both.",
  },
  {
    q: "Can we run two boards, or two mediums, on one campus?",
    a: "Yes. A campus can run more than one board, and a grade can have parallel English and Gujarati sections. Each class belongs to one campus, one board and one medium.",
  },
  {
    q: "Can we bring in our existing data?",
    a: "Yes. Students and teachers can be imported from a spreadsheet, and marks can be imported in bulk. We help you set this up when you start.",
  },
  {
    q: "Do we have to use every module?",
    a: "No. Attendance, fees, timetable, calendar, announcements, transport, hostel and examinations are switched on per school. A module you don't use stays hidden from every screen.",
  },
  {
    q: "How do students and parents sign in?",
    a: "Each school chooses its sign-in methods: email, admission number, mobile OTP by SMS or WhatsApp, or a student PIN. A family uses the student's account and sees what the student sees. If your school needs separate parent logins, tell us.",
  },
  {
    q: "Can parents pay fees online?",
    a: "Not yet. Your accounts desk records payments and gives out PDF receipts, and families see their fee status in the app. Tell us how your parents pay today.",
  },
  {
    q: "Is there a mobile app?",
    a: "The Android app is going live on Google Play shortly. It has attendance, schedule, fees, leave, announcements and more, in English, Hindi and Gujarati. The full admin dashboard works on the web in any browser, in English.",
  },
  {
    q: "Is our data safe?",
    a: "Each school's data is kept separate, every request is permission-checked on the server, and an audit log records changes. It runs on AWS in Mumbai over HTTPS, with the database kept off the public internet.",
  },
  {
    q: "What does it cost?",
    a: "One yearly rate per enrolled student, with every module included. We agree the exact price on a short call, based on your school and the modules you need.",
  },
  {
    q: "Who do we call when something goes wrong?",
    a: "You reach the founder directly, by phone or email. Nexchool is built and supported by the same person, so you never explain your problem twice.",
  },
];
