import React from "react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/projects.module.css";
import commonStyles from "../styles/common.module.css";

const projects = [
  {
    id: "ecommerce-microservices",
    title: "E-Commerce Microservices Platform",
    category: "Microservices",
    year: "2024",
    description:
      "A scalable microservices architecture serving 2M+ users with 99.9% uptime. Built with Node.js, Docker, and Kubernetes, featuring auto-scaling and event-driven communication.",
    tags: ["Node.js", "Docker", "Kubernetes", "Microservices", "AWS"],
    status: "Live",
    duration: "8 months",
    role: "Lead Developer",
    tech: "Node.js, TypeScript, Docker, Kubernetes, PostgreSQL, Redis",
  },
  {
    id: "realtime-analytics",
    title: "Real-time Analytics Dashboard",
    category: "Web Application",
    year: "2023",
    description:
      "A real-time analytics platform processing 10M+ events daily using React, WebSocket connections, and Apache Kafka. Reduced data processing latency by 75%.",
    tags: ["React", "TypeScript", "Apache Kafka", "WebSocket", "PostgreSQL"],
    status: "Live",
    duration: "6 months",
    role: "Full Stack Developer",
    tech: "React, TypeScript, Node.js, Apache Kafka, PostgreSQL",
  },
  {
    id: "ai-code-review",
    title: "AI-Powered Code Review Tool",
    category: "DevOps",
    year: "2023",
    description:
      "An automated code review system using machine learning algorithms and AST parsing. Integrated with GitHub Actions and reduced manual review time by 60%.",
    tags: ["Python", "Machine Learning", "GitHub Actions", "AST", "CI/CD"],
    status: "Live",
    duration: "4 months",
    role: "Backend Developer",
    tech: "Python, FastAPI, Machine Learning, GitHub Actions, Docker",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Automation",
    category: "DevOps",
    year: "2022",
    description:
      "Designed and implemented Infrastructure as Code using Terraform and AWS. Automated CI/CD pipelines reducing deployment time from hours to minutes.",
    tags: ["AWS", "Terraform", "CI/CD", "DevOps", "Infrastructure"],
    status: "Live",
    duration: "5 months",
    role: "DevOps Engineer",
    tech: "AWS, Terraform, Jenkins, Docker, Kubernetes",
  },
  {
    id: "blockchain-wallet",
    title: "Cryptocurrency Wallet API",
    category: "Blockchain",
    year: "2022",
    description:
      "A secure blockchain wallet API supporting multiple cryptocurrencies. Implemented advanced security measures and achieved SOC 2 compliance.",
    tags: ["Blockchain", "Security", "API", "Cryptography", "Node.js"],
    status: "Live",
    duration: "7 months",
    role: "Blockchain Developer",
    tech: "Node.js, Web3.js, Solidity, PostgreSQL, Redis",
  },
  {
    id: "social-media-api",
    title: "Social Media Platform API",
    category: "API",
    year: "2021",
    description:
      "A high-performance REST API serving 500K+ daily active users. Implemented efficient caching strategies and real-time notifications.",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "WebSocket"],
    status: "Live",
    duration: "9 months",
    role: "Backend Developer",
    tech: "Node.js, Express.js, MongoDB, Redis, Socket.io",
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.slice(0, 3);
  const allProjects = projects;

  return (
    <PageLayout currentPage="projects">
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroContent}>
          <h1 className={commonStyles.heroTitle}>My Projects</h1>
          <p className={commonStyles.heroDescription}>
            A collection of software engineering projects that showcase my
            approach to solving complex technical problems through scalable
            architecture, clean code, and innovative solutions.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10M+</span>
              <span className={styles.statLabel}>Users Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionDescription}>
          Explore my most impactful work that demonstrates scalable
          architecture, performance optimization, and engineering excellence.
        </p>
        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
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
                  <span className={styles.techText}>{project.tech}</span>
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
                  <span className={styles.cardTechText}>{project.tech}</span>
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
          <h2 className={styles.ctaTitle}>Let's Build Something Amazing</h2>
          <p className={styles.ctaDescription}>
            Have a technical challenge or software project in mind? I'd love to
            help bring your ideas to life with robust architecture and clean,
            scalable code.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Start a Project</button>
            <Link href="/about" className={styles.secondaryButton}>
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
