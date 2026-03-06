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
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/yourusername",
    icon: "dribbble",
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
