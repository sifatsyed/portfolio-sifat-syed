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

export default function AIDashboardProject() {
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
                    <span className={styles.category}>Web Application</span>
                    <span className={styles.year}>2023</span>
                    <span className={styles.status}>Live</span>
                  </div>
                  <h1 className={styles.projectTitle}>
                    AI Analytics Dashboard
                  </h1>
                  <p className={styles.projectDescription}>
                    An intuitive dashboard for AI-powered analytics that helps
                    businesses make data-driven decisions with complex machine
                    learning insights made simple.
                  </p>
                  <div className={styles.projectDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Role</span>
                      <span className={styles.detailValue}>
                        Product Designer
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Duration</span>
                      <span className={styles.detailValue}>4 months</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Team</span>
                      <span className={styles.detailValue}>
                        3 designers, 5 developers, 2 data scientists
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Platform</span>
                      <span className={styles.detailValue}>Web SaaS</span>
                    </div>
                  </div>
                </div>
                <div className={styles.heroImage}>
                  <img
                    src={project3}
                    alt="AI Analytics Dashboard"
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
                      Business users struggled to interpret complex AI-generated
                      insights and predictions. The existing tool required deep
                      technical knowledge and provided overwhelming amounts of
                      data without clear actionable recommendations.
                    </p>

                    <h3 className={styles.subsectionTitle}>The Solution</h3>
                    <p className={styles.bodyText}>
                      I designed an intelligent dashboard that translates
                      complex AI outputs into clear, actionable insights. The
                      interface prioritizes storytelling through data,
                      progressive disclosure, and personalized recommendations
                      based on user roles and business context.
                    </p>
                  </div>
                  <div className={styles.impactStats}>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>70%</span>
                      <span className={styles.statLabel}>
                        Faster Decision Making
                      </span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>85%</span>
                      <span className={styles.statLabel}>
                        User Adoption Rate
                      </span>
                    </div>
                    <div className={styles.statCard}>
                      <span className={styles.statNumber}>40%</span>
                      <span className={styles.statLabel}>
                        Reduced Training Time
                      </span>
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
                      <h3 className={styles.stepTitle}>
                        User & Domain Research
                      </h3>
                      <p className={styles.stepDescription}>
                        Interviewed business analysts, data scientists, and
                        executives to understand how AI insights are currently
                        used and what barriers exist to adoption.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>02</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>Information Design</h3>
                      <p className={styles.stepDescription}>
                        Worked with data scientists to understand AI model
                        outputs and designed visual representations that
                        communicate confidence levels and predictions clearly.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>03</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>
                        Interactive Prototyping
                      </h3>
                      <p className={styles.stepDescription}>
                        Created high-fidelity prototypes with real data
                        scenarios to test comprehension and validate design
                        decisions with target users.
                      </p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>04</div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>
                        Launch & Optimization
                      </h3>
                      <p className={styles.stepDescription}>
                        Deployed with comprehensive onboarding, gathered usage
                        analytics, and continuously refined based on user
                        behavior patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section className={styles.featuresSection}>
                <h2 className={styles.sectionTitle}>Key Features</h2>
                <div className={styles.featuresGrid}>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🧠</div>
                    <h3 className={styles.featureTitle}>Smart Insights</h3>
                    <p className={styles.featureDescription}>
                      AI-generated insights presented in plain language with
                      confidence scores and recommended actions for business
                      users.
                    </p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>📈</div>
                    <h3 className={styles.featureTitle}>
                      Predictive Analytics
                    </h3>
                    <p className={styles.featureDescription}>
                      Future trend predictions with interactive scenario
                      modeling and what-if analysis capabilities.
                    </p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🎯</div>
                    <h3 className={styles.featureTitle}>Personalized Views</h3>
                    <p className={styles.featureDescription}>
                      Role-based dashboards that surface the most relevant
                      metrics and insights for each user's responsibilities.
                    </p>
                  </div>
                  <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🔗</div>
                    <h3 className={styles.featureTitle}>Collaborative Tools</h3>
                    <p className={styles.featureDescription}>
                      Built-in annotation, sharing, and discussion features to
                      facilitate data-driven team decision making.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visual Gallery */}
              <section className={styles.gallerySection}>
                <h2 className={styles.sectionTitle}>Design Showcase</h2>
                <div className={styles.imageGrid}>
                  <div className={styles.imageItem}>
                    <img
                      src={project1}
                      alt="Main Dashboard"
                      className={styles.galleryImage}
                    />
                    <p className={styles.imageCaption}>
                      Main Analytics Dashboard
                    </p>
                  </div>
                  <div className={styles.imageItem}>
                    <img
                      src={project2}
                      alt="Predictive Models"
                      className={styles.galleryImage}
                    />
                    <p className={styles.imageCaption}>
                      Predictive Model Visualization
                    </p>
                  </div>
                  <div className={styles.imageItem}>
                    <img
                      src={project3}
                      alt="Insights Panel"
                      className={styles.galleryImage}
                    />
                    <p className={styles.imageCaption}>
                      AI Insights & Recommendations
                    </p>
                  </div>
                </div>
              </section>

              {/* Learnings & Impact */}
              <section className={styles.learningsSection}>
                <h2 className={styles.sectionTitle}>Impact & Insights</h2>
                <div className={styles.learningsContent}>
                  <div className={styles.learningsText}>
                    <h3 className={styles.subsectionTitle}>Business Impact</h3>
                    <ul className={styles.learningsList}>
                      <li>
                        Reduced decision-making time from days to hours for
                        data-driven choices
                      </li>
                      <li>
                        Increased AI tool adoption from 30% to 85% across
                        business teams
                      </li>
                      <li>Decreased onboarding time for new users by 40%</li>
                      <li>
                        Generated $2M in cost savings through improved
                        operational decisions
                      </li>
                    </ul>

                    <h3 className={styles.subsectionTitle}>Design Learnings</h3>
                    <ul className={styles.learningsList}>
                      <li>
                        The importance of explaining AI confidence levels and
                        model limitations
                      </li>
                      <li>
                        How progressive disclosure helps users build trust with
                        AI recommendations
                      </li>
                      <li>
                        The value of storytelling in data visualization for
                        business contexts
                      </li>
                      <li>
                        How personalization dramatically improves adoption of
                        complex tools
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Next Project */}
              <section className={styles.nextProjectSection}>
                <h2 className={styles.sectionTitle}>Next Project</h2>
                <Link
                  href="/projects/designsystem-2024"
                  className={styles.nextProjectCard}
                >
                  <div className={styles.nextProjectImage}>
                    <img src={project1} alt="Design System" />
                  </div>
                  <div className={styles.nextProjectContent}>
                    <span className={styles.nextProjectLabel}>
                      Next Project
                    </span>
                    <h3 className={styles.nextProjectTitle}>
                      Enterprise Design System
                    </h3>
                    <p className={styles.nextProjectDescription}>
                      A comprehensive design system that unified 15+ products
                      and reduced design debt
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
