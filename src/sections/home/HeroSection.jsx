import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden bg-[#020617]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.12),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_25%)]" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-5">
            Personal Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Blerina Sadiku
          </h1>

          <p className="mt-5 text-lg md:text-2xl text-slate-300 font-medium">
            Computer Science & Engineering Student · Full-Stack Developer
          </p>

          <p className="mt-7 max-w-2xl text-slate-400 text-base md:text-lg leading-8 mx-auto lg:mx-0">
            Passionate about building modern web applications with clean design,
            strong backend logic, and user-focused digital experiences using
            contemporary technologies and structured problem-solving.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition"
            >
              View Projects
            </a>

            <a
              href="/Blerina-Sadiku-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
  <a
    href="https://github.com/Blerinasad"
    target="_blank"
    rel="noreferrer"
    className="px-5 py-2.5 rounded-full border border-white/15 text-slate-300 hover:bg-white hover:text-black transition"
  >
    Open GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/blerina-sadiku-30b27135a"
    target="_blank"
    rel="noreferrer"
    className="px-5 py-2.5 rounded-full border border-white/15 text-slate-300 hover:bg-white hover:text-black transition"
  >
    View LinkedIn
  </a>
</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="flex gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-slate-500" />
              <span className="w-3 h-3 rounded-full bg-slate-600" />
              <span className="w-3 h-3 rounded-full bg-[#d4a017]" />
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-slate-400">Focus</p>
                <p className="text-lg font-medium text-white">
                  Full-Stack Web Development
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Tech Stack</p>
                <p className="text-lg font-medium text-white">
                  React, Node.js, MySQL, JavaScript
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Interests</p>
                <p className="text-lg font-medium text-white">
                  Software Development, Databases, UI Design
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-lg font-medium text-white">
                  Prishtinë, Kosovo
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}