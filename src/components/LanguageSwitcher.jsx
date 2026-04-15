import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const languages = [
  { code: "en", label: "EN"},
  { code: "sq", label: "SQ"},
  { code: "de", label: "DE"},
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current =
    languages.find((item) => item.code === language) || languages[0];

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-sm font-medium">{current.label}</span>
        <span className={`text-xs transition ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-white/10 bg-[#0f172a]/95 backdrop-blur-xl shadow-[0_18px_50px_rgba(0,0,0,0.35)] overflow-hidden z-50">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition ${
                language === item.code
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-base leading-none">{item.flag}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}