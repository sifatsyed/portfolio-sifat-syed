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
                className={`px-2 py-1 rounded transition ${activeSection === section.id
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
      {/* 
      <main className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-blue-300 to-black text-white">
        {children}
      </main> */}
      {/* <main className="w-full min-h-screen p-6 bg-gradient-to-b from-blue-300 to-black text-white">
        {children}
      </main> */}
      <main
        className="w-full min-h-screen p-6 text-white bg-cover bg-center"
        style={{
          backgroundColor: "#4085de",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='10 10 80 80' width='5' height='80'%3E%3Cpath fill='%237ed7e3' fill-opacity='0.25' d='M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      >
        {children}
      </main>

      <footer className="p-4 text-center border-t text-sm text-gray-500">
        © 2025 Sifat Syed
      </footer>
    </div>
  );
}