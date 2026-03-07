"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import SectionHeading from "@/components/shared/SectionHeading";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import MagneticButton from "@/components/shared/MagneticButton";
import ContactModal from "./ContactModal";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionHeading
          label="05"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <div className={styles.content}>
          <RevealOnScroll delay={0.1}>
            <div className={styles.ctaBlock}>
              <h3 className={styles.ctaHeading}>
                Got a project?
                <br />
                <span className={styles.ctaAccent}>Let&apos;s talk.</span>
              </h3>

              <a href={`mailto:${personal.email}`} className={styles.emailLink}>
                {personal.email}
              </a>

              <div className={styles.buttons}>
                <MagneticButton
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="lg"
                >
                  Send an Email
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </MagneticButton>
                {personal.resumeUrl && (
                  <MagneticButton
                    href={personal.resumeUrl}
                    variant="secondary"
                    size="lg"
                  >
                    Download Resume
                  </MagneticButton>
                )}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <div className={styles.socialBlock}>
              <span className={styles.socialLabel}>Find me online</span>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.name}
                  >
                    <span className={styles.socialName}>{link.name}</span>
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
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
