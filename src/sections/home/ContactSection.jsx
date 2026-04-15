import Reveal from "../../components/Reveal";
import { useLanguage } from "../../components/LanguageContext";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export default function ContactSection() {
  const { t } = useLanguage();

  const contacts = [
    {
      label: t.contact.email,
      value: "blerinasadiku4@gmail.com",
      href: "mailto:blerinasadiku4@gmail.com",
      icon: <FaEnvelope />,
      iconBg: "from-pink-400/20 to-fuchsia-400/10",
      iconColor: "text-pink-200",
    },
    {
      label: t.contact.phone,
      value: "+383 49 340 076",
      href: "tel:+38349340076",
      icon: <FaPhone />,
      iconBg: "from-violet-400/20 to-purple-400/10",
      iconColor: "text-violet-200",
    },
    {
      label: t.contact.location,
      value: t.contact.locationValue,
      href: null,
      icon: <FaLocationDot />,
      iconBg: "from-sky-400/20 to-cyan-400/10",
      iconColor: "text-sky-200",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/blerina-sadiku-30b27135a",
      href: "https://www.linkedin.com/in/blerina-sadiku-30b27135a",
      icon: <FaLinkedin />,
      iconBg: "from-blue-400/20 to-cyan-400/10",
      iconColor: "text-blue-200",
    },
    {
      label: "GitHub",
      value: "github.com/Blerinasad",
      href: "https://github.com/Blerinasad",
      icon: <FaGithub />,
      iconBg: "from-white/15 to-white/5",
      iconColor: "text-white",
    },
  ];

  return (
    <section id="contact" className="bg-[#0d0a18] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-200/80 mb-4">
              {t.contact.badge}
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white">
              {t.contact.title}
            </h2>

            <p className="text-slate-400 text-lg leading-8">
              {t.contact.desc}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="max-w-4xl mx-auto rounded-[32px] border border-pink-300/10 bg-[#151222]/80 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.32)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,132,252,0.10),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.08),transparent_30%)]" />

            <div className="relative space-y-4">
              {contacts.map((item, index) => {
                const content = (
                  <div className="group rounded-[26px] border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-pink-300/20 transition duration-300 px-5 py-5 flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.iconBg} border border-white/10 flex items-center justify-center text-xl shrink-0 ${item.iconColor}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1 text-left">
                      <p className="text-sm text-slate-400 mb-1">{item.label}</p>
                      <p className="text-white font-semibold break-words leading-7">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-pink-300/20 transition shrink-0">
                        ↗
                      </div>
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}