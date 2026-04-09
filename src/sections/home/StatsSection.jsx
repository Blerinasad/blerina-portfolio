import { useState } from "react";
import Reveal from "../../components/Reveal";

const certificates = [
  {
    title: "Programming Fundamentals",
    desc: "C, C++, C# & SQL basics",
    img: "/certificates/programming-fundamentals.png",
  },
  {
    title: "Frontend Web Development",
    desc: "HTML, CSS, JavaScript, Web Hosting",
    img: "/certificates/frontend-development.png",
  },
  {
    title: "UI/UX & Graphic Design",
    desc: "Figma, Photoshop, Illustrator",
    img: "/certificates/ui-ux-design.png",
  },
  {
    title: "Cyber Security Fundamentals",
    desc: "System & Network Protection",
    img: "/certificates/cyber-security.png",
  },
  {
    title: "WordPress & eCommerce Development",
    desc: "Building websites & online stores",
    img: "/certificates/wordpress-ecommerce.png",
  },
];

export default function StatsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      className="relative bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Certificates
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            Training & Achievements
          </h2>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((cert, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                onClick={() => setSelected(cert)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 hover:border-white/30 transition duration-300"
              >

                {/* IMAGE */}
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">

                  <h3 className="text-xl font-semibold mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-300">
                    {cert.desc}
                  </p>

                </div>

                {/* BOTTOM TITLE */}
                <div className="p-5 text-center">
                  <h3 className="text-base font-medium text-gray-300">
                    {cert.title}
                  </h3>
                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* MODAL */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <div className="max-w-5xl w-full relative">

              <img
                src={selected.img}
                alt="certificate"
                className="w-full rounded-xl shadow-2xl"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-lg"
              >
                ✕
              </button>

              {/* INFO */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold">
                  {selected.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {selected.desc}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}