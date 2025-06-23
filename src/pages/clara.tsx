import React from "react";
import Link from "next/link";
import styles from "../styles/clara.module.css";

export default function ClaraPortfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          {/* Navigation Header */}
          <header className={styles.header}>
            <div className={styles.navContainer}>
              <nav className={styles.navigation}>
                <Link href="#home" className={styles.navLink}>
                  Home
                </Link>
                <Link href="#about" className={styles.navLink}>
                  About
                </Link>
                <Link href="#work" className={styles.navLink}>
                  Work
                </Link>
                <Link href="#projects" className={styles.navLink}>
                  Projects
                </Link>
                <Link href="#debugging" className={styles.navLink}>
                  Debugging
                </Link>
                <Link href="#contact" className={styles.navLink}>
                  Contact
                </Link>
              </nav>
              <div className={styles.socialIcons}>
                <div className={styles.iconButton}>
                  <img
                    src="/assets/icons/home.svg"
                    alt="Home"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.iconButton}>
                  <img
                    src="/assets/icons/globe.svg"
                    alt="Globe"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.iconButton}>
                  <img
                    src="/assets/icons/github.svg"
                    alt="GitHub"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.iconButton}>
                  <img
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.iconButton}>
                  <img
                    src="/assets/icons/twitter.svg"
                    alt="Twitter"
                    className={styles.icon}
                  />
                </div>
                <div className={styles.iconButton}>
                  <img
                    src="/assets/icons/mail.svg"
                    alt="Contact"
                    className={styles.icon}
                  />
                </div>
              </div>
              <div className={styles.profileImage}>
                <img
                  src="/assets/icons/user.svg"
                  alt="Profile"
                  className={styles.profilePic}
                />
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className={styles.mainContent}>
            <div className={styles.contentWrapper}>
              {/* Hero Section */}
              <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                  <div className={styles.heroBackground}>
                    <img
                      src="/assets/images/hero-bg.svg"
                      alt="Hero Background"
                      className={styles.heroImage}
                    />
                    <div className={styles.heroTextContainer}>
                      <h1 className={styles.heroTitle}>
                        Hi, I'm Clara, a software developer
                      </h1>
                      <p className={styles.heroDescription}>
                        I'm a software developer based in San Francisco,
                        specializing in building exceptional digital
                        experiences. Currently, I'm focused on developing
                        accessible, human-centered products at a tech startup.
                      </p>
                    </div>
                    <button className={styles.ctaButton}>
                      <span className={styles.ctaText}>View my work</span>
                    </button>
                  </div>
                </div>
              </section>

              {/* Featured Projects Section */}
              <section className={styles.projectsSection}>
                <div className={styles.projectsContainer}>
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>
                    <p className={styles.sectionDescription}>
                      Explore some of my recent projects that showcase my skills
                      and experience in software development.
                    </p>
                  </div>
                  <div className={styles.projectsGrid}>
                    <div className={styles.projectCard}>
                      <img
                        src="/assets/images/project1.svg"
                        alt="Project Alpha"
                        className={styles.projectImage}
                      />
                      <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Alpha</h3>
                        <p className={styles.projectDescription}>
                          A web application for managing tasks and projects
                          efficiently.
                        </p>
                      </div>
                    </div>
                    <div className={styles.projectCard}>
                      <img
                        src="/assets/images/project2.svg"
                        alt="Project Beta"
                        className={styles.projectImage}
                      />
                      <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Beta</h3>
                        <p className={styles.projectDescription}>
                          A mobile app for tracking fitness activities and
                          health metrics.
                        </p>
                      </div>
                    </div>
                    <div className={styles.projectCard}>
                      <img
                        src="/assets/images/project3.svg"
                        alt="Project Gamma"
                        className={styles.projectImage}
                      />
                      <div className={styles.projectInfo}>
                        <h3 className={styles.projectTitle}>Project Gamma</h3>
                        <p className={styles.projectDescription}>
                          A platform for connecting professionals and sharing
                          industry insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Section */}
              <footer className={styles.footer}>
                <div className={styles.footerIcons}>
                  <img
                    src="/assets/icons/github.svg"
                    alt="GitHub"
                    className={styles.footerIcon}
                  />
                  <img
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    className={styles.footerIcon}
                  />
                  <img
                    src="/assets/icons/twitter.svg"
                    alt="Twitter"
                    className={styles.footerIcon}
                  />
                </div>
                <p className={styles.copyright}>
                  © 2024 Clara. All rights reserved.
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
