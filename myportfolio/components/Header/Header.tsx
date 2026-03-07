"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/data/personal";
import { navigation } from "@/data/social";
import styles from "./Header.module.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMobileMenuOpen ? styles.menuOpen : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <a href="#hero" className={styles.logo} onClick={closeMobileMenu}>
            {personal.firstName}
            <span className={styles.logoAccent}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            {navigation.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className={styles.navIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className={`${styles.burger} ${isMobileMenuOpen ? styles.burgerOpen : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          >
            <motion.nav
              className={styles.mobileNav}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.mobileNavInner}>
                <div className={styles.mobileNavHeader}>
                  <a
                    href="#hero"
                    className={styles.mobileLogo}
                    onClick={closeMobileMenu}
                  >
                    {personal.firstName}
                    <span className={styles.logoAccent}>.</span>
                  </a>
                  <button
                    className={styles.closeBtn}
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M5 5L17 17M17 5L5 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                {navigation.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className={styles.mobileNavIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                className={styles.mobileNavFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={`mailto:${personal.email}`}
                  className={styles.mobileEmail}
                >
                  {personal.email}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
