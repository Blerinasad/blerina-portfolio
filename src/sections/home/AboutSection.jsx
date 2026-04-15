import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";

const aboutContent = {
  en: {
    badge: "About Me",
    title: "Passionate Full-Stack Developer",
    text1:
      "I am a Computer Science and Engineering student with a strong interest in full-stack development, modern web applications, and user-focused digital experiences.",
    text2:
      "I enjoy working with frontend and backend technologies, building responsive interfaces, developing APIs, managing databases, and turning ideas into practical, functional solutions.",
    text3:
      "My goal is to keep growing through real projects, internships, and collaborations where I can improve my technical skills and create work with real value.",
    stats: [
      { value: "3+", label: "Projects" },
      { value: "5+", label: "Certificates" },
      { value: "3", label: "Languages" },
    ],
  },
  sq: {
    badge: "Rreth Meje",
    title: "Zhvilluese Full-Stack e përkushtuar",
    text1:
      "Jam studente e Computer Science and Engineering me interes të fortë në full-stack development, aplikacione moderne web dhe eksperienca digjitale të fokusuara te përdoruesi.",
    text2:
      "Më pëlqen të punoj me teknologji frontend dhe backend, të ndërtoj ndërfaqe responsive, të zhvilloj API, të menaxhoj databaza dhe t’i kthej idetë në zgjidhje praktike dhe funksionale.",
    text3:
      "Qëllimi im është të vazhdoj të rritem përmes projekteve reale, internship-eve dhe bashkëpunimeve ku mund të përmirësoj aftësitë teknike dhe të krijoj punë me vlerë reale.",
    stats: [
      { value: "3+", label: "Projekte" },
      { value: "5+", label: "Certifikata" },
      { value: "3", label: "Gjuhë" },
    ],
  },
  de: {
    badge: "Über Mich",
    title: "Leidenschaftliche Full-Stack Entwicklerin",
    text1:
      "Ich bin Studentin der Informatik und Computertechnik mit großem Interesse an Full-Stack-Entwicklung, modernen Webanwendungen und nutzerorientierten digitalen Erlebnissen.",
    text2:
      "Ich arbeite gerne mit Frontend- und Backend-Technologien, entwickle responsive Oberflächen, APIs und Datenbanklogik und setze Ideen in praktische, funktionale Lösungen um.",
    text3:
      "Mein Ziel ist es, mich durch reale Projekte, Praktika und Zusammenarbeit weiterzuentwickeln und dabei technische Fähigkeiten auszubauen und Arbeit mit echtem Mehrwert zu schaffen.",
    stats: [
      { value: "3+", label: "Projekte" },
      { value: "5+", label: "Zertifikate" },
      { value: "3", label: "Sprachen" },
    ],
  },
};

export default function AboutSection() {
  const { language } = useLanguage();
  const content = aboutContent[language] || aboutContent.en;

  return (
    <section id="about" className="bg-[#0d0a18] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
        <Reveal>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200/80 mb-4">
              {content.badge}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white max-w-xl">
              {content.title}
            </h2>

            <div className="mt-6 h-px w-28 bg-gradient-to-r from-[#c084fc] to-[#f472b6]" />

            <div className="mt-8 space-y-6 text-slate-300 text-lg leading-8 max-w-2xl">
              <p>{content.text1}</p>
              <p>{content.text2}</p>
              <p>{content.text3}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[30px] border border-pink-300/10 bg-[#151222]/80 backdrop-blur-xl p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
            <div className="grid sm:grid-cols-3 gap-4">
              {content.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-white to-[#f9a8d4] bg-clip-text text-transparent">
                    {item.value}
                  </p>
                  <p className="text-sm text-slate-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-4">
                {language === "sq"
                  ? "Gjuhët"
                  : language === "de"
                  ? "Sprachen"
                  : "Languages"}
              </h3>

              <div className="space-y-4">
                <LanguageBar
                  label={language === "sq" ? "Shqip" : language === "de" ? "Albanisch" : "Albanian"}
                  level={100}
                  text={
                    language === "sq"
                      ? "Gjuhë amtare"
                      : language === "de"
                      ? "Muttersprache"
                      : "Native"
                  }
                />
                <LanguageBar
                  label={language === "sq" ? "Anglisht" : language === "de" ? "Englisch" : "English"}
                  level={85}
                  text={
                    language === "sq"
                      ? "E avancuar"
                      : language === "de"
                      ? "Fortgeschritten"
                      : "Advanced"
                  }
                />
                <LanguageBar
                  label={language === "sq" ? "Gjermanisht" : language === "de" ? "Deutsch" : "German"}
                  level={55}
                  text={
                    language === "sq"
                      ? "Mesatare"
                      : language === "de"
                      ? "Mittelstufe"
                      : "Intermediate"
                  }
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
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-200 font-medium">{label}</span>
        <span className="text-xs text-pink-200">{text}</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#c084fc] to-[#f472b6]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}