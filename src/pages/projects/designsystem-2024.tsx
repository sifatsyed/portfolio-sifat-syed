import React from "react";
import Link from "next/link";
import ProjectDetailLayout from "../../components/ProjectDetailLayout";
import styles from "../../styles/project-detail.module.css";
import commonStyles from "../../styles/common.module.css";
import project1 from "../../assets/images/project1.svg";
import project2 from "../../assets/images/project2.svg";
import project3 from "../../assets/images/project3.svg";

export default function DesignSystemProject() {
  return (
    <ProjectDetailLayout>
      {/* Project Hero */}
      <section className={styles.projectHero}>
        <div className={styles.heroContent}>
          <div className={styles.projectMeta}>
            <span className={styles.category}>Design Systems</span>
            <span className={styles.year}>2024</span>
            <span className={styles.status}>Live</span>
          </div>
          <h1 className={styles.projectTitle}>Enterprise Design System</h1>
          <p className={styles.projectDescription}>
            A comprehensive design system that unified the visual language
            across 15+ products, reducing design debt by 60% and increasing
            development velocity by 40%.
          </p>
          <div className={styles.projectDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Role</span>
              <span className={styles.detailValue}>Lead Designer</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Duration</span>
              <span className={styles.detailValue}>8 months</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Team</span>
              <span className={styles.detailValue}>
                4 designers, 6 developers
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Platform</span>
              <span className={styles.detailValue}>Web, Mobile, Desktop</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={project1}
            alt="Design System"
            className={styles.mainImage}
          />
        </div>
      </section>

      {/* Project Overview */}
      <section className={commonStyles.sectionAlt}>
        <h2 className={commonStyles.sectionTitle}>Project Overview</h2>
        <div className={styles.overviewContent}>
          <div className={styles.overviewText}>
            <h3 className={styles.subsectionTitle}>The Challenge</h3>
            <p className={styles.bodyText}>
              Tech Innovators Inc. had grown rapidly, resulting in 15+ products
              with inconsistent design patterns, conflicting user experiences,
              and significant design debt. Development teams were spending 40%
              of their time recreating components, and user research showed
              confusion due to inconsistent interfaces.
            </p>

            <h3 className={styles.subsectionTitle}>The Solution</h3>
            <p className={styles.bodyText}>
              I led the creation of a comprehensive design system that would
              serve as the single source of truth for all product teams. This
              included a component library, design tokens, documentation site,
              and governance model to ensure consistent implementation across
              all platforms.
            </p>
          </div>
          <div className={styles.impactStats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>60%</span>
              <span className={styles.statLabel}>Design Debt Reduction</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>40%</span>
              <span className={styles.statLabel}>Faster Development</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Products Unified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={commonStyles.section}>
        <h2 className={commonStyles.sectionTitle}>Design Process</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Research & Audit</h3>
              <p className={styles.stepDescription}>
                Conducted comprehensive audit of existing products, interviewed
                25+ team members, and documented inconsistencies across
                platforms.
              </p>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Foundation & Tokens</h3>
              <p className={styles.stepDescription}>
                Established design tokens for colors, typography, spacing, and
                elevation. Created semantic naming conventions for scalable
                implementation.
              </p>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Component Library</h3>
              <p className={styles.stepDescription}>
                Built 50+ reusable components with comprehensive documentation,
                usage guidelines, and accessibility standards.
              </p>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Implementation & Governance</h3>
              <p className={styles.stepDescription}>
                Rolled out across teams with training sessions, established
                governance model, and created feedback loops for continuous
                improvement.
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
            <div className={styles.featureIcon}>🎨</div>
            <h3 className={styles.featureTitle}>Design Tokens</h3>
            <p className={styles.featureDescription}>
              Semantic design tokens system that ensures consistency across all
              platforms and enables easy theming and customization.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧩</div>
            <h3 className={styles.featureTitle}>Component Library</h3>
            <p className={styles.featureDescription}>
              50+ production-ready components with variants, states, and
              comprehensive documentation for designers and developers.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📚</div>
            <h3 className={styles.featureTitle}>Documentation Site</h3>
            <p className={styles.featureDescription}>
              Interactive documentation with live examples, usage guidelines,
              and best practices for implementation.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>♿</div>
            <h3 className={styles.featureTitle}>Accessibility First</h3>
            <p className={styles.featureDescription}>
              WCAG 2.1 AA compliant components with keyboard navigation, screen
              reader support, and color contrast validation.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Visual Gallery</h2>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <img
              src={project2}
              alt="Component Library"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>Component Library Overview</p>
          </div>
          <div className={styles.imageItem}>
            <img
              src={project3}
              alt="Design Tokens"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>Design Tokens System</p>
          </div>
          <div className={styles.imageItem}>
            <img
              src={project1}
              alt="Documentation"
              className={styles.galleryImage}
            />
            <p className={styles.imageCaption}>Documentation Portal</p>
          </div>
        </div>
      </section>

      {/* Learnings & Impact */}
      <section className={styles.learningsSection}>
        <h2 className={styles.sectionTitle}>Key Learnings & Impact</h2>
        <div className={styles.learningsContent}>
          <div className={styles.learningsText}>
            <h3 className={styles.subsectionTitle}>What I Learned</h3>
            <ul className={styles.learningsList}>
              <li>
                The importance of stakeholder buy-in and early collaboration
                across teams
              </li>
              <li>
                How governance models are crucial for long-term adoption and
                success
              </li>
              <li>
                The value of starting small and iterating based on real team
                feedback
              </li>
              <li>Documentation is as important as the design system itself</li>
            </ul>

            <h3 className={styles.subsectionTitle}>Business Impact</h3>
            <ul className={styles.learningsList}>
              <li>
                Reduced design and development time by 40% across all product
                teams
              </li>
              <li>Improved user experience consistency scores by 75%</li>
              <li>Decreased design QA issues by 65%</li>
              <li>Enabled faster product launches and feature delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className={styles.nextProjectSection}>
        <h2 className={styles.sectionTitle}>Next Project</h2>
        <Link
          href="/projects/mobile-banking-app"
          className={styles.nextProjectCard}
        >
          <div className={styles.nextProjectImage}>
            <img src={project2} alt="Mobile Banking App" />
          </div>
          <div className={styles.nextProjectContent}>
            <span className={styles.nextProjectLabel}>Next Project</span>
            <h3 className={styles.nextProjectTitle}>Mobile Banking Redesign</h3>
            <p className={styles.nextProjectDescription}>
              Complete redesign of a banking mobile app that improved user
              satisfaction by 45%
            </p>
            <span className={styles.nextProjectLink}>View Project →</span>
          </div>
        </Link>
      </section>
    </ProjectDetailLayout>
  );
}
