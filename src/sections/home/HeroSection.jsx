import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../components/LanguageContext";
import { useEffect, useState } from "react";

const currentProjects = [
  {
    title: "2FA Auth System",
    tech: ["React", "Node.js", "JWT", "Tailwind"],
  },
  {
    title: "Smart Kitchen & Meal Planner",
    tech: ["React", "Express", "Docker", "MySQL"],
  },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex((prev) => (prev + 1) % currentProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = currentProjects[projectIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden bg-[#020617]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.20),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
      <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 text-indigo-300 text-sm mb-6 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-white tracking-tight">
            <span className="block">{t.hero.title1}</span>
            <span className="block bg-gradient-to-r from-white via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
            <span className="block">{t.hero.title3}</span>
            <span className="block bg-gradient-to-r from-[#f5d0fe] via-[#c4b5fd] to-[#a78bfa] bg-clip-text text-transparent">
              {t.hero.title4}
            </span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0">
            {t.hero.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-slate-400 text-base md:text-lg leading-8 mx-auto lg:mx-0">
            {t.hero.desc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white font-semibold hover:scale-[1.02] transition shadow-[0_10px_30px_rgba(99,102,241,0.35)]"
            >
              {t.hero.primaryBtn}
              <span className="ml-2 inline-block transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/Blerina-Sadiku-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-white font-semibold hover:bg-white hover:text-black transition"
            >
              {t.hero.secondaryBtn}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Blerinasad"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/20 transition shadow-[0_0_20px_rgba(255,255,255,0.03)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white group-hover:scale-110 transition">
                <FaGithub className="text-lg" />
              </span>
              <div className="text-left">
                <p className="text-xs text-slate-400 leading-none mb-1"></p>
                <p className="text-sm text-white font-medium leading-none">
                  Blerinasad
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/blerina-sadiku-30b27135a"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/20 transition shadow-[0_0_20px_rgba(255,255,255,0.03)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white group-hover:scale-110 transition">
                <FaLinkedin className="text-lg" />
              </span>
              <div className="text-left">
                <p className="text-xs text-slate-400 leading-none mb-1"></p>
                <p className="text-sm text-white font-medium leading-none">
                  blerina-sadiku
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-[32px] border border-indigo-400/20 bg-[#0b1120]/80 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_40%)]" />
            <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-indigo-500/20 to-transparent pointer-events-none" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Currently Building</p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {currentProject.title}
                  </h3>
                </div>
                <span className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)] mt-2" />
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black bg-gradient-to-r from-white to-[#c4b5fd] bg-clip-text text-transparent">
                    2
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Active</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black bg-gradient-to-r from-white to-[#c4b5fd] bg-clip-text text-transparent">
                    4+
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Stack</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black bg-gradient-to-r from-white to-[#c4b5fd] bg-clip-text text-transparent">
                    2026
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Current</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentProject.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-sm text-indigo-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {currentProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setProjectIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      idx === projectIndex
                        ? "bg-white"
                        : "bg-white/25 hover:bg-white/50"
                    }`}
                    aria-label={`Go to current project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}