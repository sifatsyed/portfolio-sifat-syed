import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/about.module.css";
import commonStyles from "../styles/common.module.css";
import { aboutContent } from "../content/about";

export default function AboutPage() {
  const { hero, story, values, funFacts, skills, cta } = aboutContent;

  return (
    <PageLayout currentPage="about">
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={commonStyles.heroTitle}>{hero.name}</h1>
            <p className={styles.heroSubtitle}>{hero.title}</p>
            <p className={commonStyles.heroDescription}>{hero.description}</p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.profileImageLarge}>
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.profilePic}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={commonStyles.section}>
        <h2 className={commonStyles.sectionTitle}>{story.title}</h2>
        <div className={styles.storyContent}>
          {story.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.storyText}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className={commonStyles.sectionAlt}>
        <h2 className={commonStyles.sectionTitle}>{values.title}</h2>
        <div className={styles.valuesGrid}>
          {values.items.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className={styles.funFactsSection}>
        <h2 className={styles.sectionTitle}>{funFacts.title}</h2>
        <div className={styles.factsGrid}>
          {funFacts.items.map((fact, index) => (
            <div key={index} className={styles.factItem}>
              <span className={styles.factEmoji}>{fact.emoji}</span>
              <span className={styles.factText}>{fact.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>{skills.title}</h2>
        <div className={styles.skillsCategories}>
          {skills.categories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
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
            {cta.buttons.map((button, index) => (
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
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
