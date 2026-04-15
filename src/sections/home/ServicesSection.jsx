import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillsData = {
  en: {
    badge: "Skills",
    title: "Tech stack I actually work with.",
    frontend: [
      "React",
      "Vite",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI Components",
      "Forms",
      "Navigation",
      "Language Switcher",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Role-Based Access",
      "CRUD Operations",
      "Nodemailer",
      "Business Logic",
      "Routing",
      "Controllers",
    ],
    databases: [
      "MySQL",
      "SQL",
      "SQL Server",
      "phpMyAdmin",
      "Database Design",
      "Relations",
      "Constraints",
      "Indexes",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Hosting",
      "Deployment",
      "Trello",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
    languages: ["JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },

  sq: {
    badge: "Aftësitë",
    title: "Teknologjitë me të cilat punoj realisht.",
    frontend: [
      "React",
      "Vite",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI Components",
      "Forms",
      "Navigation",
      "Language Switcher",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Role-Based Access",
      "CRUD Operations",
      "Nodemailer",
      "Business Logic",
      "Routing",
      "Controllers",
    ],
    databases: [
      "MySQL",
      "SQL",
      "SQL Server",
      "phpMyAdmin",
      "Database Design",
      "Relations",
      "Constraints",
      "Indexes",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Hosting",
      "Deployment",
      "Trello",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
    languages: ["JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },

  de: {
    badge: "Fähigkeiten",
    title: "Technologien, mit denen ich tatsächlich arbeite.",
    frontend: [
      "React",
      "Vite",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "UI Components",
      "Forms",
      "Navigation",
      "Language Switcher",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Role-Based Access",
      "CRUD Operations",
      "Nodemailer",
      "Business Logic",
      "Routing",
      "Controllers",
    ],
    databases: [
      "MySQL",
      "SQL",
      "SQL Server",
      "phpMyAdmin",
      "Database Design",
      "Relations",
      "Constraints",
      "Indexes",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Hosting",
      "Deployment",
      "Trello",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
    languages: ["JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },
};

function SkillCard({ icon, title, items, tint }) {
  return (
    <article
      className={`rounded-[30px] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${tint}`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-lg bg-white/8 border-white/10 text-white">
          {icon}
        </div>

        <h3 className="text-2xl font-semibold text-white leading-tight">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-full bg-white/7 border border-white/10 text-sm text-slate-200 hover:bg-white/12 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const { language } = useLanguage();
  const content = skillsData[language] || skillsData.en;

  return (
    <section id="skills" className="bg-[#070814] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c4b5fd] mb-4">
              {content.badge}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {content.title}
            </h2>
          </div>
        </Reveal>

        {/* TOP ROW */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">
          <Reveal>
            <SkillCard
              icon={<FaCode />}
              title="Frontend"
              items={content.frontend}
              tint="bg-[linear-gradient(180deg,rgba(36,31,68,0.96),rgba(12,15,30,0.96))] border-[#8b5cf6]/20 shadow-[0_20px_60px_rgba(139,92,246,0.12)]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <SkillCard
              icon={<FaServer />}
              title="Backend"
              items={content.backend}
              tint="bg-[linear-gradient(180deg,rgba(51,26,58,0.96),rgba(12,15,30,0.96))] border-[#ec4899]/20 shadow-[0_20px_60px_rgba(236,72,153,0.10)]"
            />
          </Reveal>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Reveal>
            <SkillCard
              icon={<FaDatabase />}
              title={language === "sq" ? "Databaza" : language === "de" ? "Datenbanken" : "Databases"}
              items={content.databases}
              tint="bg-[linear-gradient(180deg,rgba(29,40,67,0.96),rgba(12,15,30,0.96))] border-[#60a5fa]/20 shadow-[0_20px_60px_rgba(96,165,250,0.08)]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <SkillCard
              icon={<FaTools />}
              title={language === "sq" ? "Vegla & Workflow" : "Tools & Workflow"}
              items={content.tools}
              tint="bg-[linear-gradient(180deg,rgba(56,39,70,0.96),rgba(12,15,30,0.96))] border-[#f9a8d4]/20 shadow-[0_20px_60px_rgba(249,168,212,0.08)]"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <SkillCard
              icon={<FaCode />}
              title={
                language === "sq"
                  ? "Gjuhë Programimi"
                  : language === "de"
                  ? "Programmiersprachen"
                  : "Languages"
              }
              items={content.languages}
              tint="bg-[linear-gradient(180deg,rgba(63,33,63,0.96),rgba(12,15,30,0.96))] border-[#f472b6]/20 shadow-[0_20px_60px_rgba(244,114,182,0.08)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}