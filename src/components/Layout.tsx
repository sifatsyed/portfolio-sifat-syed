import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "debugging", label: "Debugging" },
  { id: "lessons", label: "Lessons" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "extras", label: "Extras" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <header className="sticky top-0 z-50 bg-sky-200 p-4 border-b shadow-sm">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="font-bold text-black">Sifat's Portfolio</div>
          <nav className="flex gap-4 text-sm">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-2 py-1 rounded transition ${
                  activeSection === section.id
                    ? "text-white bg-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">{children}</main>

      <footer className="p-4 text-center border-t text-sm text-gray-500">
        © 2025 Sifat Syed
      </footer>
    </div>
  );
}