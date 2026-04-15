import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-[#0d0a18] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.35em] text-pink-200/80 mb-4">
            {t.contact.badge}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
            {t.contact.title}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-slate-400 text-lg leading-8 max-w-2xl mx-auto mb-12">
            {t.contact.desc}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 text-left">
          <Reveal>
            <div className="rounded-[26px] border border-pink-300/10 bg-[#151222]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300">
              <p className="text-sm text-slate-400 mb-3">{t.contact.email}</p>
              <p className="text-lg font-semibold text-white break-all">
                blerinasadiku4@gmail.com
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-[26px] border border-pink-300/10 bg-[#151222]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300">
              <p className="text-sm text-slate-400 mb-3">{t.contact.phone}</p>
              <a
                href="tel:+38349340076"
                className="text-lg font-semibold text-white hover:text-pink-200 transition"
              >
                +383 49 340 076
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[26px] border border-pink-300/10 bg-[#151222]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300">
              <p className="text-sm text-slate-400 mb-3">{t.contact.location}</p>
              <p className="text-lg font-semibold text-white">
                {t.contact.locationValue}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-[26px] border border-pink-300/10 bg-[#151222]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300">
              <p className="text-sm text-slate-400 mb-3">GitHub</p>
              <a
                href="https://github.com/Blerinasad"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-white hover:text-pink-200 transition break-all"
              >
                github.com/Blerinasad
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="rounded-[26px] border border-pink-300/10 bg-[#151222]/80 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-pink-300/20 transition duration-300">
              <p className="text-sm text-slate-400 mb-3">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/blerina-sadiku-30b27135a"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-white hover:text-pink-200 transition break-all"
              >
                linkedin.com/in/blerina-sadiku
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}