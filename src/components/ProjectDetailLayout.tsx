import React from "react";
import Link from "next/link";
import PageLayout from "./PageLayout";
import styles from "../styles/project-detail.module.css";
import commonStyles from "../styles/common.module.css";

interface ProjectDetailLayoutProps {
  children: React.ReactNode;
}

export default function ProjectDetailLayout({
  children,
}: ProjectDetailLayoutProps) {
  return (
    <PageLayout>
      {/* Back Navigation */}
      <div className={commonStyles.backNav}>
        <Link href="/projects" className={commonStyles.backLink}>
          ← Back to Projects
        </Link>
      </div>

      {children}
    </PageLayout>
  );
}
