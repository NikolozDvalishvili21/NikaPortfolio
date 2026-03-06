"use client";

import RevealOnScroll from "./RevealOnScroll";
import styles from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll>
      <div className={styles.sectionHeading}>
        <span className={styles.label}>{label}</span>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </RevealOnScroll>
  );
}
