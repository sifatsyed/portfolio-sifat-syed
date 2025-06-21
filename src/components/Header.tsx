import React from "react";
import Link from "next/link";
import styles from "../styles/components.module.css";
import homeIcon from "../assets/icons/home.svg";
import globeIcon from "../assets/icons/globe.svg";
import userIcon from "../assets/icons/user.svg";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.logoIcon}>
          <img src={homeIcon} alt="Logo" className={styles.logoImage} />
        </div>
        <div className={styles.logoText}>Sophie's Portfolio</div>
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
            <img src={globeIcon} alt="Globe" className={styles.icon} />
          </div>
          <img src={userIcon} alt="Profile" className={styles.profileImage} />
        </div>
      </div>
    </header>
  );
}
