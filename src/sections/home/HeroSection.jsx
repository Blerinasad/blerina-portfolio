export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-4">
              Personal Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Blerina Sadiku
            </h1>

            <p className="mt-5 text-lg md:text-2xl text-gray-300 font-medium">
              Aspiring Software Engineer · Full-Stack Developer
            </p>

            <p className="mt-6 text-base md:text-lg text-gray-400 leading-8 max-w-2xl">
              I build modern, responsive, and user-focused web applications with
              a strong foundation in frontend development, backend logic,
              databases, and clean design.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-7 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/Blerina-Sadiku-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-2xl border border-gray-600 text-white font-semibold hover:border-white hover:bg-white hover:text-black transition duration-300"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-2xl border border-gray-600 text-white font-semibold hover:border-white hover:bg-white hover:text-black transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="text-lg text-white font-medium">
                    Software Engineering & Web Development
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Tech Stack</p>
                  <p className="text-lg text-white font-medium">
                    React, Node.js, MySQL, JavaScript
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Interests</p>
                  <p className="text-lg text-white font-medium">
                    Full-Stack Apps, Databases, UI Design
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg text-white font-medium">
                    Prishtinë, Kosovo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}