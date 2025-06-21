import React from "react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import styles from "../styles/projects.module.css";
import commonStyles from "../styles/common.module.css";
import project1 from "../assets/images/project1.svg";
import project2 from "../assets/images/project2.svg";
import project3 from "../assets/images/project3.svg";

const projects = [
  {
    id: "designsystem-2024",
    title: "Enterprise Design System",
    category: "Design Systems",
    year: "2024",
    description:
      "A comprehensive design system that unified the visual language across 15+ products, reducing design debt by 60% and increasing development velocity.",
    image: project1,
    tags: ["Design Systems", "Figma", "React", "Documentation"],
    status: "Live",
    duration: "8 months",
    role: "Lead Designer",
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking Redesign",
    category: "Mobile App",
    year: "2023",
    description:
      "Complete redesign of a banking mobile app that improved user satisfaction by 45% and reduced support tickets by 30%.",
    image: project2,
    tags: ["Mobile Design", "User Research", "Prototyping", "iOS/Android"],
    status: "Live",
    duration: "6 months",
    role: "Senior Product Designer",
  },
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    category: "Web Application",
    year: "2023",
    description:
      "An intuitive dashboard for AI-powered analytics that helps businesses make data-driven decisions with complex machine learning insights.",
    image: project3,
    tags: ["Dashboard Design", "Data Visualization", "AI/ML", "SaaS"],
    status: "Live",
    duration: "4 months",
    role: "Product Designer",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "E-commerce",
    year: "2022",
    description:
      "A modern e-commerce platform that increased conversion rates by 35% through improved UX and streamlined checkout process.",
    image: project1,
    tags: [
      "E-commerce",
      "Conversion Optimization",
      "User Journey",
      "A/B Testing",
    ],
    status: "Live",
    duration: "10 months",
    role: "UX Designer",
  },
  {
    id: "healthcare-portal",
    title: "Patient Health Portal",
    category: "Healthcare",
    year: "2022",
    description:
      "A patient-centered health portal that improved appointment scheduling efficiency by 50% and patient engagement by 40%.",
    image: project2,
    tags: [
      "Healthcare",
      "Accessibility",
      "HIPAA Compliance",
      "Patient Experience",
    ],
    status: "Live",
    duration: "7 months",
    role: "Senior UX Designer",
  },
  {
    id: "fintech-wallet",
    title: "Digital Wallet App",
    category: "Fintech",
    year: "2021",
    description:
      "A secure digital wallet that simplified peer-to-peer payments and achieved 1M+ downloads in the first 6 months.",
    image: project3,
    tags: ["Fintech", "Mobile App", "Security", "Payment Systems"],
    status: "Live",
    duration: "9 months",
    role: "Product Designer",
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
            A collection of design projects that showcase my approach to solving
            complex problems through user-centered design, creative thinking,
            and strategic innovation.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50M+</span>
              <span className={styles.statLabel}>Users Impacted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionDescription}>
          Explore my most impactful work that demonstrates innovation,
          user-centered design, and measurable business results.
        </p>
        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={styles.featuredCard}
            >
              <div className={styles.projectImageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.viewProject}>View Project →</span>
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
                <div className={styles.projectTags}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.projectTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Projects Grid */}
      <section className={styles.allProjectsSection}>
        <h2 className={styles.sectionTitle}>All Projects</h2>
        <div className={styles.projectsGrid}>
          {allProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={styles.projectCard}
            >
              <div className={styles.cardImageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
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
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Let's Work Together</h2>
          <p className={styles.ctaDescription}>
            Have a project in mind? I'd love to help bring your ideas to life
            with thoughtful design and strategic thinking.
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
