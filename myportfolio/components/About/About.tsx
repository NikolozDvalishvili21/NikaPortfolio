"use client";

import { personal } from "@/data/personal";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import styles from "./About.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <SectionHeading
          label="01"
          title="About Me"
          subtitle="A bit about who I am and what drives me."
        />

        <div className={styles.grid}>
          {/* Portrait / Visual */}
          <RevealOnScroll direction="left" delay={0.1}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/1764185408213.jpeg"
                  alt="Nika Dvalishvili"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.imageFrame} aria-hidden="true" />
            </div>
          </RevealOnScroll>

          {/* Text content */}
          <div className={styles.textContent}>
            {personal.longBio.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={0.15 * (i + 1)}>
                <p className={styles.paragraph}>{paragraph}</p>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={0.5}>
              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailValue}>
                    {personal.location}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Email</span>
                  <span className={styles.detailValue}>{personal.email}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
}
