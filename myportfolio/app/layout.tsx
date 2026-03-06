import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikoloz Dvalishvili — Front-End Developer",
  description:
    "Personal portfolio of Nikoloz Dvalishvili — a passionate Front-End developer crafting premium digital experiences with modern web technologies.",
  keywords: [
    "developer",
    "portfolio",
    "frontend",
    "react",
    "nextjs",
    "typescript",
  ],
  authors: [{ name: "Nikoloz Dvalishvili" }],
  openGraph: {
    title: "Nikoloz Dvalishvili — Front-End Developer",
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikoloz Dvalishvili — Front-End Developer",
    description:
      "Personal portfolio showcasing projects, skills, and experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
