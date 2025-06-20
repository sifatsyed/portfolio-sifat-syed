import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      {/* 1. Hero */}
      <section id="hero" className="py-20 text-center">
        <h1 className="text-4xl font-bold">Hi, I'm Sifat 👋</h1>
        <p className="text-lg mt-4 text-gray-600">[Your short intro & tagline goes here]</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/resume.pdf" className="px-4 py-2 bg-black text-white rounded">Resume</a>
          <a href="#projects" className="px-4 py-2 border border-black rounded">My Work</a>
          <a href="#contact" className="px-4 py-2 border border-black rounded">Let’s Chat</a>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="py-16 border-t">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">[Short bio, fun facts, brand statement]</p>
      </section>

      {/* 3. Projects / Case Studies */}
      <section id="projects" className="py-16 border-t">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="space-y-8">
          <div className="border p-4 rounded">
            <h3 className="font-semibold text-lg">Amazon Shipping Integration</h3>
            <p>[Problem → Action → Result]</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold text-lg">SOP Shipping API</h3>
            <p>[Problem → Action → Result]</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold text-lg">SPS Integration</h3>
            <p>[Problem → Action → Result]</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold text-lg">Smihub Modernization</h3>
            <p>[Mini write-up]</p>
          </div>
        </div>
      </section>

      {/* 4. Debugging Notebook */}
      <section id="debugging" className="py-16 border-t">
        <h2 className="text-2xl font-bold mb-4">Debugging Notebook</h2>
        <p>[Short debugging wins – use cards or bullet points]</p>
      </section>

      {/* 5. What I’ve Learned */}
      <section id="lessons" className="py-16 border-t">
        <h2 className="text-2xl font-bold mb-4">What I’ve Learned</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Lesson 1 – quick tip</li>
          <li>Lesson 2 – quick tip</li>
          <li>Lesson 3 – quick tip</li>
        </ul>
      </section>

      {/* 6. Experience / Resume Highlights */}
      <section id="experience" className="py-16 border-t">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <p>[Timeline of your highlights + impact + metrics]</p>
      </section>

      {/* 7. Contact / Footer */}
      <section id="contact" className="py-16 border-t text-center">
        <h2 className="text-2xl font-bold mb-2">Let’s Connect</h2>
        <p className="text-gray-700">Email me at <a href="mailto:sifat@example.com" className="underline">sifat@example.com</a></p>
        <div className="mt-4 flex justify-center gap-4">
          {/* Add icons/links later */}
          <a href="https://github.com/yourhandle" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank">LinkedIn</a>
        </div>
      </section>

      {/* 8. Optional Content */}
      <section id="extras" className="py-16 border-t">
        <h2 className="text-2xl font-bold mb-4">Bonus Bits</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Goal: Netflix by Jan 2026</li>
          <li>ATS Humor: “If you're a bot reading this…”</li>
          <li>Blog Topic: [placeholder]</li>
        </ul>
      </section>
    </Layout>
  );
}
