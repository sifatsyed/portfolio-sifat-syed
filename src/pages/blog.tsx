import React, { useState } from "react";
import styles from "../styles/blog.module.css";
import homeIcon from "../assets/icons/home.svg";
import globeIcon from "../assets/icons/globe.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import mailIcon from "../assets/icons/mail.svg";
import userIcon from "../assets/icons/user.svg";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const posts = [
    {
      id: 1,
      category: "lessons",
      title: "What I Learned from My First Design System Failure",
      excerpt:
        "Building my first design system taught me more through failure than success. Here are the hard lessons that made me a better designer.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["Design Systems", "Lessons Learned"],
      featured: true,
    },
    {
      id: 2,
      category: "hobbies",
      title: "Guitar, Coffee, and Creative Flow",
      excerpt:
        "How my morning routine of playing guitar and brewing the perfect cup sets the tone for my most creative design days.",
      date: "Dec 10, 2024",
      readTime: "3 min read",
      tags: ["Creativity", "Personal", "Routine"],
      featured: false,
    },
    {
      id: 3,
      category: "insights",
      title: "The Psychology Behind Intuitive Interfaces",
      excerpt:
        "Understanding cognitive load and mental models to create interfaces that feel like second nature to users.",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      tags: ["UX Psychology", "Interface Design"],
      featured: true,
    },
    {
      id: 4,
      category: "behind-scenes",
      title: "A Day in My Design Process",
      excerpt:
        "Take a peek behind the curtain of how I approach a typical day, from research to final designs.",
      date: "Nov 28, 2024",
      readTime: "4 min read",
      tags: ["Process", "Day in Life"],
      featured: false,
    },
    {
      id: 5,
      category: "lessons",
      title: "Why I Started Saying No to Design Trends",
      excerpt:
        "The liberating realization that timeless design principles matter more than following every new trend.",
      date: "Nov 22, 2024",
      readTime: "6 min read",
      tags: ["Design Philosophy", "Trends"],
      featured: false,
    },
    {
      id: 6,
      category: "hobbies",
      title: "Marathon Training Taught Me About UX",
      excerpt:
        "Unexpected parallels between long-distance running and user experience design that changed my approach.",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      tags: ["Personal Growth", "UX Lessons"],
      featured: false,
    },
    {
      id: 7,
      category: "insights",
      title: "Accessibility is Not an Afterthought",
      excerpt:
        "Why inclusive design from day one creates better products for everyone, not just users with disabilities.",
      date: "Nov 8, 2024",
      readTime: "8 min read",
      tags: ["Accessibility", "Inclusive Design"],
      featured: true,
    },
    {
      id: 8,
      category: "behind-scenes",
      title: "My Home Office Setup for Deep Work",
      excerpt:
        "How I designed my workspace to minimize distractions and maximize creative flow and productivity.",
      date: "Oct 30, 2024",
      readTime: "4 min read",
      tags: ["Productivity", "Workspace"],
      featured: false,
    },
  ];

  const filters = [
    { key: "all", label: "All Posts" },
    { key: "lessons", label: "Lessons Learned" },
    { key: "hobbies", label: "Hobbies & Life" },
    { key: "insights", label: "Design Insights" },
    { key: "behind-scenes", label: "Behind the Scenes" },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
                  <h1 className={styles.heroTitle}>Insights & Stories</h1>
                  <p className={styles.heroDescription}>
                    A collection of design insights, lessons learned, personal
                    stories, and behind-the-scenes glimpses into my creative
                    process. Welcome to my little corner of the internet.
                  </p>
                  <div className={styles.heroStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>24</span>
                      <span className={styles.statLabel}>Articles Written</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>12K</span>
                      <span className={styles.statLabel}>Readers</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>6</span>
                      <span className={styles.statLabel}>Categories</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Filter Navigation */}
              <section className={styles.filterSection}>
                <div className={styles.filterContainer}>
                  <h2 className={styles.filterTitle}>Browse by Category</h2>
                  <div className={styles.filterButtons}>
                    {filters.map((filter) => (
                      <button
                        key={filter.key}
                        className={`${styles.filterButton} ${
                          activeFilter === filter.key
                            ? styles.filterButtonActive
                            : ""
                        }`}
                        onClick={() => setActiveFilter(filter.key)}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* Featured Posts */}
              {activeFilter === "all" && (
                <section className={styles.featuredSection}>
                  <h2 className={styles.sectionTitle}>Featured Stories</h2>
                  <div className={styles.featuredGrid}>
                    {featuredPosts.slice(0, 3).map((post) => (
                      <article key={post.id} className={styles.featuredCard}>
                        <div className={styles.cardContent}>
                          <div className={styles.cardMeta}>
                            <span className={styles.cardCategory}>
                              {
                                filters.find((f) => f.key === post.category)
                                  ?.label
                              }
                            </span>
                            <span className={styles.cardDate}>{post.date}</span>
                          </div>
                          <h3 className={styles.cardTitle}>{post.title}</h3>
                          <p className={styles.cardExcerpt}>{post.excerpt}</p>
                          <div className={styles.cardFooter}>
                            <div className={styles.cardTags}>
                              {post.tags.map((tag) => (
                                <span key={tag} className={styles.cardTag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className={styles.readTime}>
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* All Posts Grid */}
              <section className={styles.postsSection}>
                <h2 className={styles.sectionTitle}>
                  {activeFilter === "all"
                    ? "All Posts"
                    : filters.find((f) => f.key === activeFilter)?.label}
                </h2>
                <div className={styles.postsGrid}>
                  {(activeFilter === "all" ? regularPosts : filteredPosts).map(
                    (post) => (
                      <article key={post.id} className={styles.postCard}>
                        <div className={styles.postContent}>
                          <div className={styles.postMeta}>
                            <span className={styles.postCategory}>
                              {
                                filters.find((f) => f.key === post.category)
                                  ?.label
                              }
                            </span>
                            <span className={styles.postDate}>{post.date}</span>
                          </div>
                          <h3 className={styles.postTitle}>{post.title}</h3>
                          <p className={styles.postExcerpt}>{post.excerpt}</p>
                          <div className={styles.postFooter}>
                            <div className={styles.postTags}>
                              {post.tags.slice(0, 2).map((tag) => (
                                <span key={tag} className={styles.postTag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className={styles.postReadTime}>
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </article>
                    ),
                  )}
                </div>
              </section>

              {/* About the Blog */}
              <section className={styles.aboutBlogSection}>
                <div className={styles.aboutBlogContent}>
                  <h2 className={styles.aboutBlogTitle}>About This Blog</h2>
                  <div className={styles.aboutBlogGrid}>
                    <div className={styles.aboutBlogText}>
                      <p className={styles.aboutBlogDescription}>
                        This is my space to share the unfiltered truth about
                        design work—the victories, failures, random
                        inspirations, and everything in between. You'll find
                        design insights mixed with personal stories, hobby
                        adventures, and honest reflections on what I've learned.
                      </p>
                      <p className={styles.aboutBlogDescription}>
                        I believe the best design comes from a full life, so I
                        write about running marathons, perfecting coffee brewing
                        techniques, playing guitar, and how these experiences
                        shape my approach to design challenges.
                      </p>
                    </div>
                    <div className={styles.aboutBlogSidebar}>
                      <div className={styles.blogStats}>
                        <h3 className={styles.blogStatsTitle}>Blog Stats</h3>
                        <div className={styles.blogStat}>
                          <span className={styles.blogStatLabel}>
                            First Post
                          </span>
                          <span className={styles.blogStatValue}>Jan 2023</span>
                        </div>
                        <div className={styles.blogStat}>
                          <span className={styles.blogStatLabel}>
                            Posting Schedule
                          </span>
                          <span className={styles.blogStatValue}>Weekly</span>
                        </div>
                        <div className={styles.blogStat}>
                          <span className={styles.blogStatLabel}>
                            Average Length
                          </span>
                          <span className={styles.blogStatValue}>
                            5 min read
                          </span>
                        </div>
                      </div>
                      <div className={styles.subscribeBox}>
                        <h3 className={styles.subscribeTitle}>Stay Updated</h3>
                        <p className={styles.subscribeDescription}>
                          Get notified when I publish new stories and insights.
                        </p>
                        <button className={styles.subscribeButton}>
                          Subscribe
                        </button>
                      </div>
                    </div>
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
