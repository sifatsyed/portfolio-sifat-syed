import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import styles from "../styles/contact.module.css";
import commonStyles from "../styles/common.module.css";
import { contactContent } from "../content/contact";

export default function ContactPage() {
  const { hero, form, contactMethods, availability, expectations, faq } =
    contactContent;

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
    console.log("Form submitted:", formData);
  };

  const renderIcon = (iconType: string) => {
    const iconMap = {
      email: (
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
      ),
      linkedin: (
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
      ),
      github: (
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
      ),
    };
    return iconMap[iconType as keyof typeof iconMap] || null;
  };

  return (
    <PageLayout currentPage="contact">
      {/* Hero Section */}
      <section className={commonStyles.heroSection}>
        <div className={commonStyles.heroContent}>
          <h1 className={commonStyles.heroTitle}>{hero.title}</h1>
          <p className={commonStyles.heroDescription}>{hero.description}</p>
          <div className={styles.heroStats}>
            {hero.stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <span className={styles.statText}>{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>{form.title}</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    {form.fields.name.label} {form.fields.name.required && "*"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required={form.fields.name.required}
                    placeholder={form.fields.name.placeholder}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    {form.fields.email.label}{" "}
                    {form.fields.email.required && "*"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required={form.fields.email.required}
                    placeholder={form.fields.email.placeholder}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>
                    {form.fields.company.label}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder={form.fields.company.placeholder}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="projectType" className={styles.formLabel}>
                    {form.fields.projectType.label}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    {form.fields.projectType.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="budget" className={styles.formLabel}>
                    {form.fields.budget.label}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    {form.fields.budget.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="timeline" className={styles.formLabel}>
                    {form.fields.timeline.label}
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    {form.fields.timeline.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  {form.fields.message.label}{" "}
                  {form.fields.message.required && "*"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  required={form.fields.message.required}
                  placeholder={form.fields.message.placeholder}
                  rows={form.fields.message.rows}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {form.submitText}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>{contactMethods.title}</h2>

            <div className={styles.contactMethods}>
              {contactMethods.methods.map((method, index) => (
                <div key={index} className={styles.contactMethod}>
                  <div className={styles.methodIcon}>
                    {renderIcon(method.icon)}
                  </div>
                  <div className={styles.methodContent}>
                    <h3 className={styles.methodTitle}>{method.title}</h3>
                    <p className={styles.methodText}>{method.value}</p>
                    <p className={styles.methodNote}>{method.note}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className={styles.availabilitySection}>
              <h3 className={styles.availabilityTitle}>{availability.title}</h3>
              <div className={styles.availabilityStatus}>
                <div className={styles.statusIndicator}></div>
                <span className={styles.statusText}>{availability.status}</span>
              </div>
              <p className={styles.availabilityNote}>{availability.note}</p>
            </div>

            {/* What to Expect */}
            <div className={styles.expectationsSection}>
              <h3 className={styles.expectationsTitle}>{expectations.title}</h3>
              <div className={styles.expectationsList}>
                {expectations.steps.map((step, index) => (
                  <div key={index} className={styles.expectationItem}>
                    <span className={styles.expectationNumber}>
                      {step.number}
                    </span>
                    <div className={styles.expectationContent}>
                      <h4 className={styles.expectationTitle}>{step.title}</h4>
                      <p className={styles.expectationText}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.sectionTitle}>{faq.title}</h2>
        <div className={styles.faqGrid}>
          {faq.items.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.question}</h3>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
