import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex flex-col leading-none">
          <span className="text-white font-bold text-lg md:text-xl tracking-[0.08em] group-hover:text-[#f3e6c6] transition">
            Blerina Sadiku
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-slate-400 mt-2">
            Portfolio
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#certificates" className="hover:text-white transition">Certificates</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-[#020617] border-t border-white/10 text-slate-300 space-y-4">
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-white">About</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block hover:text-white">Skills</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-white">Projects</a>
          <a href="#certificates" onClick={() => setOpen(false)} className="block hover:text-white">Certificates</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-white">Contact</a>
        </div>
      )}
    </header>
  );
}