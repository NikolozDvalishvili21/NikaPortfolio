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
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Vue.js", level: "advanced" },
      { name: "HTML/CSS", level: "expert" },
      { name: "SCSS/Sass", level: "expert" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Framer Motion", level: "advanced" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side logic & APIs",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "Express", level: "advanced" },
      { name: "Python", level: "intermediate" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "GraphQL", level: "advanced" },
      { name: "Firebase", level: "intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Development ecosystem & practices",
    skills: [
      { name: "Git", level: "expert" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "advanced" },
      { name: "Figma", level: "advanced" },
      { name: "VS Code", level: "expert" },
      { name: "Linux", level: "advanced" },
      { name: "Vercel", level: "advanced" },
      { name: "AWS", level: "intermediate" },
    ],
  },
];
