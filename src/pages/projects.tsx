import React from "react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/projects.module.css";
import commonStyles from "../styles/common.module.css";
import { projectsContent } from "../content/projects";

export default function ProjectsPage() {
  const { hero, featured, allProjects, cta } = projectsContent;

  return (
    <PageLayout currentPage="projects">
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroContent}>
          <h1 className={commonStyles.heroTitle}>{hero.title}</h1>
          <p className={commonStyles.heroDescription}>{hero.description}</p>
          <div className={styles.heroStats}>
            {hero.stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>{featured.title}</h2>
        <p className={styles.sectionDescription}>{featured.description}</p>
        <div className={styles.featuredGrid}>
          {featured.projects.map((project) => (
            <div key={project.id} className={styles.featuredCard}>
              <div className={styles.projectImageContainer}>
                <div className={styles.projectImagePlaceholder}>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="2.18"
                      ry="2.18"
                    />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="2" y1="7" x2="7" y2="7" />
                    <line x1="2" y1="17" x2="7" y2="17" />
                    <line x1="17" y1="17" x2="22" y2="17" />
                    <line x1="17" y1="7" x2="22" y2="7" />
                  </svg>
                </div>
                <div className={styles.projectOverlay}>
                  <span className={styles.viewProject}>View Details →</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectCategory}>
                    {project.category}
                  </span>
                  <span className={styles.projectYear}>{project.year}</span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.techStack}>
                  <span className={styles.techLabel}>Tech Stack:</span>
                  <span className={styles.techText}>{project.techStack}</span>
                </div>
                <div className={styles.projectTags}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Projects Grid */}
      <section className={styles.allProjectsSection}>
        <h2 className={styles.sectionTitle}>All Projects</h2>
        <div className={styles.projectsGrid}>
          {allProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardImageContainer}>
                <div className={styles.cardImagePlaceholder}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className={styles.cardOverlay}>
                  <div className={styles.projectDetails}>
                    <span className={styles.duration}>{project.duration}</span>
                    <span className={styles.role}>{project.role}</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>
                      {project.category}
                    </span>
                    <span className={styles.cardStatus}>{project.status}</span>
                  </div>
                  <span className={styles.cardYear}>{project.year}</span>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardTechStack}>
                  <span className={styles.techLabel}>Stack:</span>
                  <span className={styles.cardTechText}>
                    {project.techStack}
                  </span>
                </div>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{cta.title}</h2>
          <p className={styles.ctaDescription}>{cta.description}</p>
          <div className={styles.ctaButtons}>
            {cta.buttons.map((button, index) =>
              button.href ? (
                <Link
                  key={index}
                  href={button.href}
                  className={
                    button.type === "primary"
                      ? styles.primaryButton
                      : styles.secondaryButton
                  }
                >
                  {button.text}
                </Link>
              ) : (
                <button
                  key={index}
                  className={
                    button.type === "primary"
                      ? styles.primaryButton
                      : styles.secondaryButton
                  }
                >
                  {button.text}
                </button>
              ),
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
