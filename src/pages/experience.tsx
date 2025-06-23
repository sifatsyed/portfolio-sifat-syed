import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/experience.module.css";
import commonStyles from "../styles/common.module.css";
import { experienceContent } from "../content/experience";

export default function ExperiencePage() {
  const { header, experiences, skills, certifications, education } =
    experienceContent;

  return (
    <PageLayout currentPage="experience">
      {/* Experience Header */}
      <section className={styles.experienceHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>{header.title}</h1>
          <p className={styles.pageDescription}>{header.description}</p>
        </div>
      </section>

      {/* Experience Timeline */}
      <div className={styles.experienceTimeline}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceItem}>
            <h2 className={styles.companyName}>{experience.company}</h2>
            <div className={styles.roleInfo}>
              {experience.role} | {experience.period}
            </div>
            <p className={styles.roleDescription}>{experience.description}</p>
            <div className={styles.achievements}>
              <h4>Key Achievements:</h4>
              <ul>
                {experience.achievements.map(
                  (achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ),
                )}
              </ul>
            </div>
            <div className={styles.skillTags}>
              {experience.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.skillTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Technical Skills Section */}
        <div className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>{skills.title}</h2>
          <div className={styles.skillsGrid}>
            {skills.technologies.map((tech, index) => (
              <span key={index} className={styles.skillTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={styles.certificationsSection}>
          <h2 className={styles.skillsTitle}>{certifications.title}</h2>
          <div className={styles.certificationsList}>
            {certifications.items.map((cert, index) => (
              <div key={index} className={styles.certificationItem}>
                <h3>{cert.name}</h3>
                <p>
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={styles.educationSection}>
          <h2 className={styles.skillsTitle}>{education.title}</h2>
          <div className={styles.educationItem}>
            <h3>{education.degree}</h3>
            <p>
              {education.school} • {education.period}
            </p>
            {education.details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
