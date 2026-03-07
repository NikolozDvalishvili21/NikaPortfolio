// ============================================
// SOCIAL LINKS — Update your profile URLs
// ============================================

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Used as label / icon identifier
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/NikolozDvalishvili21",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nikoloz-dvalishvili-864171293/",
    icon: "linkedin",
  }
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
