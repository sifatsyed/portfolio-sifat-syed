import React from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/about.module.css";
import commonStyles from "../styles/common.module.css";

export default function AboutPage() {
  return (
    <PageLayout currentPage="about">
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={commonStyles.heroTitle}>Hi, I'm Sifat Syed</h1>
            <p className={styles.heroSubtitle}>
              Senior Software Engineer & System Architect
            </p>
            <p className={commonStyles.heroDescription}>
              I'm passionate about building scalable, maintainable software
              systems that solve real-world problems. With over 5 years of
              experience in full-stack development, I specialize in creating
              robust applications, designing efficient APIs, and implementing
              cloud-native solutions.
            </p>
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
        <h2 className={commonStyles.sectionTitle}>My Journey</h2>
        <div className={styles.storyContent}>
          <p className={styles.storyText}>
            My journey into software engineering began in college when I wrote
            my first "Hello World" program. What started as curiosity about how
            computers work evolved into a passion for creating solutions that
            impact millions of users.
          </p>
          <p className={styles.storyText}>
            I believe great software is not just about writing code—it's about
            understanding the problem deeply, designing elegant solutions, and
            building systems that can scale. Throughout my career, I've had the
            opportunity to work on everything from startup MVPs to
            enterprise-scale distributed systems.
          </p>
          <p className={styles.storyText}>
            When I'm not coding, you'll find me contributing to open source
            projects, reading about emerging technologies, or experimenting with
            new programming languages. I'm always excited to learn and push the
            boundaries of what's possible with technology.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={commonStyles.sectionAlt}>
        <h2 className={commonStyles.sectionTitle}>What Drives Me</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🚀</div>
            <h3 className={styles.valueTitle}>Performance & Scalability</h3>
            <p className={styles.valueDescription}>
              I'm obsessed with writing efficient code and designing systems
              that can handle growth. Every line of code should serve a purpose
              and contribute to the overall system performance.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🔧</div>
            <h3 className={styles.valueTitle}>Clean Architecture</h3>
            <p className={styles.valueDescription}>
              I believe in writing code that's not just functional, but also
              maintainable, testable, and easy to understand. Clean architecture
              principles guide every design decision I make.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3 className={styles.valueTitle}>Collaboration</h3>
            <p className={styles.valueDescription}>
              Great software is built by great teams. I thrive in collaborative
              environments where knowledge sharing, code reviews, and pair
              programming are part of the culture.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>📈</div>
            <h3 className={styles.valueTitle}>Continuous Learning</h3>
            <p className={styles.valueDescription}>
              Technology evolves rapidly, and I'm committed to staying current.
              Whether it's learning a new framework, attending conferences, or
              reading research papers, I never stop learning.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className={styles.funFactsSection}>
        <h2 className={styles.sectionTitle}>Fun Facts About Me</h2>
        <div className={styles.factsGrid}>
          <div className={styles.factItem}>
            <span className={styles.factEmoji}>☕</span>
            <span className={styles.factText}>
              I've debugged more issues fueled by coffee than I care to count
            </span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factEmoji}>📚</span>
            <span className={styles.factText}>
              I read at least 2 technical books every month
            </span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factEmoji}>🎮</span>
            <span className={styles.factText}>
              I built my first game in Python when I was 16
            </span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factEmoji}>🌱</span>
            <span className={styles.factText}>
              I contribute to open source projects in my spare time
            </span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factEmoji}>🏃‍♂️</span>
            <span className={styles.factText}>
              I've participated in 5 hackathons and won 3 of them
            </span>
          </div>
          <div className={styles.factItem}>
            <span className={styles.factEmoji}>🎨</span>
            <span className={styles.factText}>
              I enjoy creating side projects that solve everyday problems
            </span>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <div className={styles.skillsCategories}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Backend</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>Node.js</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Java</span>
              <span className={styles.skillTag}>Go</span>
              <span className={styles.skillTag}>Express.js</span>
              <span className={styles.skillTag}>FastAPI</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Frontend</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>React</span>
              <span className={styles.skillTag}>TypeScript</span>
              <span className={styles.skillTag}>Next.js</span>
              <span className={styles.skillTag}>Vue.js</span>
              <span className={styles.skillTag}>TailwindCSS</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Database</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>PostgreSQL</span>
              <span className={styles.skillTag}>MongoDB</span>
              <span className={styles.skillTag}>Redis</span>
              <span className={styles.skillTag}>Elasticsearch</span>
            </div>
          </div>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Cloud & DevOps</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>AWS</span>
              <span className={styles.skillTag}>Docker</span>
              <span className={styles.skillTag}>Kubernetes</span>
              <span className={styles.skillTag}>Terraform</span>
              <span className={styles.skillTag}>GitHub Actions</span>
              <span className={styles.skillTag}>Jenkins</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Let's Build Something Amazing Together
          </h2>
          <p className={styles.ctaDescription}>
            I'm always excited to work on challenging projects and collaborate
            with talented teams. Whether you have a complex problem to solve or
            want to discuss the latest in tech, I'd love to connect.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Get In Touch</button>
            <button className={styles.secondaryButton}>View My Projects</button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
