import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/contact.module.css";
import commonStyles from "../styles/common.module.css";
import mailIcon from "../assets/icons/mail.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";

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
          <h1 className={commonStyles.heroTitle}>Let's Work Together</h1>
          <p className={commonStyles.heroDescription}>
            I'm always excited to collaborate on innovative projects and help
            bring great ideas to life. Whether you need a complete product
            redesign, design system, or UX consultation, I'd love to hear about
            your project.
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
                    <option value="design-system">Design System</option>
                    <option value="ux-audit">UX Audit</option>
                    <option value="consultation">Consultation</option>
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
                  placeholder="Tell me about your project, goals, and any specific challenges you're facing..."
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
                  <img src={mailIcon} alt="Email" />
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>Email</h3>
                  <p className={styles.methodText}>sophie.carter@email.com</p>
                  <p className={styles.methodNote}>
                    Best for project inquiries
                  </p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <img src={linkedinIcon} alt="LinkedIn" />
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>LinkedIn</h3>
                  <p className={styles.methodText}>@sophiecarter</p>
                  <p className={styles.methodNote}>Professional networking</p>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <img src={twitterIcon} alt="Twitter" />
                </div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodTitle}>Twitter</h3>
                  <p className={styles.methodText}>@sophiedesigns</p>
                  <p className={styles.methodNote}>
                    Design thoughts & inspiration
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
                    <h4 className={styles.expectationTitle}>Discovery Call</h4>
                    <p className={styles.expectationText}>
                      30-minute call to discuss your project
                    </p>
                  </div>
                </div>
                <div className={styles.expectationItem}>
                  <span className={styles.expectationNumber}>03</span>
                  <div className={styles.expectationContent}>
                    <h4 className={styles.expectationTitle}>Custom Proposal</h4>
                    <p className={styles.expectationText}>
                      Detailed proposal with timeline & pricing
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
              What's your design process like?
            </h3>
            <p className={styles.faqAnswer}>
              I follow a user-centered design approach: research, ideation,
              prototyping, testing, and iteration. Every project starts with
              understanding your users and business goals.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              How long do projects typically take?
            </h3>
            <p className={styles.faqAnswer}>
              It varies by scope: design systems (3-6 months), app redesigns
              (2-4 months), UX audits (2-4 weeks). I'll provide a detailed
              timeline in the proposal.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>
              Do you work with development teams?
            </h3>
            <p className={styles.faqAnswer}>
              Absolutely! I collaborate closely with developers and provide
              detailed specs, design systems, and ongoing support during
              implementation.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What tools do you use?</h3>
            <p className={styles.faqAnswer}>
              Primarily Figma for design, with additional tools like Principle
              for prototyping, Miro for collaboration, and various user research
              platforms.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
