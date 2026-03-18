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
}

export const projects: Project[] = [
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
  id: "project-3",
  title: "TypeSprint",
  description:
    "A typing practice mobile app focused on improving speed and accuracy through timed tests, performance tracking, and achievement-based progression.",
  longDescription:
    "TypeSprint is a mobile typing trainer built to help users practice typing in a clean, fast, and engaging way. It features timed typing tests, WPM and accuracy tracking, personal best records, badge achievements, statistics history, customizable settings, and a polished mobile-first interface designed for a smooth user experience.",
  image: "/projects/TypeSprint.jpg",
  stack: ["React Native", "Expo", "TypeScript", "AsyncStorage"],
  liveUrl: "https://apps.apple.com/us/app/typesprint-typing-app/id6760451911",
  featured: true,
  year: "2026",
  category: "Mobile App",
}
];
