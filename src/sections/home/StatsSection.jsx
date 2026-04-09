import { useState } from "react";
import Reveal from "../../components/Reveal";

const certificates = [
  {
    title: "Programming Fundamentals",
    subtitle: "C, C++, C# & SQL",
    img: "/certificates/programming-fundamentals.png",
  },
  {
    title: "Frontend Web Development",
    subtitle: "HTML, CSS, JavaScript",
    img: "/certificates/frontend-development.png",
  },
  {
    title: "UI/UX & Graphic Design",
    subtitle: "Figma, Photoshop, Illustrator",
    img: "/certificates/ui-ux-design.png",
  },
  {
    title: "Cyber Security Fundamentals",
    subtitle: "System Protection & Security",
    img: "/certificates/cyber-security.png",
  },
  {
    title: "WordPress & eCommerce",
    subtitle: "Website Development",
    img: "/certificates/wordpress-ecommerce.png",
  },
];

export default function StatsSection() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="certificates"
      className="relative bg-[#020617] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
              Certifications
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Training & Professional Development
            </h2>

            <p className="mt-5 text-slate-400 text-base md:text-lg leading-8">
              A curated selection of certifications that reflect my background
              in programming, frontend development, design, cybersecurity, and
              digital web solutions.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <article className="group rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:border-white/20 transition duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
                      Certificate
                    </p>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{cert.subtitle}</p>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Issued training area</p>
                    <p className="text-base text-white font-medium">
                      {cert.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={() => setActive(cert)}
                    className="shrink-0 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition"
                  >
                    View
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-4 py-8"
          onClick={() => setActive(null)}
        >
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setActive(null)}
                className="px-5 py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>

            <div className="rounded-[28px] overflow-hidden border border-white/10 bg-[#0f172a] shadow-2xl">
              <div className="bg-white">
                <img
                  src={active.img}
                  alt={active.title}
                  className="w-full max-h-[78vh] object-contain"
                />
              </div>

              <div className="px-6 py-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {active.title}
                </h3>
                <p className="mt-2 text-slate-400">{active.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}