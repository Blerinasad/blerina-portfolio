import { useState } from "react";
import Reveal from "../../components/Reveal";

const projects = [
  {
    title: "Mobileria Nita",
    subtitle: "Furniture Management Platform",
    description:
      "A furniture platform focused on product management, structured admin pages, and a clean user experience for showcasing and managing furniture items.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    screenshots: Array.from({ length: 11 }, (_, i) =>
      `/projects/mobileria-nita/mobileria-nita${i + 1}.png`
    ),
    live: null,
    github: "https://github.com/Blerinasad",
  },
  {
  title: "Higher Education",
  subtitle: "Full-Stack Academic Management System",
  description:
    "A full-stack higher education platform built with backend, frontend, database design, dashboard, CRUD operations, authentication, authorization, responsive UI, and secure data handling based on academic project requirements.",
  tech: ["React", "Node.js", "MySQL", "JWT", "Dashboard", "CRUD"],
  screenshots: [
    "/projects/higher-education/edu1.png",
    "/projects/higher-education/edu2.png",
    "/projects/higher-education/edu3.png",
    "/projects/higher-education/edu4.png",
  ],
  live: null,
  github: "https://github.com/Blerinasad",
},
  {
    title: "ETEAM Website",
    subtitle: "Business Website",
    description:
      "A modern responsive website for a construction materials company, focused on professional presentation, multilingual structure, and real-world deployment.",
    tech: ["React", "Tailwind", "Node.js", "Nodemailer"],
    screenshots: null,
    live: "https://eteam.rf.gd/?i=1",
    github: "https://github.com/Blerinasad",
  },
];

export default function GallerySection() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (project) => {
    setActiveProject(project);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setActiveProject(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!activeProject?.screenshots?.length) return;
    setCurrentIndex((prev) => (prev + 1) % activeProject.screenshots.length);
  };

  const prevImage = () => {
    if (!activeProject?.screenshots?.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? activeProject.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="bg-[#0f172a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
              Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Things I’ve Actually Built
            </h2>

            <p className="mt-5 text-slate-400 text-base md:text-lg leading-8">
              A selection of real projects I have worked on, combining web
              development, responsive design, backend logic, and practical
              problem-solving.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="h-full rounded-[28px] border border-white/10 bg-[#111827] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.28)] hover:-translate-y-2 hover:border-white/20 transition duration-300 flex flex-col">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#d4a017] mb-4">
                    {project.subtitle}
                  </p>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-7 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  {project.screenshots && (
                    <button
                      onClick={() => openGallery(project)}
                      className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition"
                    >
                      View Screenshots
                    </button>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-[#d4a017] text-black font-medium hover:opacity-90 transition"
                    >
                      Live Preview
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && activeProject.screenshots && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={closeGallery}
        >
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {activeProject.title}
                </h3>
                <p className="text-slate-400 mt-1">
                  Screenshot {currentIndex + 1} of {activeProject.screenshots.length}
                </p>
              </div>

              <button
                onClick={closeGallery}
                className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition"
              >
                Close
              </button>
            </div>

            <div className="rounded-[28px] overflow-hidden border border-white/10 bg-[#111827] shadow-2xl">
              <div className="bg-black flex items-center justify-center">
                <img
                  src={activeProject.screenshots[currentIndex]}
                  alt={activeProject.title}
                  className="w-full max-h-[72vh] object-contain"
                />
              </div>

              <div className="p-5 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="flex gap-3">
                  <button
                    onClick={prevImage}
                    className="px-5 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
                  >
                    Previous
                  </button>

                  <button
                    onClick={nextImage}
                    className="px-5 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
                  >
                    Next
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {activeProject.screenshots.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition ${
                        idx === currentIndex
                          ? "bg-white"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to screenshot ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}