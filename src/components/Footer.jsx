export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Blerina Sadiku. All rights reserved.
        </p>
      </div>
    </footer>
  );
}