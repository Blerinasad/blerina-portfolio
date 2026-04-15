import Reveal from "../../components/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0f172a] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
            Contact
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let’s Connect
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-slate-400 text-lg leading-8 max-w-3xl mx-auto mb-12">
            I am open to internships, junior opportunities, collaborations, and
            real-world projects where I can contribute, learn, and grow.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch text-left">
          <Reveal>
            <div className="h-full min-h-[185px] rounded-[26px] border border-white/10 bg-[#111827] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-white/20 transition duration-300 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-3">Email</p>
                <h3 className="text-xl font-semibold mb-2 text-white">Get in touch</h3>
                <p className="text-slate-300 text-sm leading-7">
                  Reach out directly via email for internships, collaborations,
                  or project discussions.
                </p>
              </div>

              <a
                href="mailto:blerinasadiku4@gmail.com"
                className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
              >
                Send Email
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full min-h-[185px] rounded-[26px] border border-white/10 bg-[#111827] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-white/20 transition duration-300 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-3">Location</p>
                <h3 className="text-xl font-semibold mb-2 text-white">Based in Kosovo</h3>
                <p className="text-slate-300 text-sm leading-7">
                  Prishtinë, Kosovo — available for remote opportunities and
                  collaborative digital projects.
                </p>
              </div>

              <span className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/10 text-slate-300 font-medium">
                Prishtinë, Kosovo
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full min-h-[185px] rounded-[26px] border border-white/10 bg-[#111827] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-white/20 transition duration-300 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-3">GitHub</p>
                <h3 className="text-xl font-semibold mb-2 text-white">Code & Projects</h3>
                <p className="text-slate-300 text-sm leading-7">
                  Explore my repositories, portfolio work, and development
                  projects on GitHub.
                </p>
              </div>

              <a
                href="https://github.com/Blerinasad"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
              >
                Open GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="h-full min-h-[185px] rounded-[26px] border border-white/10 bg-[#111827] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.22)] hover:-translate-y-2 hover:border-white/20 transition duration-300 flex flex-col justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-3">LinkedIn</p>
                <h3 className="text-xl font-semibold mb-2 text-white">Professional Profile</h3>
                <p className="text-slate-300 text-sm leading-7">
                  View my professional background, academic path, and career
                  profile on LinkedIn.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/blerina-sadiku-30b27135a"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/15 text-white font-medium hover:bg-white hover:text-black transition"
              >
                View LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}