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
    id: "project-1",
    title: "Zmna.ge",
    description:
      "Zmna.ge is an entertainment and educational online media, where you can find the most interesting information on topics such as: astrology, cooking, health, show business news, and more.",
    image: "/projects/zmna.webp",
    stack: ["Next.js"],
    liveUrl: "https://www.zmna.ge/",
    featured: true,
    year: "2024 - 2025",
    category: "Blog Web-Site",
  },
  {
    id: "project-2",
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
    id: "project-3",
    title: "Project Gamma",
    description:
      "A creative portfolio and CMS for a photography studio with advanced image optimization.",
    longDescription:
      "Custom-built CMS with drag-and-drop gallery management, automatic image optimization, and SEO-friendly dynamic routes.",
    image: "/projects/project-3.jpg",
    stack: ["Next.js", "Sanity CMS", "Cloudinary", "SCSS"],
    liveUrl: "https://example.com",
    featured: false,
    year: "2024",
    category: "Portfolio / CMS",
  },
  {
    id: "project-4",
    title: "Project Delta",
    description:
      "A task management tool with AI-powered prioritization and smart scheduling.",
    image: "/projects/project-4.jpg",
    stack: ["Vue.js", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
    category: "Productivity",
  },
];
