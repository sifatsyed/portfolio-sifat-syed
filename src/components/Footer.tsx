import React from "react";
import styles from "../styles/components.module.css";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIcons}>
          <img src={githubIcon} alt="GitHub" className={styles.footerIcon} />
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className={styles.footerIcon}
          />
          <img src={twitterIcon} alt="Twitter" className={styles.footerIcon} />
        </div>
        <p className={styles.copyright}>
          @2024 Sophie Carter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
