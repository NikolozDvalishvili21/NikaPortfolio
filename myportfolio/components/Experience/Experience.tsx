"use client";

import { experience } from "@/data/experience";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <SectionHeading
          label="02"
          title="Experience"
          subtitle="Where I've worked and what I've built."
        />

        <div className={styles.timeline}>
          {/* Timeline line */}
          <div className={styles.timelineLine} aria-hidden="true" />

          {experience.map((item, index) => (
            <RevealOnScroll
              key={item.id}
              delay={index * 0.1}
              className={styles.timelineItem}
            >
              <div className={styles.timelineDot} aria-hidden="true">
                <div className={styles.timelineDotInner} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.category}>
                    {item.technologies[0]}
                  </span>
                </div>

                <h3 className={styles.role}>{item.role}</h3>

                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.company}
                >
                  {item.company}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 9L9 3M9 3H4.5M9 3V7.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <p className={styles.description}>{item.description}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className={styles.highlight}>
                        <span className={styles.highlightDash}>—</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <div className={styles.techStack}>
                  {item.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
