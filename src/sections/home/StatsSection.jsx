const certificates = [
  "Web Development: HTML, CSS, JavaScript, WordPress, eCommerce – 2023",
  "Graphic Design: Figma, Photoshop, Illustrator – 2023",
  "Programming: C, C++, C# – 2023",
  "SQL Databases – 2023",
  "Web Hosting & Deployment – 2023",
  "English Language – C1 – 2019",
];

export default function StatsSection() {
  return (
    <section id="certificates" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4">
              Education
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Academic background
            </h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  UBT – University for Business and Technology
                </h3>
                <p>BSc in Computer Science and Engineering</p>
                <p className="text-gray-400">2023 – Present</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Gymnasium “Skënderbeu”, Preshevë
                </h3>
                <p>General Studies</p>
                <p className="text-gray-400">2019 – 2023</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4">
              Certificates & Languages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Training and qualifications
            </h2>

            <ul className="space-y-4 text-gray-300 mb-8">
              {certificates.map((item) => (
                <li key={item} className="border-b border-white/10 pb-3">
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["Albanian (Native)", "English (C1)", "German (Intermediate)", "Serbian (Intermediate)"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}