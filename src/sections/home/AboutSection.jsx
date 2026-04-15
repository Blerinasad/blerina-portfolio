import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#0d0a18] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[260px_1fr_280px] gap-10 items-start">

        <Reveal>
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[230px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f472b6]/30 to-[#c084fc]/20 blur-2xl rounded-[30px]" />

              <div className="relative rounded-[26px] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <img
                  src="/profile.jpeg"
                  alt="Blerina Sadiku"
                  className="rounded-[20px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200/80 mb-4">
              {t.about.badge}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.about.title}
            </h2>

            <div className="mt-5 h-[2px] w-24 bg-gradient-to-r from-[#c084fc] to-[#f472b6]" />

            <div className="mt-6 space-y-4 text-slate-300 leading-7 max-w-xl">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
              <p>{t.about.text3}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
  <div className="flex justify-center lg:justify-end">
    
    <div className="w-[240px] h-[300px] rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col justify-center">
      
      <h3 className="text-white font-semibold mb-5 text-sm text-center">
        {t.about.languagesTitle}
      </h3>

      <div className="space-y-5">
        <LanguageBar
          label={t.about.albanian}
          level={100}
          text={t.about.native}
        />
        <LanguageBar
          label={t.about.english}
          level={85}
          text={t.about.advanced}
        />
        <LanguageBar
          label={t.about.german}
          level={55}
          text={t.about.intermediate}
        />
      </div>

    </div>

  </div>
</Reveal>

      </div>
    </section>
  );
}

function LanguageBar({ label, level, text }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-slate-200">{label}</span>
        <span className="text-pink-200">{text}</span>
      </div>

      <div className="h-[6px] rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#c084fc] to-[#f472b6]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}