import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/contact.module.css";
import commonStyles from "../styles/common.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <PageLayout currentPage="contact">
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroContent}>
          <h1 className={commonStyles.heroTitle}>
            Let's Build Something Amazing
          </h1>
          <p className={commonStyles.heroDescription}>
            I'm always excited to collaborate on innovative software projects
            and help turn great ideas into reality. Whether you need a
            full-stack application, API development, cloud architecture, or
            technical consultation, I'd love to hear about your project.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>⚡</span>
              <span className={styles.statText}>24h Response Time</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>🌍</span>
              <span className={styles.statText}>Remote Friendly</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statIcon}>📅</span>
              <span className={styles.statText}>
                Available for New Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Start a Conversation</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Your company name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="projectType" className={styles.formLabel}>
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="api-development">API Development</option>
                    <option value="cloud-architecture">
                      Cloud Architecture
                    </option>
                    <option value="microservices">Microservices</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.formLabel}>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="over-100k">$100k+</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="timeline" className={styles.formLabel}>
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="6-months">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  required
                  placeholder="Tell me about your project, technical requirements, and any specific challenges you're facing..."
                  rows={6}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>Email</h3>
                  <p className={styles.methodText}>sifat.syed@email.com</p>
                  <p className={styles.methodNote}>
                    Best for project inquiries
                  </p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>LinkedIn</h3>
                  <p className={styles.methodText}>@sifatsyed</p>
                  <p className={styles.methodNote}>Professional networking</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>GitHub</h3>
                  <p className={styles.methodText}>@sifatsyed</p>
                  <p className={styles.methodNote}>
                    Code samples & open source
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className={styles.availabilitySection}>
              <h3 className={styles.availabilityTitle}>Current Availability</h3>
              <div className={styles.availabilityStatus}>
                <div className={styles.statusIndicator}></div>
                <span className={styles.statusText}>
                  Available for new projects
                </span>
              </div>
              <p className={styles.availabilityNote}>
                I typically take on 1-2 major projects at a time to ensure
                quality and focus. Next availability starts in March 2024.
              </p>
            </div>

            {/* What to Expect */}
            <div className={styles.expectationsSection}>
              <h3 className={styles.expectationsTitle}>What to Expect</h3>
              <div className={styles.expectationsList}>
                <div className={styles.expectationItem}>
                  <span className={styles.expectationNumber}>01</span>
                  <div className={styles.expectationContent}>
                    <h4 className={styles.expectationTitle}>Quick Response</h4>
                    <p className={styles.expectationText}>
                      I'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
                <div className={styles.expectationItem}>
                  <span className={styles.expectationNumber}>02</span>
                  <div className={styles.expectationContent}>
                    <h4 className={styles.expectationTitle}>
                      Technical Discussion
                    </h4>
                    <p className={styles.expectationText}>
                      30-minute call to discuss technical requirements
                    </p>
                  </div>
                </div>
                <div className={styles.expectationItem}>
                  <span className={styles.expectationNumber}>03</span>
                  <div className={styles.expectationContent}>
                    <h4 className={styles.expectationTitle}>Custom Proposal</h4>
                    <p className={styles.expectationText}>
                      Detailed proposal with architecture & timeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              What's your development process like?
            </h3>
            <p className={styles.faqAnswer}>
              I follow agile development practices: requirements analysis,
              architecture design, iterative development, testing, and
              deployment. Every project starts with understanding your technical
              needs and business goals.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              How long do projects typically take?
            </h3>
            <p className={styles.faqAnswer}>
              It varies by scope: APIs (2-6 weeks), web applications (2-4
              months), complex systems (4-8 months), microservices migration
              (3-6 months). I'll provide a detailed timeline in the proposal.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              Do you work with existing development teams?
            </h3>
            <p className={styles.faqAnswer}>
              Absolutely! I collaborate closely with existing teams, provide
              code reviews, architecture guidance, and can integrate seamlessly
              with your current development workflows and CI/CD processes.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              What technologies do you specialize in?
            </h3>
            <p className={styles.faqAnswer}>
              I specialize in Node.js, React, TypeScript, Python, AWS, Docker,
              Kubernetes, PostgreSQL, and MongoDB. I'm also experienced with
              microservices architecture and cloud-native development.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
