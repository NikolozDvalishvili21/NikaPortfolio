// ============================================
// PROJECTS — Add your projects here
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  category: string;
  ongoing?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-4",
    title: "Simebi",
    description:
      "A bilingual guitar teacher discovery platform that connects students with teachers through a clean, responsive, and user-friendly experience.",
    longDescription:
      "Simebi is a bilingual platform designed to help students discover guitar teachers and allow teachers to apply to be listed on the platform. It includes role-based authentication, OTP email verification, teacher application submission, admin approval and rejection workflows, rejection reason emails, resubmission flow, image uploads, and Georgian/English localization. The project focuses on a smooth user experience, scalable structure, and production-oriented features.",
    image: "/projects/RemyScreen.png",
    stack: [
      "React",
      "TypeScript",
      "SCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Resend",
      "Cloudinary",
      "i18next",
    ],
    featured: true,
    year: "2026",
    category: "Full-Stack Web App",
    ongoing: true,
  },
  {
    id: "project-3",
    title: "TypeSprint",
    description:
      "A typing practice mobile app focused on improving speed and accuracy through timed tests, performance tracking, and achievement-based progression.",
    longDescription:
      "TypeSprint is a mobile typing trainer built to help users practice typing in a clean, fast, and engaging way. It features timed typing tests, WPM and accuracy tracking, personal best records, badge achievements, statistics history, customizable settings, and a polished mobile-first interface designed for a smooth user experience.",
    image: "/projects/TypeSprint.jpg",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Google/Apple Auth",
      "AsyncStorage",
    ],
    liveUrl: "https://apps.apple.com/us/app/typesprint-typing-app/id6760451911",
    featured: true,
    year: "2026",
    category: "Mobile App",
  },
  {
    id: "project-21",
    title: "Reagent.ge",
    description:
      "Premium quality reagents. REAGENT GROUP offers the highest quality chemical reagents for laboratories and industrial purposes.",
    image: "/projects/reagent.webp",
    stack: ["Next.js", "SCSS"],
    liveUrl: "https://www.reagent.ge/",
    featured: true,
    year: "2026",
    category: "Informational Web-Site",
  },
  {
    id: "project-2",
    title: "Zmna.ge",
    description:
      "Zmna.ge is an entertainment and educational online media, where you can find the most interesting information on topics such as: astrology, cooking, health, show business news, and more.",
    image: "/projects/zmna.webp",
    stack: ["Next.js", "SCSS"],
    liveUrl: "https://www.zmna.ge/",
    featured: true,
    year: "2024 - 2025",
    category: "Blog Web-Site",
  },
  {
    id: "project-5",
    title: "Color Picker",
    description:
      "A simple and elegant color picker app for designers and developers.",
    image: "/projects/colorPicker.png",
    stack: ["Next.js", "CSS"],
    liveUrl: "https://color-picker-nine-ivory.vercel.app",
    featured: true,
    year: "2026",
    category: "Blog Web-Site",
  },
  {
    id: "project-6",
    title: "Time Tracker",
    description:
      "Track time spent on specific tabs. Track how much time you spend on specific browser tabs. Add a tab, label it (like coding, research, or work), and monitor your time automatically.",
    image: "/projects/timeTracker.png",
    stack: ["TypeScript", "React", "CSS"],
    liveUrl:
      "https://chromewebstore.google.com/detail/bnoaohdegcheompicmiddelikoldpfid?utm_source=item-share-cb",
    featured: true,
    year: "2026",
    category: "Blog Web-Site",
  },
];
