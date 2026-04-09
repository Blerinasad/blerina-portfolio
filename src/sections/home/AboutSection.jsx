export default function AboutSection() {
  return (
    <section id="about" className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building digital experiences with code, logic, and design.
          </h2>
        </div>

        <div className="space-y-6 text-gray-300 leading-8 text-lg">
          <p>
            I am a Computer Science and Engineering student at UBT, passionate
            about creating modern software solutions through clean code,
            structured logic, and thoughtful design.
          </p>

          <p>
            My interests include full-stack web development, databases,
            responsive interfaces, and practical problem-solving through
            real-world applications.
          </p>

          <p>
            I am currently focused on growing through internships, junior roles,
            and projects that allow me to apply my technical and creative skills
            in professional environments.
          </p>
        </div>
      </div>
    </section>
  );
}
