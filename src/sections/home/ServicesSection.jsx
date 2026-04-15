import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillsData = {
  en: {
    frontend: ["React", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI Components", "Forms", "Navigation", "Language Switcher"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Role-Based Access", "CRUD Operations", "Nodemailer", "Business Logic", "Routing", "Controllers"],
    databases: ["MySQL", "SQL", "SQL Server", "phpMyAdmin", "Database Design", "Relations", "Constraints", "Indexes"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Hosting", "Deployment", "Trello", "Figma", "Photoshop", "Illustrator"],
    languages: ["JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },
  sq: {
    frontend: ["React", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI Components", "Forms", "Navigation", "Language Switcher"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Role-Based Access", "CRUD Operations", "Nodemailer", "Business Logic", "Routing", "Controllers"],
    databases: ["MySQL", "SQL", "SQL Server", "phpMyAdmin", "Database Design", "Relations", "Constraints", "Indexes"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Hosting", "Deployment", "Trello", "Figma", "Photoshop", "Illustrator"],
    languages: ["JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },
  de: {
    frontend: ["React", "Vite", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI Components", "Forms", "Navigation", "Language Switcher"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Role-Based Access", "CRUD Operations", "Nodemailer", "Business Logic", "Routing", "Controllers"],
    databases: ["MySQL", "SQL", "SQL Server", "phpMyAdmin", "Database Design", "Relations", "Constraints", "Indexes"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Hosting", "Deployment", "Trello", "Figma", "Photoshop", "Illustrator"],
    languages: ["JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },
};

function SkillCard({ icon, title, items, tint }) {
  return (
    <article className={`rounded-[30px] border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${tint}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-lg bg-white/8 border-white/10 text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-white leading-tight">{title}</h3>
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
  const { language, t } = useLanguage();
  const content = skillsData[language] || skillsData.en;

  return (
    <section id="skills" className="bg-[#0a0814] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f9a8d4] mb-4">
              {t.skills.badge}
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t.skills.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">
          <Reveal>
            <SkillCard
              icon={<FaCode />}
              title={t.skills.frontend}
              items={content.frontend}
              tint="bg-[linear-gradient(180deg,rgba(38,29,69,0.96),rgba(15,12,28,0.96))] border-[#c084fc]/20 shadow-[0_20px_60px_rgba(192,132,252,0.12)]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <SkillCard
              icon={<FaServer />}
              title={t.skills.backend}
              items={content.backend}
              tint="bg-[linear-gradient(180deg,rgba(54,25,57,0.96),rgba(15,12,28,0.96))] border-[#f472b6]/20 shadow-[0_20px_60px_rgba(244,114,182,0.10)]"
            />
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <Reveal>
            <SkillCard
              icon={<FaDatabase />}
              title={t.skills.databases}
              items={content.databases}
              tint="bg-[linear-gradient(180deg,rgba(28,38,60,0.96),rgba(15,12,28,0.96))] border-[#93c5fd]/20 shadow-[0_20px_60px_rgba(147,197,253,0.08)]"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <SkillCard
              icon={<FaTools />}
              title={t.skills.tools}
              items={content.tools}
              tint="bg-[linear-gradient(180deg,rgba(55,35,64,0.96),rgba(15,12,28,0.96))] border-[#f9a8d4]/20 shadow-[0_20px_60px_rgba(249,168,212,0.08)]"
            />
          </Reveal>

          <Reveal delay={0.16}>
            <SkillCard
              icon={<FaCode />}
              title={t.skills.languages}
              items={content.languages}
              tint="bg-[linear-gradient(180deg,rgba(63,31,63,0.96),rgba(15,12,28,0.96))] border-[#f472b6]/20 shadow-[0_20px_60px_rgba(244,114,182,0.08)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}