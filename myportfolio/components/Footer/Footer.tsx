import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.name}>
              {personal.firstName}
              <span className={styles.accent}>.</span>
            </span>
            <p className={styles.tagline}>{personal.role}</p>
          </div>

          <div className={styles.links}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={link.name}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {currentYear} {personal.name}. All rights reserved.
          </span>
          <span className={styles.credit}>Designed &amp; Built with care</span>
        </div>
      </div>
    </footer>
  );
}
