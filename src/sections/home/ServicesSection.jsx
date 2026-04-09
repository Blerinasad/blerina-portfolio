import Reveal from "../../components/Reveal";

const skillGroups = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "Java", "PHP", "SQL", "C", "C++", "C#"],
  },
  {
    title: "Frameworks & Tools",
    items: ["React", "Node.js", "Bootstrap", "WordPress", "GitHub", "Web Hosting"],
  },
  {
    title: "Databases",
    items: ["MySQL", "SQL Server", "phpMyAdmin"],
  },
  {
    title: "Design Tools",
    items: ["Figma", "Photoshop", "Illustrator"],
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="bg-[#020617] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
              Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical Expertise
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 items-stretch">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="h-full min-h-[290px] rounded-[26px] border border-white/10 bg-[#111827] p-6 hover:-translate-y-2 hover:border-white/20 transition duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.25)] flex flex-col">
                <h3 className="text-xl font-semibold mb-5">{group.title}</h3>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}