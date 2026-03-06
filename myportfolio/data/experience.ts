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
  highlights?: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    company: "ROWIX",
    companyUrl: "https://rowix.com/",
    period: "2025 - Present",
    highlights: [
      "Built and maintained interactive front-end interfaces using TypeScript and Next.js.",
      "Developed reusable component systems and integrated external libraries to enhance functionality.",
    ],
    description:
      "Developed and maintained interactive front-end interfaces for ROWIX using React, TypeScript, and Next.js. Built reusable component systems, integrated external libraries, and implemented responsive, animation-rich UI. Collaborated within a team to deliver scalable features while ensuring performance, maintainability, and smooth user experience.",
    technologies: ["Next.js", "React", "TypeScript", "SCSS", "Framer Motion"],
  },
  {
    id: "exp-2",
    role: "Co-Founder & Front-End Developer",
    company: "GarGari",
    companyUrl: "https://www.gargari.ge/",
    period: "2024 - Present",
    description:
      "Co-founded GarGari and led front-end development across company projects, building responsive interfaces, implementing modern UI/UX patterns, and optimizing performance.",
    technologies: ["Next.js", "TypeScript", "SCSS", "TailwindCSS"],
  },
  {
    id: "exp-3",
    role: "Front-End Developer",
    company: "Zmna.ge",
    companyUrl: "https://www.zmna.ge/",
    period: "2024 - 2025",
    description:
      "Developed the full front-end of Zmna.ge, a modern Georgian news platform. Built responsive UI, implemented dynamic category pages, optimized rendering, integrated ads, and maintained overall site performance and user experience.",
    highlights: [
      "Developed whole front-end of Zmna.ge",
      "I was responsible for Back-End and Front-End connections",
      "Implemented dynamic category pages and optimized rendering for performance",
      "Integrated third-party services for ads and analytics",
      "Maintained overall site performance and user experience",
    ],
    technologies: ["Next.js", "TailwindCSS", "CSS"],
  },
  {
    id: "exp-4",
    role: "Front-End Developer",
    company: "Reagent.ge",
    companyUrl: "https://www.reagent.ge/",
    period: "2024 - 2025",
    description:
      "Developed the full front-end of Reagent.ge, a modern Georgian news platform. Built responsive UI, implemented dynamic category pages, optimized rendering and maintained overall site performance and user experience.",
    highlights: [
      "Developed whole front-end of Reagent.ge",
      "Implemented dynamic category pages and optimized rendering for performance",
      "Maintained overall site performance and user experience",
    ],
    technologies: ["Next.js", "SCSS"],
  },
  {
    id: "exp-5",
    role: "Front-End Developer Course",
    company: "LeverX",
    companyUrl: "https://leverx.com/",
    period: "2024",
    description:
      "Completed an intensive practical training focused on HTML, CSS, JavaScript, TypeScript, React, GitLab, Webpack, JSON-Server, and real-world application development.",
    highlights: [
      "Gained hands-on experience building responsive web applications using React and TypeScript.",
      "Learned best practices for version control with GitLab and module bundling with Webpack.",
      "Completed projects that simulated real-world development scenarios, enhancing problem-solving skills and understanding of front-end development workflows.",
    ],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "GitLab",
      "Webpack",
      "JSON-Server",
    ],
  },
];
