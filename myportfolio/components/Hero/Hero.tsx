"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import MagneticButton from "@/components/shared/MagneticButton";
import styles from "./Hero.module.scss";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: (y - 0.5) * -20,
      rotateY: (x - 0.5) * 20,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Decorative grid */}
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Floating accent line */}
      <motion.div
        className={styles.accentLine}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Status badge
          <motion.div
            className={styles.statusBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.statusDot} />
            <span>{personal.availability}</span>
          </motion.div> */}

          {/* Main heading */}
          <div className={styles.headingBlock}>
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className={styles.line1}>{personal.firstName}</span>
              <span className={styles.line2}>
                {personal.lastName}
                <span className={styles.accentDot}>.</span>
              </span>
            </motion.h1>

            <motion.div
              className={styles.roleBlock}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className={styles.roleLabel}>Role</span>
              <h2 className={styles.role}>{personal.role}</h2>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <MagneticButton href="#projects" variant="primary" size="lg">
              View My Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary" size="lg">
              Get In Touch
            </MagneticButton>
          </motion.div>

          {/* Tablet-only highlights */}
          <motion.div
            className={styles.highlights}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className={styles.highlightItem}>
              <span className={styles.highlightValue}>
                1<span>+</span>
              </span>
              <span className={styles.highlightLabel}>Years Experience</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightValue}>
                5<span>+</span>
              </span>
              <span className={styles.highlightLabel}>Projects Worked On</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightValue}>
                100<span>%</span>
              </span>
              <span className={styles.highlightLabel}>Passion Driven</span>
            </div>
          </motion.div>
        </div>

        {/* Right visual element */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div
            ref={cardRef}
            className={styles.visualInner}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 800 }}
          >
            {/* 3D tilt card */}
            <motion.div
              className={styles.tiltCard}
              animate={{
                rotateX: tilt.rotateX,
                rotateY: tilt.rotateY,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Glow that follows the cursor */}
              <div
                className={styles.cardGlow}
                style={{
                  background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(200,165,90,0.15) 0%, transparent 60%)`,
                }}
              />

              {/* Abstract code/developer composition */}
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span className={styles.codeDot} />
                  <span className={styles.codeDot} />
                  <span className={styles.codeDot} />
                </div>
                <div className={styles.codeContent}>
                  <span className={styles.codeLine}>
                    <span className={styles.codeKeyword}>const</span>{" "}
                    <span className={styles.codeVar}>developer</span>{" "}
                    <span className={styles.codeOp}>=</span> {"{"}
                  </span>
                  <span className={styles.codeLine}>
                    {"  "}
                    <span className={styles.codeProp}>passion</span>:{" "}
                    <span className={styles.codeString}>
                      &quot;building&quot;
                    </span>
                    ,
                  </span>
                  <span className={styles.codeLine}>
                    {"  "}
                    <span className={styles.codeProp}>focus</span>:{" "}
                    <span className={styles.codeString}>
                      &quot;quality&quot;
                    </span>
                    ,
                  </span>
                  <span className={styles.codeLine}>
                    {"  "}
                    <span className={styles.codeProp}>craft</span>:{" "}
                    <span className={styles.codeString}>
                      &quot;pixel-perfect&quot;
                    </span>
                    ,
                  </span>
                  <span className={styles.codeLine}>{"}"}</span>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className={styles.orbitRing} aria-hidden="true">
              <div className={styles.orbitDot} />
            </div>
            <div className={styles.cornerBracket} aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
