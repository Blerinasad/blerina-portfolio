const projects = [
  {
    title: "Full-Stack Web Applications",
    tech: "Node.js · React · MySQL · JWT · REST API",
    description:
      "Built full-stack applications with authentication, CRUD dashboards, and structured backend logic focused on real functionality and usability.",
  },
  {
    title: "Mobileria Nita",
    tech: "PHP · HTML · CSS · JavaScript · MySQL",
    description:
      "Developed a CMS-style platform for managing furniture products with admin-side CRUD functionality and organized data management.",
  },
  {
    title: "Frontend Web Projects",
    tech: "HTML · CSS · JavaScript · WordPress",
    description:
      "Created responsive websites from scratch and worked on WordPress-based eCommerce pages with a focus on clean UI and accessibility.",
  },
  {
    title: "Database Projects",
    tech: "MySQL · SQL Server",
    description:
      "Worked on database modeling, query writing, and academic implementations focused on structured data and relational systems.",
  },
  {
    title: "Graphic Design & UI Work",
    tech: "Figma · Photoshop · Illustrator",
    description:
      "Designed branding materials, logo concepts, promotional visuals, and user interface mockups for digital and visual projects.",
  },
  {
    title: "Portfolio & Web Deployment",
    tech: "GitHub · Hosting · Deployment",
    description:
      "Managed source code through GitHub and explored deployment and hosting workflows for turning projects into live web solutions.",
  },
];

export default function GallerySection() {
  return (
    <section id="projects" className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4 text-center">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Selected work and practical experience
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-black p-6 hover:-translate-y-1 hover:border-white/20 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
              <p className="text-gray-300 leading-7">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}