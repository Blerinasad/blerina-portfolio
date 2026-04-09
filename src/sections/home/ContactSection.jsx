export default function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s build something meaningful together
        </h2>

        <p className="text-gray-300 text-lg leading-8 max-w-3xl mx-auto mb-10">
          I am open to internships, junior opportunities, collaborations, and
          real-world software projects where I can contribute, learn, and grow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <p className="text-sm text-gray-400 mb-2">Email</p>
            <a
              href="mailto:blerinasadiku4@gmail.com"
              className="text-white font-medium break-all hover:text-gray-300"
            >
              blerinasadiku4@gmail.com
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <p className="text-sm text-gray-400 mb-2">Location</p>
            <p className="text-white font-medium">Prishtinë, Kosovo</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <p className="text-sm text-gray-400 mb-2">GitHub</p>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white font-medium hover:text-gray-300"
            >
              Add your GitHub link here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}