// ============================================
// EXPERIENCE — Add/edit your work history here
// ============================================

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "Company Name",
    companyUrl: "https://example.com",
    period: "2024 — Present",
    description:
      "Led the frontend architecture for a high-traffic SaaS platform, focusing on performance and scalability.",
    highlights: [
      "Rebuilt the core dashboard reducing load time by 60%",
      "Implemented design system used across 5 product teams",
      "Mentored a team of 4 junior developers",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Another Company",
    companyUrl: "https://example.com",
    period: "2022 — 2024",
    description:
      "Built responsive web applications and contributed to the company's component library.",
    highlights: [
      "Developed 15+ reusable UI components",
      "Improved Core Web Vitals scores by 40%",
      "Integrated third-party APIs and payment systems",
    ],
    technologies: ["Vue.js", "TypeScript", "SCSS", "REST APIs"],
  },
  {
    id: "exp-3",
    role: "Junior Developer",
    company: "Startup Inc.",
    companyUrl: "https://example.com",
    period: "2021 — 2022",
    description:
      "Contributed to a fast-paced startup environment building MVPs and iterating on user feedback.",
    highlights: [
      "Shipped 3 MVPs from concept to production",
      "Collaborated directly with designers and product managers",
      "Introduced automated testing reducing bugs by 30%",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];
