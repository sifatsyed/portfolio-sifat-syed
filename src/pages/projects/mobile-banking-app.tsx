import React from "react";
import Link from "next/link";
import styles from "../../styles/project-detail.module.css";
import homeIcon from "../../assets/icons/home.svg";
import globeIcon from "../../assets/icons/globe.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import userIcon from "../../assets/icons/user.svg";
import project1 from "../../assets/images/project1.svg";
import project2 from "../../assets/images/project2.svg";
import project3 from "../../assets/images/project3.svg";

export default function MobileBankingProject() {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          {/* Navigation Header */}
          <header className={styles.header}>
            <div className={styles.logoSection}>
              <div className={styles.logoIcon}>
                <img src={homeIcon} alt="Logo" className={styles.logoImage} />
              </div>
              <div className={styles.logoText}>Sophie's Portfolio</div>
            </div>
            <div className={styles.navSection}>
              <nav className={styles.navigation}>
                <Link href="/about" className={styles.navLink}>
                  About
                </Link>
                <Link href="/projects" className={styles.navLink}>
                  Projects
                </Link>
                <Link href="/experience" className={styles.navLink}>
                  Experience
                </Link>
                <div className={styles.navLink}>Contact</div>
              </nav>
              <div className={styles.headerActions}>
                <div className={styles.iconButton}>
                  <img src={globeIcon} alt="Globe" className={styles.icon} />
                </div>
                <img
                  src={userIcon}
                  alt="Profile"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className={styles.mainContent}>
            <div className={styles.contentWrapper}>
              {/* Back Navigation */}
              <div className={styles.backNav}>
                <Link href="/projects" className={styles.backLink}>
                  ← Back to Projects
                </Link>
              </div>

              {/* Project Hero */}
              <section className={styles.projectHero}>
                <div className={styles.heroContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.category}>Mobile App</span>
                    <span className={styles.year}>2023</span>
                    <span className={styles.status}>Live</span>
                  </div>
                  <h1 className={styles.projectTitle}>
                    Mobile Banking Redesign
                  </h1>
                  <p className={styles.projectDescription}>
                    Complete redesign of a banking mobile app that improved user
                    satisfaction by 45% and reduced support tickets by 30%
                    through enhanced UX and streamlined workflows.
                  </p>
                  <div className={styles.projectDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Role</span>
                      <span className={styles.detailValue}>
                        Senior Product Designer
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Duration</span>
                      <span className={styles.detailValue}>6 months</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Team</span>
                      <span className={styles.detailValue}>
                        2 designers, 4 developers, 1 PM
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Platform</span>
                      <span className={styles.detailValue}>iOS & Android</span>
                    </div>
                  </div>
                </div>
                <div className={styles.heroImage}>
                  <img
                    src={project2}
                    alt="Mobile Banking App"
                    className={styles.mainImage}
                  />
                </div>
              </section>

              {/* Project Overview */}
              <section className={styles.overviewSection}>
                <h2 className={styles.sectionTitle}>Project Overview</h2>
                <div className={styles.overviewContent}>
                  <div className={styles.overviewText}>
                    <h3 className={styles.subsectionTitle}>The Challenge</h3>
                    <p className={styles.bodyText}>
                      The existing banking app had a 2.3-star rating in app
                      stores with users complaining about complex navigation,
                      slow transaction processes, and confusing account
                      management features. Customer support was overwhelmed with
                      basic navigation questions.
                    </p>

                    <h3 className={styles.subsectionTitle}>The Solution</h3>
                    <p className={styles.bodyText}>
                      I led a complete UX overhaul focusing on simplifying core
                      user journeys, improving information architecture, and
                      creating intuitive interaction patterns. The redesign
                      prioritized speed, clarity, and accessibility while
                      maintaining security standards.
                    </p>
                  </div>
                  <div className={styles.impactStats}>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>45%</span>
                      <span className={styles.statLabel}>
                        User Satisfaction
                      </span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>30%</span>
                      <span className={styles.statLabel}>
                        Fewer Support Tickets
                      </span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>4.6★</span>
                      <span className={styles.statLabel}>App Store Rating</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Process Section */}
              <section className={styles.processSection}>
                <h2 className={styles.sectionTitle}>Design Process</h2>
                <div className={styles.processSteps}>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>01</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>User Research</h3>
                      <p className={styles.stepDescription}>
                        Conducted 20+ user interviews, analyzed app store
                        reviews, and performed usability testing to identify
                        major pain points and user needs.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>02</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>
                        Information Architecture
                      </h3>
                      <p className={styles.stepDescription}>
                        Redesigned the app structure, simplified navigation, and
                        created clear user flows for primary banking tasks like
                        transfers and bill payments.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>03</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>Design & Prototyping</h3>
                      <p className={styles.stepDescription}>
                        Created high-fidelity mockups and interactive
                        prototypes, focusing on accessibility, touch-friendly
                        interactions, and clear visual hierarchy.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>04</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>Testing & Iteration</h3>
                      <p className={styles.stepDescription}>
                        Conducted multiple rounds of usability testing, A/B
                        tested key features, and refined the design based on
                        user feedback and behavioral data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Key Improvements</h2>
                <div className={styles.featuresGrid}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🚀</div>
                    <h3 className={styles.featureTitle}>Quick Actions</h3>
                    <p className={styles.featureDescription}>
                      Streamlined dashboard with one-tap access to most common
                      tasks like transfers, bill pay, and balance checks.
                    </p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🔍</div>
                    <h3 className={styles.featureTitle}>Smart Search</h3>
                    <p className={styles.featureDescription}>
                      Intelligent search functionality that helps users find
                      transactions, accounts, and features using natural
                      language.
                    </p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>📊</div>
                    <h3 className={styles.featureTitle}>Spending Insights</h3>
                    <p className={styles.featureDescription}>
                      Visual spending analytics and budgeting tools that help
                      users understand their financial patterns.
                    </p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🔒</div>
                    <h3 className={styles.featureTitle}>Enhanced Security</h3>
                    <p className={styles.featureDescription}>
                      Biometric authentication and transaction verification
                      that's both secure and user-friendly.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visual Gallery */}
              <section className={styles.gallerySection}>
                <h2 className={styles.sectionTitle}>Design Gallery</h2>
                <div className={styles.imageGrid}>
                  <div className={styles.imageItem}>
                    <img
                      src={project3}
                      alt="Dashboard Redesign"
                      className={styles.galleryImage}
                    />
                    <p className={styles.imageCaption}>New Dashboard Design</p>
                  </div>
                  <div className={styles.imageItem}>
                    <img
                      src={project1}
                      alt="Transfer Flow"
                      className={styles.galleryImage}
                    />
                    <p className={styles.imageCaption}>
                      Simplified Transfer Flow
                    </p>
                  </div>
                  <div className={styles.imageItem}>
                    <img
                      src={project2}
                      alt="Spending Analytics"
                      className={styles.galleryImage}
                    />
                    <p className={styles.imageCaption}>Spending Analytics</p>
                  </div>
                </div>
              </section>

              {/* Learnings & Impact */}
              <section className={styles.learningsSection}>
                <h2 className={styles.sectionTitle}>Results & Learnings</h2>
                <div className={styles.learningsContent}>
                  <div className={styles.learningsText}>
                    <h3 className={styles.subsectionTitle}>Key Results</h3>
                    <ul className={styles.learningsList}>
                      <li>
                        User satisfaction increased from 2.3 to 4.6 stars in app
                        stores
                      </li>
                      <li>
                        Support ticket volume decreased by 30% within 3 months
                        of launch
                      </li>
                      <li>
                        Task completion rates improved by 60% for core banking
                        functions
                      </li>
                      <li>Daily active users increased by 25% post-launch</li>
                    </ul>

                    <h3 className={styles.subsectionTitle}>What I Learned</h3>
                    <ul className={styles.learningsList}>
                      <li>
                        The importance of progressive disclosure in complex
                        financial interfaces
                      </li>
                      <li>
                        How small micro-interactions can significantly improve
                        perceived performance
                      </li>
                      <li>
                        The value of accessibility testing with real users who
                        have disabilities
                      </li>
                      <li>
                        How to balance security requirements with user
                        experience needs
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Next Project */}
              <section className={styles.nextProjectSection}>
                <h2 className={styles.sectionTitle}>Next Project</h2>
                <Link
                  href="/projects/ai-dashboard"
                  className={styles.nextProjectCard}
                >
                  <div className={styles.nextProjectImage}>
                    <img src={project3} alt="AI Dashboard" />
                  </div>
                  <div className={styles.nextProjectContent}>
                    <span className={styles.nextProjectLabel}>
                      Next Project
                    </span>
                    <h3 className={styles.nextProjectTitle}>
                      AI Analytics Dashboard
                    </h3>
                    <p className={styles.nextProjectDescription}>
                      An intuitive dashboard for AI-powered analytics that
                      simplifies complex data
                    </p>
                    <span className={styles.nextProjectLink}>
                      View Project →
                    </span>
                  </div>
                </Link>
              </section>
            </div>
          </main>

          {/* Footer */}
          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <div className={styles.footerIcons}>
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className={styles.footerIcon}
                />
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className={styles.footerIcon}
                />
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className={styles.footerIcon}
                />
              </div>
              <p className={styles.copyright}>
                @2024 Sophie Carter. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
