import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/blog.module.css";
import commonStyles from "../styles/common.module.css";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const posts = [
    {
      id: 1,
      category: "lessons",
      title: "What I Learned from My First Microservices Failure",
      excerpt:
        "Building my first microservices architecture taught me more through failure than success. Here are the hard lessons that made me a better engineer.",
      date: "Dec 15, 2024",
      readTime: "7 min read",
      tags: ["Microservices", "Architecture", "Lessons Learned"],
      featured: true,
    },
    {
      id: 2,
      category: "hobbies",
      title: "Coffee, Code, and Creative Problem Solving",
      excerpt:
        "How my morning routine of brewing the perfect cup and tackling coding challenges sets the tone for my most productive development days.",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      tags: ["Productivity", "Personal", "Routine"],
      featured: false,
    },
    {
      id: 3,
      category: "insights",
      title: "The Art of Writing Clean, Maintainable Code",
      excerpt:
        "Exploring principles and practices that make code not just functional, but elegant, readable, and maintainable for years to come.",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      tags: ["Clean Code", "Best Practices", "Software Architecture"],
      featured: true,
    },
    {
      id: 4,
      category: "behind-scenes",
      title: "A Day in My Development Workflow",
      excerpt:
        "Take a peek behind the curtain of how I approach a typical day, from planning to deployment and everything in between.",
      date: "Nov 28, 2024",
      readTime: "5 min read",
      tags: ["Workflow", "Day in Life", "Development"],
      featured: false,
    },
    {
      id: 5,
      category: "lessons",
      title: "Why I Stopped Chasing the Latest JavaScript Framework",
      excerpt:
        "The liberating realization that mastering fundamentals matters more than following every new framework that comes along.",
      date: "Nov 22, 2024",
      readTime: "6 min read",
      tags: ["JavaScript", "Frameworks", "Learning"],
      featured: false,
    },
    {
      id: 6,
      category: "hobbies",
      title: "Marathon Training Taught Me About Software Development",
      excerpt:
        "Unexpected parallels between long-distance running and software engineering that changed my approach to building systems.",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      tags: ["Personal Growth", "Endurance", "Development"],
      featured: false,
    },
    {
      id: 7,
      category: "insights",
      title: "Security is Not an Afterthought",
      excerpt:
        "Why building security from day one creates better software for everyone, not just users who are security-conscious.",
      date: "Nov 8, 2024",
      readTime: "9 min read",
      tags: ["Security", "Best Practices", "DevSecOps"],
      featured: true,
    },
    {
      id: 8,
      category: "behind-scenes",
      title: "My Home Office Setup for Deep Development Work",
      excerpt:
        "How I designed my workspace to minimize distractions and maximize focus for complex problem-solving and coding sessions.",
      date: "Oct 30, 2024",
      readTime: "4 min read",
      tags: ["Productivity", "Workspace", "Focus"],
      featured: false,
    },
  ];

  const filters = [
    { key: "all", label: "All Posts" },
    { key: "lessons", label: "Lessons Learned" },
    { key: "hobbies", label: "Life & Hobbies" },
    { key: "insights", label: "Tech Insights" },
    { key: "behind-scenes", label: "Behind the Scenes" },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <PageLayout currentPage="blog">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Code & Life</h1>
          <p className={styles.heroDescription}>
            A collection of technical insights, lessons learned from building
            software, personal stories, and behind-the-scenes glimpses into my
            development process. Welcome to my little corner of the engineering
            world.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>32</span>
              <span className={styles.statLabel}>Articles Written</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>18K</span>
              <span className={styles.statLabel}>Developers Reading</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8</span>
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
                  activeFilter === filter.key ? styles.filterButtonActive : ""
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
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
          <div className={styles.featuredGrid}>
            {featuredPosts.slice(0, 3).map((post) => (
              <article key={post.id} className={styles.featuredCard}>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>
                      {filters.find((f) => f.key === post.category)?.label}
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
                    <span className={styles.readTime}>{post.readTime}</span>
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
                      {filters.find((f) => f.key === post.category)?.label}
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
                    <span className={styles.postReadTime}>{post.readTime}</span>
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
                This is my space to share the unfiltered truth about software
                engineering—the victories, failures, random insights, and
                everything in between. You'll find technical deep dives mixed
                with personal stories, learning adventures, and honest
                reflections on what I've discovered building software.
              </p>
              <p className={styles.aboutBlogDescription}>
                I believe the best code comes from a full life, so I write about
                running marathons, perfecting coffee brewing techniques,
                debugging production issues at 3 AM, and how these experiences
                shape my approach to engineering challenges.
              </p>
            </div>
            <div className={styles.aboutBlogSidebar}>
              <div className={styles.blogStats}>
                <h3 className={styles.blogStatsTitle}>Blog Stats</h3>
                <div className={styles.blogStat}>
                  <span className={styles.blogStatLabel}>First Post</span>
                  <span className={styles.blogStatValue}>Jan 2023</span>
                </div>
                <div className={styles.blogStat}>
                  <span className={styles.blogStatLabel}>Posting Schedule</span>
                  <span className={styles.blogStatValue}>Weekly</span>
                </div>
                <div className={styles.blogStat}>
                  <span className={styles.blogStatLabel}>Average Length</span>
                  <span className={styles.blogStatValue}>6 min read</span>
                </div>
              </div>
              <div className={styles.subscribeBox}>
                <h3 className={styles.subscribeTitle}>Stay Updated</h3>
                <p className={styles.subscribeDescription}>
                  Get notified when I publish new articles and technical
                  insights.
                </p>
                <button className={styles.subscribeButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
