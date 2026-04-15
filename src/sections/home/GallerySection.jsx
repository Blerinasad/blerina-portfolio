import { useState } from "react";
import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";

export default function GallerySection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.items.mobileria.title,
      subtitle: t.projects.items.mobileria.subtitle,
      description: t.projects.items.mobileria.description,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      screenshots: Array.from({ length: 11 }, (_, i) =>
        `/projects/mobileria-nita/mobileria-nita${i + 1}.png`
      ),
      live: null,
      github: "https://github.com/Blerinasad",
    },
    {
      title: t.projects.items.higher.title,
      subtitle: t.projects.items.higher.subtitle,
      description: t.projects.items.higher.description,
      tech: ["React", "Node.js", "MySQL", "JWT", "CRUD"],
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
      title: t.projects.items.eteam.title,
      subtitle: t.projects.items.eteam.subtitle,
      description: t.projects.items.eteam.description,
      tech: ["React", "Tailwind", "Node.js", "Nodemailer"],
      screenshots: null,
      live: "https://eteam.rf.gd/?i=1",
      github: "https://github.com/Blerinasad",
    },
  ];

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
    <section id="projects" className="bg-[#0d0a18] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200/80 mb-4">
              {t.projects.badge}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.projects.title}
            </h2>
            <p className="mt-5 text-slate-400 text-base md:text-lg leading-8">
              {t.projects.desc}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="h-full rounded-[28px] border border-pink-300/10 bg-[#151222]/80 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.28)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300 flex flex-col">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f9a8d4] mb-4">
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
      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9b6dff] via-[#c084fc] to-[#f472b6] text-white font-medium hover:opacity-95 transition shadow-[0_10px_30px_rgba(244,114,182,0.22)]"
    >
      {t.projects.viewScreenshots}
    </button>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9b6dff] via-[#c084fc] to-[#f472b6] text-white font-medium hover:opacity-95 transition shadow-[0_10px_30px_rgba(244,114,182,0.22)]"
    >
      {t.projects.livePreview}
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="px-5 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
    >
      {t.projects.github}
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
                  {t.projects.screenshot} {currentIndex + 1} {t.projects.of}{" "}
                  {activeProject.screenshots.length}
                </p>
              </div>

              <button
                onClick={closeGallery}
                className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition"
              >
                {t.projects.close}
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
                    {t.projects.previous}
                  </button>

                  <button
                    onClick={nextImage}
                    className="px-5 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
                  >
                    {t.projects.next}
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