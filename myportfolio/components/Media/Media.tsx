"use client";

import { useState, useEffect } from "react";
import styles from "./Media.module.scss";
import Image from "next/image";

type MediaType = "all" | "online media" | "interview";

interface MediaItem {
  id: number;
  type: Exclude<MediaType, "all">;
  source: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  url: string;
  secondaryUrl?: string;
  featured?: boolean;
}

const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 1,
    type: "online media",
    source: "Enterpreneur Georgia",
    date: "Mar 2026",
    title:
      "ქართველი პროგრამისტის, ნიკა დვალიშვილის მიერ შექმნილი აპლიკაცია App Store-ში, მსოფლიო მასშტაბით, Word category-ში 24-ე ადგილს იკავებს",
    excerpt:
      "ნიკოლოზმა შექმნა ინსტრუმენტი მათთვის, ვისაც დროის დაზოგვა და პროდუქტიულობის გაზრდა სურს TypeSprint-ის მეშვეობით თქვენ შეძლებთ ბეჭდვის სიჩქარის გაორმაგებას, რაც პირდაპირ აისახება თქვენს სამუშაო ეფექტურობაზე",
    readTime: "2 min read",
    url: "https://www.facebook.com/share/p/1BxwuBAfHZ/?mibextid=wwXIfr",
    secondaryUrl:
      "https://www.linkedin.com/posts/entrepreneur-georgia_typingapp-typesprint-improvetyping-activity-7440406073892659201-uHSh?utm_medium=ios_app&rcm=ACoAAA5SYGwBe4flF-QnIFNDfkNA2JLy4dgm7Oc&utm_source=social_share_video_v2&utm_campaign=copy_link",
    featured: true,
  },
  {
    id: 2,
    type: "online media",
    source: "Business Insider Georgia",
    date: "Mar 2026",
    title:
      "ქართველი პროგრამისტის, ნიკა დვალიშვილის მიერ შექმნილი აპლიკაცია App Store - ში, მსოფლიო მასშტაბით, Word category-ში 24-ე ადგილს იკავებს",
    excerpt:
      "TypeSprint-ის მეშვეობით თქვენ შეძლებთ ბეჭდვის სიჩქარის გაორმაგებას, რაც პირდაპირ აისახება თქვენს სამუშაო ეფექტურობაზე. რატომ გჭირდებათ TypeSprint თქვენს სმარტფონში? დროის ეკონომია: თუ ბეჭდვის სიჩქარეს გააუმჯობესებთ, დღის განმავლობაში დაზოგავთ იმ დროს, რომელსაც მუშაობისას ინგლისურად წერისას ხარჯავთ",
    readTime: "2 min read",
    url: "https://businessinsider.ge/Bussines/qartveli-programistis-nika-dvalishvilis-mier-sheqmnili-aplikatsia-app-store-shi-msoflio-masshtabit-word-category-shi-24-e-adgils-ikavebs-33941?lng=geo",
  },
  {
    id: 3,
    type: "interview",
    source: "BP.ge",
    date: "May 2024",
    title: "ქართულ ბაზარზე ტექნოლოგიური კომპანია 'გარგარი' გამოჩნდა",
    excerpt:
      "როგორც „ბიზნესპარტნიორს“ სტარტაპის თანადამფუძნებელმა  ნიკოლოზ დვალიშვილმა განუცხადა, კომპანიის მიზანია დამკვეთისთვის სრული პროგრამული უზრუნველყოფის პაკეტის მიწოდება, რომელშიც პროდუქტის მაღალ ხარისხთან ერთად დამკვეთის ინფრასტრუქტურაში სრული ინტეგრაცია და კომპლექსური ტექნიკური მხარდაჭერა მოიაზრება.",
    readTime: "3 min read",
    url: "https://bp.ge/news/biznesi/qartul-bazarze-teqnologiuri-kompania-gargari-gamochnda",
  }
];

const FILTERS: { label: string; value: MediaType }[] = [
  { label: "all", value: "all" },
  { label: "online media", value: "online media" },
  { label: "interview", value: "interview" },
];


function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12L12 2M12 2H5M12 2V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArticleIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="6"
        width="28"
        height="24"
        rx="2"
        stroke="#2a2a2a"
        strokeWidth="1.2"
      />
      <path d="M4 13h28" stroke="#2a2a2a" strokeWidth="0.8" />
      <circle cx="8" cy="9.5" r="1" fill="#2e2e2e" />
      <circle cx="11.5" cy="9.5" r="1" fill="#2e2e2e" />
      <circle cx="15" cy="9.5" r="1" fill="#2e2e2e" />
      <rect x="8" y="17" width="9" height="1" rx="0.5" fill="#242424" />
      <rect x="8" y="20" width="16" height="0.8" rx="0.4" fill="#1e1e1e" />
      <rect x="8" y="23" width="13" height="0.8" rx="0.4" fill="#1e1e1e" />
      <rect x="8" y="26" width="11" height="0.8" rx="0.4" fill="#1e1e1e" />
    </svg>
  );
}

interface MediaCardProps {
  item: MediaItem;
  index: number;
}

function MediaCard({ item, index }: MediaCardProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.style.transitionDelay = `${index * 80}ms`;
          node.classList.add(styles.visible);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, index]);

  const setDivRef = (el: HTMLDivElement | null) => setNode(el);
  const setAnchorRef = (el: HTMLAnchorElement | null) => setNode(el);

  if (item.featured) {
    return (
      <div
        ref={setDivRef}
        className={`${styles.card} ${styles.cardFeatured} ${styles.cardAnimate}`}
      >
        <div className={styles.featuredContent}>
          <div className={styles.cardMeta}>
            <span className={`${styles.tag} ${styles[`tag--${item.type}`]}`}>
              {item.type}
            </span>
            <span className={styles.cardSource}>— {item.source}</span>
            <span className={styles.cardDate}>{item.date}</span>
          </div>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardExcerpt}>{item.excerpt}</p>
          <div className={styles.cardFooter}>
            <div className={styles.readLinks}>
              <a
                href={item.url}
                className={styles.readLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook <ArrowIcon />
              </a>
              {item.secondaryUrl && (
                <a
                  href={item.secondaryUrl}
                  className={styles.readLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowIcon />
                </a>
              )}
            </div>
            <span className={styles.readTime}>{item.readTime}</span>
          </div>
        </div>
        <div className={styles.featuredVisual}>
          <div className={styles.featuredBadge}>featured</div>
          <ArticleIcon />
          <Image
            src="/images/myScreen.png"
            alt="article"
            // width={400}
            // height={300}
            fill
            className={styles.image}
          />
        </div>
      </div>
    );
  }

  return (
    <a
      ref={setAnchorRef}
      href={item.url}
      className={`${styles.card} ${styles.cardAnimate}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read: ${item.title}`}
    >
      <div className={styles.cardMeta}>
        <span className={`${styles.tag} ${styles[`tag--${item.type}`]}`}>
          {item.type}
        </span>
        <span className={styles.cardSource}>— {item.source}</span>
        <span className={styles.cardDate}>{item.date}</span>
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardExcerpt}>{item.excerpt}</p>
      <div className={styles.cardFooter}>
        <span className={styles.readLink}>
          read {item.type} <ArrowIcon />
        </span>
        <span className={styles.readTime}>{item.readTime}</span>
      </div>
    </a>
  );
}

export default function Media() {
  const [active, setActive] = useState<MediaType>("all");

  const filtered = MEDIA_ITEMS.filter(
    (item) => active === "all" || item.type === active,
  );

  const hasFeatured = filtered.some((i) => i.featured);

  return (
    <section className={styles.section} id="media">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionNum}>06</span>
            <span className={styles.sectionLine} />
          </div>
          <h2 className={styles.sectionTitle}>Media.</h2>
          <p className={styles.sectionSub}>press &amp; interviews</p>
        </div>

        <div
          className={styles.filterBar}
          role="group"
          aria-label="Filter media by type"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${active === f.value ? styles.filterActive : ""}`}
              onClick={() => setActive(f.value)}
              aria-pressed={active === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          className={`${styles.grid} ${hasFeatured ? styles.gridWithFeatured : ""}`}
        >
          {filtered.map((item, i) => (
            <MediaCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
