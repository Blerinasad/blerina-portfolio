import Reveal from "../../components/Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0f172a] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building modern digital solutions through code and design.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-6 text-slate-300 text-lg leading-8">
            <p>
              I am a Computer Science and Engineering student at UBT with a
              strong interest in software development, full-stack web
              applications, databases, and user-centered design.
            </p>

            <p>
              I enjoy combining structured logic, clean interfaces, and modern
              technologies to create practical digital experiences that are both
              functional and visually refined.
            </p>

            <p>
              I am currently focused on internships, junior opportunities, and
              real-world projects where I can contribute, grow, and strengthen
              my professional experience.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}