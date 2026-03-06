import { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiSass,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiFigma,
SiVercel,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

// Icon map — keys must match skill names in skills.ts
const skillIcons: Record<string, ReactNode> = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "HTML/CSS": <SiHtml5 />,
  "SCSS/Sass": <SiSass />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  Git: <SiGit />,
  Figma: <SiFigma />,
  "VS Code": <DiVisualstudio />,
  Vercel: <SiVercel />,
};

export function getSkillIcon(name: string): ReactNode | null {
  return skillIcons[name] ?? null;
}
