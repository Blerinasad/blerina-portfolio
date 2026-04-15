import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0a17]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#9b6dff] via-[#c084fc] to-[#f472b6] text-white font-bold text-sm shadow-[0_8px_25px_rgba(244,114,182,0.24)]">
            BS
          </div>

          <div className="leading-none">
            <p className="text-white font-semibold tracking-wide">Blerina Sadiku</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400 mt-2">
              Portfolio
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">
              {t.nav.about}
            </a>
            <a href="#skills" className="hover:text-white transition">
              {t.nav.skills}
            </a>
            <a href="#projects" className="hover:text-white transition">
              {t.nav.projects}
            </a>
            <a href="#certificates" className="hover:text-white transition">
              {t.nav.certificates}
            </a>
            <a href="#contact" className="hover:text-white transition">
              {t.nav.contact}
            </a>
            <a
              href="/Blerina-Sadiku-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              {t.nav.cv}
            </a>
          </nav>

          <LanguageSwitcher />

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9b6dff] via-[#c084fc] to-[#f472b6] text-white font-medium hover:scale-[1.02] transition shadow-[0_10px_30px_rgba(244,114,182,0.22)]"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0c0a17]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4 text-slate-300">
          <a href="#about" onClick={() => setOpen(false)} className="block">
            {t.nav.about}
          </a>
          <a href="#skills" onClick={() => setOpen(false)} className="block">
            {t.nav.skills}
          </a>
          <a href="#projects" onClick={() => setOpen(false)} className="block">
            {t.nav.projects}
          </a>
          <a href="#certificates" onClick={() => setOpen(false)} className="block">
            {t.nav.certificates}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">
            {t.nav.contact}
          </a>
          <a
            href="/Blerina-Sadiku-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            {t.nav.cv}
          </a>

          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}