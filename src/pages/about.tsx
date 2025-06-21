import React from "react";
import styles from "../styles/about.module.css";
import homeIcon from "../assets/icons/home.svg";
import globeIcon from "../assets/icons/globe.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import mailIcon from "../assets/icons/mail.svg";
import userIcon from "../assets/icons/user.svg";

export default function AboutPage() {
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
                <div className={styles.navLink}>About</div>
                <div className={styles.navLink}>Projects</div>
                <div className={styles.navLink}>Experience</div>
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
              {/* Hero Section */}
              <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                  <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>Hi, I'm Sophie Carter</h1>
                    <p className={styles.heroSubtitle}>
                      Senior Product Designer & Creative Problem Solver
                    </p>
                    <p className={styles.heroDescription}>
                      I'm passionate about creating meaningful digital
                      experiences that solve real problems. With over 6 years of
                      experience in product design, I specialize in turning
                      complex challenges into intuitive, user-centered
                      solutions.
                    </p>
                  </div>
                  <div className={styles.heroImage}>
                    <div className={styles.profileImageLarge}>
                      <img
                        src={userIcon}
                        alt="Sophie Carter"
                        className={styles.profilePic}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Story Section */}
              <section className={styles.storySection}>
                <h2 className={styles.sectionTitle}>My Story</h2>
                <div className={styles.storyContent}>
                  <p className={styles.storyText}>
                    My journey into design began during my college years when I
                    discovered the perfect intersection between creativity and
                    technology. What started as a curiosity about how digital
                    products work evolved into a passion for making them better.
                  </p>
                  <p className={styles.storyText}>
                    I believe great design is invisible—it solves problems so
                    elegantly that users don't have to think about it.
                    Throughout my career, I've had the privilege of working with
                    amazing teams to create products that millions of people use
                    every day.
                  </p>
                  <p className={styles.storyText}>
                    When I'm not designing, you'll find me exploring local
                    coffee shops, reading design books, or experimenting with
                    new creative tools. I'm always eager to learn and push the
                    boundaries of what's possible in design.
                  </p>
                </div>
              </section>

              {/* Values Section */}
              <section className={styles.valuesSection}>
                <h2 className={styles.sectionTitle}>What Drives Me</h2>
                <div className={styles.valuesGrid}>
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>🎨</div>
                    <h3 className={styles.valueTitle}>User-Centered Design</h3>
                    <p className={styles.valueDescription}>
                      Every design decision starts with understanding the user's
                      needs, goals, and pain points. I believe in creating
                      experiences that feel natural and intuitive.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>🚀</div>
                    <h3 className={styles.valueTitle}>Innovation</h3>
                    <p className={styles.valueDescription}>
                      I love exploring new design patterns, emerging
                      technologies, and creative solutions that push the
                      boundaries of what's possible.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>🤝</div>
                    <h3 className={styles.valueTitle}>Collaboration</h3>
                    <p className={styles.valueDescription}>
                      Great products are built by great teams. I thrive in
                      collaborative environments where diverse perspectives come
                      together to solve problems.
                    </p>
                  </div>
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>📈</div>
                    <h3 className={styles.valueTitle}>Impact</h3>
                    <p className={styles.valueDescription}>
                      I'm motivated by creating designs that make a real
                      difference—whether that's improving conversion rates or
                      making someone's day a little easier.
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
                      I've tried coffee from over 30 different countries
                    </span>
                  </div>
                  <div className={styles.factItem}>
                    <span className={styles.factEmoji}>📚</span>
                    <span className={styles.factText}>
                      I read at least 2 design books every month
                    </span>
                  </div>
                  <div className={styles.factItem}>
                    <span className={styles.factEmoji}>🎸</span>
                    <span className={styles.factText}>
                      I play guitar and write songs in my spare time
                    </span>
                  </div>
                  <div className={styles.factItem}>
                    <span className={styles.factEmoji}>🌱</span>
                    <span className={styles.factText}>
                      I have a small indoor garden with 15+ plants
                    </span>
                  </div>
                  <div className={styles.factItem}>
                    <span className={styles.factEmoji}>🏃‍♀️</span>
                    <span className={styles.factText}>
                      I've completed 3 marathons and counting
                    </span>
                  </div>
                  <div className={styles.factItem}>
                    <span className={styles.factEmoji}>🎨</span>
                    <span className={styles.factText}>
                      I collect vintage design posters from the 1960s
                    </span>
                  </div>
                </div>
              </section>

              {/* Skills & Tools */}
              <section className={styles.skillsSection}>
                <h2 className={styles.sectionTitle}>Skills & Tools</h2>
                <div className={styles.skillsCategories}>
                  <div className={styles.skillCategory}>
                    <h3 className={styles.categoryTitle}>Design</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>UI/UX Design</span>
                      <span className={styles.skillTag}>Visual Design</span>
                      <span className={styles.skillTag}>
                        Interaction Design
                      </span>
                      <span className={styles.skillTag}>Design Systems</span>
                      <span className={styles.skillTag}>Branding</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h3 className={styles.categoryTitle}>Research</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>User Research</span>
                      <span className={styles.skillTag}>Usability Testing</span>
                      <span className={styles.skillTag}>A/B Testing</span>
                      <span className={styles.skillTag}>Analytics</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h3 className={styles.categoryTitle}>Tools</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>Figma</span>
                      <span className={styles.skillTag}>Sketch</span>
                      <span className={styles.skillTag}>
                        Adobe Creative Suite
                      </span>
                      <span className={styles.skillTag}>Principle</span>
                      <span className={styles.skillTag}>Framer</span>
                    </div>
                  </div>
                  <div className={styles.skillCategory}>
                    <h3 className={styles.categoryTitle}>Development</h3>
                    <div className={styles.skillTags}>
                      <span className={styles.skillTag}>HTML/CSS</span>
                      <span className={styles.skillTag}>JavaScript</span>
                      <span className={styles.skillTag}>React</span>
                      <span className={styles.skillTag}>Design Tokens</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                  <h2 className={styles.ctaTitle}>
                    Let's Create Something Amazing Together
                  </h2>
                  <p className={styles.ctaDescription}>
                    I'm always excited to work on new projects and collaborate
                    with passionate teams. Whether you have a project in mind or
                    just want to chat about design, I'd love to hear from you.
                  </p>
                  <div className={styles.ctaButtons}>
                    <button className={styles.primaryButton}>
                      Get In Touch
                    </button>
                    <button className={styles.secondaryButton}>
                      View My Work
                    </button>
                  </div>
                </div>
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
