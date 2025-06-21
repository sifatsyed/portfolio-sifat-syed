import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/experience.module.css";
import commonStyles from "../styles/common.module.css";

export default function ExperiencePage() {
  return (
    <PageLayout currentPage="experience">
      {/* Experience Header */}
      <section className={styles.experienceHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Experience</h1>
          <p className={styles.pageDescription}>
            A timeline of my professional journey, highlighting key roles and
            achievements.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <div className={styles.experienceTimeline}>
        {/* Tech Innovators Inc. */}
        <div className={styles.experienceItem}>
          <h2 className={styles.companyName}>Tech Innovators Inc.</h2>
          <div className={styles.roleInfo}>
            Senior Product Designer | 2020 - Present
          </div>
          <p className={styles.roleDescription}>
            Led design for a major product overhaul, resulting in a 30% increase
            in user engagement. Collaborated with cross-functional teams to
            define product strategy and roadmap. Mentored junior designers and
            fostered a culture of design excellence.
          </p>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>UI/UX Design</span>
            <span className={styles.skillTag}>Interaction Design</span>
            <span className={styles.skillTag}>Product Strategy</span>
            <span className={styles.skillTag}>Design Systems</span>
            <span className={styles.skillTag}>Figma</span>
            <span className={styles.skillTag}>Agile Methodologies</span>
          </div>
        </div>

        {/* Creative Solutions Co. */}
        <div className={styles.experienceItem}>
          <h2 className={styles.companyName}>Creative Solutions Co.</h2>
          <div className={styles.roleInfo}>Product Designer | 2018 - 2020</div>
          <p className={styles.roleDescription}>
            Designed and launched a new mobile app that received positive user
            reviews and a 4.5-star rating. Conducted user research and usability
            testing to inform design decisions. Created wireframes, prototypes,
            and high-fidelity mockups.
          </p>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>User Research</span>
            <span className={styles.skillTag}>Prototyping</span>
            <span className={styles.skillTag}>Wireframing</span>
            <span className={styles.skillTag}>Visual Design</span>
            <span className={styles.skillTag}>Sketch</span>
            <span className={styles.skillTag}>Adobe Creative Suite</span>
          </div>
        </div>

        {/* Design Dynamics Ltd. */}
        <div className={styles.experienceItem}>
          <h2 className={styles.companyName}>Design Dynamics Ltd.</h2>
          <div className={styles.roleInfo}>Junior Designer | 2016 - 2018</div>
          <p className={styles.roleDescription}>
            Supported senior designers in various projects, including website
            redesigns and branding initiatives. Developed design assets and
            style guides. Gained experience in user interface and user
            experience design principles.
          </p>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>UI/UX Design</span>
            <span className={styles.skillTag}>Visual Design</span>
            <span className={styles.skillTag}>Adobe Creative Suite</span>
            <span className={styles.skillTag}>Wireframing</span>
            <span className={styles.skillTag}>Prototyping</span>
            <span className={styles.skillTag}>Interaction Design</span>
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            <span className={styles.skillTag}>UI/UX Design</span>
            <span className={styles.skillTag}>Interaction Design</span>
            <span className={styles.skillTag}>User Research</span>
            <span className={styles.skillTag}>Prototyping</span>
            <span className={styles.skillTag}>Wireframing</span>
            <span className={styles.skillTag}>Design Systems</span>
            <span className={styles.skillTag}>Figma</span>
            <span className={styles.skillTag}>Sketch</span>
            <span className={styles.skillTag}>Adobe Creative Suite</span>
            <span className={styles.skillTag}>Agile Methodologies</span>
            <span className={styles.skillTag}>Product Strategy</span>
            <span className={styles.skillTag}>Visual Design</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
