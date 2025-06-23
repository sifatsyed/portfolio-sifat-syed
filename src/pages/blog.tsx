import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/blog.module.css";
import commonStyles from "../styles/common.module.css";
import { blogContent } from "../content/blog";

export default function BlogPage() {
  const { hero, filters, posts, aboutBlog } = blogContent;
  const [activeFilter, setActiveFilter] = useState("all");

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
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroDescription}>{hero.description}</p>
          <div className={styles.heroStats}>
            {hero.stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
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
          <h2 className={styles.aboutBlogTitle}>{aboutBlog.title}</h2>
          <div className={styles.aboutBlogGrid}>
            <div className={styles.aboutBlogText}>
              {aboutBlog.description.map((paragraph, index) => (
                <p key={index} className={styles.aboutBlogDescription}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={styles.aboutBlogSidebar}>
              <div className={styles.blogStats}>
                <h3 className={styles.blogStatsTitle}>
                  {aboutBlog.stats.title}
                </h3>
                {aboutBlog.stats.items.map((stat, index) => (
                  <div key={index} className={styles.blogStat}>
                    <span className={styles.blogStatLabel}>{stat.label}</span>
                    <span className={styles.blogStatValue}>{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.subscribeBox}>
                <h3 className={styles.subscribeTitle}>
                  {aboutBlog.subscribe.title}
                </h3>
                <p className={styles.subscribeDescription}>
                  {aboutBlog.subscribe.description}
                </p>
                <button className={styles.subscribeButton}>
                  {aboutBlog.subscribe.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
