import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerText = t?.footer?.text || "All rights reserved.";

  return (
    <footer className="bg-[#0a0814] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Blerina Sadiku. {footerText}
      </div>
    </footer>
  );
}