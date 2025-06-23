import Layout from "@/components/Layout";
import Link from "next/link";
import { homepageContent } from "../content/homepage";

export default function Home() {
  const {
    hero,
    projects,
    technicalSkills,
    principles,
    experience,
    contact,
    funFacts,
  } = homepageContent;

  return (
    <Layout>
      <Link href="/clara">Go to Clara Page</Link>

      {/* 1. Hero */}
      <section id="hero" className="py-20 text-center">
        <h1 className="text-4xl font-bold">Hi, I'm {hero.name} 👋</h1>
        <p className="text-lg mt-4">{hero.title}</p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="px-4 py-2 border border-black rounded hover:bg-gray-100 dark:border-white dark:hover:bg-gray-800"
          >
            My Work
          </a>
          <a
            href="#contact"
            className="px-4 py-2 border border-black rounded hover:bg-gray-100 dark:border-white dark:hover:bg-gray-800"
          >
            Let's Connect
          </a>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="py-16 border-t dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="">{hero.description}</p>
      </section>

      {/* 3. Projects / Case Studies */}
      <section id="projects" className="py-16 border-t dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-8">{projects.title}</h2>
        <div className="space-y-8">
          {projects.items.map((project, index) => (
            <div
              key={index}
              className="border p-4 rounded dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 bg-${project.color}-100 text-${project.color}-800 rounded text-sm dark:bg-${project.color}-900 dark:text-${project.color}-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technical Skills */}
      <section id="debugging" className="py-16 border-t dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">{technicalSkills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.categories.map((category, index) => (
            <div
              key={index}
              className="border p-4 rounded dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm dark:bg-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. What I've Learned */}
      <section id="lessons" className="py-16 border-t dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">{principles.title}</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
          {principles.items.map((principle, index) => (
            <li key={index}>{principle}</li>
          ))}
        </ul>
      </section>

      {/* 6. Experience / Resume Highlights */}
      <section id="experience" className="py-16 border-t dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">{experience.title}</h2>
        <div className="space-y-4">
          {experience.items.map((exp, index) => (
            <div
              key={index}
              className="border p-4 rounded dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="font-semibold">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.period}
              </p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Contact / Footer */}
      <section
        id="contact"
        className="py-16 border-t text-center dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-2">{contact.title}</h2>
        <p className="text-gray-700 dark:text-gray-300">
          {contact.description}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Email me at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="underline hover:text-blue-600"
          >
            {contact.email}
          </a>
        </p>
        <div className="mt-4 flex justify-center gap-4">
          {contact.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className="hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* 8. Optional Content */}
      <section id="extras" className="py-16 border-t dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">{funFacts.title}</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
          {funFacts.items.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
