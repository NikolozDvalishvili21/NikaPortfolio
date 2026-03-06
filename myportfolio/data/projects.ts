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
    image: "/projects/project-1.jpg",
    stack: ["Next.js"],
    liveUrl: "https://www.zmna.ge/",
    featured: true,
    year: "2024 - 2025",
    category: "Web-Site",
  },
  {
    id: "project-2",
    title: "Reagent.ge",
    description:
      "An e-commerce platform with a focus on mobile-first design and lightning-fast checkout.",
    longDescription:
      "Reimagined the online shopping experience with gesture-based navigation and a one-tap checkout flow that increased conversion rates by 35%.",
    image: "/projects/project-2.jpg",
    stack: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
    category: "E-Commerce",
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
    featured: true,
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
    featured: true,
    year: "2023",
    category: "Productivity",
  },
];
