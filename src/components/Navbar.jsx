import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#4f46e5] text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
            BS
          </div>

          <span className="text-white font-semibold tracking-wide">
            Blerina Sadiku
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white transition">
              {t.nav.about}
            </a>
            <a href="#projects" className="hover:text-white transition">
              {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-white transition">
              {t.nav.skills}
            </a>
            <a href="/Blerina-Sadiku-CV.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition">
              {t.nav.cv}
            </a>
            <a href="#certificates" className="hover:text-white transition">
              {t.nav.certificates}
            </a>
            <a href="#contact" className="hover:text-white transition">
              {t.nav.contact}
            </a>
          </nav>

          <LanguageSwitcher />

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#4f46e5] text-white font-medium hover:opacity-90 transition"
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
        <div className="md:hidden bg-[#020617] border-t border-white/10 px-6 py-6 space-y-4 text-slate-300">
          <a href="#about" onClick={() => setOpen(false)} className="block">
            {t.nav.about}
          </a>
          <a href="#projects" onClick={() => setOpen(false)} className="block">
            {t.nav.projects}
          </a>
          <a href="#skills" onClick={() => setOpen(false)} className="block">
            {t.nav.skills}
          </a>
          <a
            href="/Blerina-Sadiku-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            {t.nav.cv}
          </a>
          <a href="#certificates" onClick={() => setOpen(false)} className="block">
            {t.nav.certificates}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block">
            {t.nav.contact}
          </a>

          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}