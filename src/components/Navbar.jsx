import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    "home",
    "about",
    "experience",
    "services",
    "projects",
    "contact",
  ];

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[360px] z-50">
      <div className="backdrop-blur-xl bg-[#08243a]/90 border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-4">

          {/* Logo / Name */}
          <h2 className="font-bold md:hidden">
            Ahmad Raza
          </h2>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover:text-blue-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}

            {/* Download CV Button */}
            <a
              href="/AhmadRazaInfo.pdf"
              download
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-500 transition"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col p-4 gap-4 border-t border-white/10">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400 transition"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}

            {/* Mobile CV Button */}
          <a
  href="/AhmadRazaInfo.pdf"
  download
  onClick={() => setMenuOpen(false)}
  className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition"
>
  Download CV
</a>
          </div>
        )}
      </div>
    </header>
  );
}