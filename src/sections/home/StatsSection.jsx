import { useState } from "react";
import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(null);

  const certificates = [
    {
      title: t.certificates.items.programming.title,
      subtitle: t.certificates.items.programming.subtitle,
      img: "/certificates/programming-fundamentals.png",
    },
    {
      title: t.certificates.items.frontend.title,
      subtitle: t.certificates.items.frontend.subtitle,
      img: "/certificates/frontend-development.png",
    },
    {
      title: t.certificates.items.design.title,
      subtitle: t.certificates.items.design.subtitle,
      img: "/certificates/ui-ux-design.png",
    },
    {
      title: t.certificates.items.cyber.title,
      subtitle: t.certificates.items.cyber.subtitle,
      img: "/certificates/cyber-security.png",
    },
    {
      title: t.certificates.items.wordpress.title,
      subtitle: t.certificates.items.wordpress.subtitle,
      img: "/certificates/wordpress-ecommerce.png",
    },
  ];

  return (
    <section id="certificates" className="bg-[#0a0814] py-28 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200/80 mb-4">
              {t.certificates.badge}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t.certificates.title}
            </h2>
            <p className="mt-5 text-slate-400 text-base md:text-lg leading-8">
              {t.certificates.desc}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.08}>
              <article className="group rounded-[28px] overflow-hidden border border-pink-300/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-300 mb-2">
                      {t.certificates.certificate}
                    </p>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{cert.subtitle}</p>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">{t.certificates.issuedArea}</p>
                    <p className="text-base text-white font-medium">{cert.subtitle}</p>
                  </div>

                      <button
  onClick={() => setActive(cert)}
  className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9b6dff] via-[#c084fc] to-[#f472b6] text-white text-sm font-medium hover:opacity-95 transition shadow-[0_10px_30px_rgba(244,114,182,0.22)]"
>
  {t.certificates.view}
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
  onClick={() => setActive(cert)}
  className="shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9b6dff] via-[#c084fc] to-[#f472b6] text-white text-sm font-medium hover:opacity-95 transition shadow-[0_10px_30px_rgba(244,114,182,0.22)]"
>
  {t.certificates.view}
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
                <h3 className="text-2xl md:text-3xl font-bold">{active.title}</h3>
                <p className="mt-2 text-slate-400">{active.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}