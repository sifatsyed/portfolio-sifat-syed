import React from "react";
import Image from "next/image";
import styles from "../styles/alex.module.css";
import { useEffect, useState } from 'react';

export default function Alex() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <div className={styles.logoIcon} />
              <div className={styles.logoText}>Portfolio</div>
            </div>
            <div className={styles.navigation}>
              <div className={styles.navItems}>
                <div className={styles.navItem}>About</div>
                <div className={styles.navItem}>Projects</div>
                <div className={styles.navItem}>Contact</div>
              </div>
              <div className={styles.resumeButton}>
                <div className={styles.resumeText}>Resume</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            {/* Hero Section */}
            <div className={styles.heroSection}>
              <div className={styles.heroContainer}>
                <div className={styles.heroBackground}>
                  <Image
                    src="/src/assets/images/hero-bg.svg"
                    alt="Hero background"
                    fill
                    className={styles.heroImage}
                  />
                  <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                      <div className={styles.heroTitle}>
                        Hi, I'm Alex, a Product Designer
                      </div>
                      <div className={styles.heroDescription}>
                        I design intuitive and user-centered digital
                        experiences. Explore my portfolio to see my work and
                        design philosophy.
                      </div>
                    </div>
                    <div className={styles.viewProjectsButton}>
                      <div className={styles.viewProjectsText}>
                        View Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className={styles.projectsSection}>
              <div className={styles.projectsGrid}>
                <div className={styles.projectItem}>
                  <Image
                    src="/src/assets/images/project1.svg"
                    alt="Project 1"
                    width={241}
                    height={241}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectItem}>
                  <Image
                    src="/src/assets/images/project2.svg"
                    alt="Project 2"
                    width={241}
                    height={241}
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.projectItem}>
                  <Image
                    src="/src/assets/images/project3.svg"
                    alt="Project 3"
                    width={241}
                    height={241}
                    className={styles.projectImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.footerWrapper}>
            <div className={styles.footerContent}>
              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}>
                  <Image
                    src="/src/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className={styles.socialIconImage}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/src/assets/icons/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className={styles.socialIconImage}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/src/assets/icons/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className={styles.socialIconImage}
                  />
                </div>
              </div>
              <div className={styles.copyright}>
                @2024 Alex Portfolio. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
