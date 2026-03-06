// ============================================
// SKILLS — Organize your skills by category
// ============================================

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Building interfaces that users love",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "HTML/CSS" },
      { name: "SCSS/Sass" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Development ecosystem & practices",
    skills: [
      { name: "Git" },
      { name: "Figma" },
      { name: "VS Code" },
      { name: "Vercel" },
    ],
  },
];
