import Reveal from "../../components/Reveal";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Team Website",
      description: "Business website for tile company.",
      tech: ["React", "Node.js"],
      link: "https://eteam.rf.gd/?i=1",
    },
    {
      title: "Mobileria Nita",
      description: "Furniture website design.",
      tech: ["HTML", "CSS", "JS"],
      link: "#",
    },
    {
      title: "Course Management System",
      description: "System for managing courses.",
      tech: ["Node.js", "MySQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <Reveal>
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Projects
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <Reveal key={i}>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:scale-105 transition">
              
              <h3 className="text-white text-lg font-semibold mb-2">
                {p.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a href={p.link} target="_blank" className="text-blue-400 text-sm">
                View →
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}