const skillGroups = [
  {
    title: "Programming Languages",
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
    <section id="skills" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4 text-center">
          Skills & Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Technical stack that defines my work
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-6 hover:border-white/20 transition"
            >
              <h3 className="text-xl font-semibold mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}