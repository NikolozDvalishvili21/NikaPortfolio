"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import styles from "./Projects.module.scss";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <RevealOnScroll delay={0.1} className={styles.projectItem}>
      <motion.article
        className={`${styles.card} ${isEven ? styles.cardLeft : styles.cardRight}`}
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Image section */}
        <div className={styles.imageSection}>
          <motion.div
            className={styles.imageWrapper}
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.03 },
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imagePlaceholder}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              {/* Fallback overlay for missing images */}
              <div className={styles.imageFallback}>
                <span>{project.title}</span>
              </div>
            </div>
          </motion.div>

          {/* Year badge */}
          <div className={styles.yearBadge}>{project.year}</div>
        </div>

        {/* Content section */}
        <div className={styles.contentSection}>
          <span className={styles.projectCategory}>{project.category}</span>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDesc}>{project.description}</p>
          {project.longDescription && (
            <p className={styles.projectLongDesc}>{project.longDescription}</p>
          )}

          <div className={styles.projectStack}>
            {project.stack.map((tech) => (
              <span key={tech} className={styles.stackItem}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.projectLinks}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <span>Live Site</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <span>Source Code</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H5.25M10.5 3.5V8.75"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Hover border glow */}
        <motion.div
          className={styles.cardGlow}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        />
      </motion.article>
    </RevealOnScroll>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <SectionHeading
          label="04"
          title="Selected Projects"
          subtitle="A curated collection of my recent work."
        />

        <div className={styles.projectList}>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
