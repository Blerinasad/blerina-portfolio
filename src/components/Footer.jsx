export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Blerina Sadiku. All rights reserved.
      </div>
    </footer>
  );
}