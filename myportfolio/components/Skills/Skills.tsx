"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { getSkillIcon } from "@/data/skillIcons";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <SectionHeading
          label="03"
          title="Skills & Tools"
          subtitle="Technologies I work with daily."
        />

        <div className={styles.categories}>
          {skillCategories.map((category, catIndex) => (
            <RevealOnScroll key={category.id} delay={catIndex * 0.15}>
              <div className={styles.category}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIndex}>
                    {String(catIndex + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <p className={styles.categoryDesc}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className={styles.skillGrid}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className={styles.skillItem}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -2 }}
                    >
                      <div className={styles.skillContent}>
                        <div className={styles.skillTop}>
                          {getSkillIcon(skill.name) && (
                            <span className={styles.skillIcon}>
                              {getSkillIcon(skill.name)}
                            </span>
                          )}
                          <span className={styles.skillName}>{skill.name}</span>
                        </div>
                        {skill.level && (
                          <div className={styles.levelIndicator}>
                            <span
                              className={`${styles.levelDot} ${
                                styles[skill.level]
                              }`}
                            />
                            <span className={styles.levelText}>
                              {skill.level}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
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
