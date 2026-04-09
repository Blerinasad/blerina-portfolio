import Reveal from "../../components/Reveal";

const projects = [
  {
    title: "Full-Stack Web Applications",
    desc: "Web applications built with React, Node.js, MySQL, authentication, CRUD operations, and REST APIs.",
    tech: "React · Node.js · MySQL · JWT",
  },
  {
    title: "Mobileria Nita",
    desc: "A CMS-style furniture platform with product management, structured content, and admin-side CRUD functionality.",
    tech: "PHP · HTML · CSS · JavaScript · MySQL",
  },
  {
    title: "Frontend Web Projects",
    desc: "Responsive websites and interfaces developed with modern frontend principles and user-focused design.",
    tech: "HTML · CSS · JavaScript · WordPress",
  },
  {
    title: "Database Projects",
    desc: "Academic and practical database work involving modeling, SQL queries, and structured relational systems.",
    tech: "MySQL · SQL Server",
  },
  {
    title: "Design & Branding",
    desc: "Visual identity work, promotional materials, UI mockups, and digital assets created for web and brand use.",
    tech: "Figma · Photoshop · Illustrator",
  },
  {
    title: "Portfolio & Deployment",
    desc: "Source control, hosting, deployment, and turning development work into accessible live web solutions.",
    tech: "GitHub · Hosting · Deployment",
  },
];

export default function GallerySection() {
  return (
    <section id="projects" className="bg-[#0f172a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Selected Work
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="rounded-[26px] border border-white/10 bg-[#111827] p-7 hover:-translate-y-2 hover:border-white/20 transition duration-300 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <p className="text-xs uppercase tracking-[0.25em] text-[#d4a017] mb-4">
                  Project
                </p>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-slate-400 leading-7 mb-6">{project.desc}</p>
                <p className="text-sm text-slate-300">{project.tech}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}