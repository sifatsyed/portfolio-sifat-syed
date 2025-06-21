import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/components.module.css";

interface PageLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function PageLayout({ children, currentPage }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.content}>
          <Header currentPage={currentPage} />
          <main className={styles.mainContent}>
            <div className={styles.contentWrapper}>{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
