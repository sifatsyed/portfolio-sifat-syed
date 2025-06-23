import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logoIcon}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.logoImage}
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
        </div>
        <div className={styles.logoText}>Sifat's Portfolio</div>
      </div>
      <div className={styles.navSection}>
        <nav className={styles.navigation}>
          <Link
            href="/about"
            className={`${styles.navLink} ${currentPage === "about" ? styles.navLinkActive : ""}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`${styles.navLink} ${currentPage === "projects" ? styles.navLinkActive : ""}`}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={`${styles.navLink} ${currentPage === "experience" ? styles.navLinkActive : ""}`}
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className={`${styles.navLink} ${currentPage === "contact" ? styles.navLinkActive : ""}`}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className={`${styles.navLink} ${currentPage === "blog" ? styles.navLinkActive : ""}`}
          >
            Blog
          </Link>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.iconButton}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.icon}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className={styles.profileImage}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
