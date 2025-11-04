import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
      const [menuOpen, setMenuOpen] = useState(false);
    return (
    <div className="w-full z-50 block">
      <nav className="sticky top-0 z-50 bg-white text-black px-6 py-4 shadow-lg border-b-2 border-blue-700">
        <div className="flex items-center justify-center">
          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-8 text-sm font-medium">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Mein Portfolio
            </Link>
            <Link to="/projekte" className="hover:text-blue-500 transition-colors">
              Projekte
            </Link>
            <Link to="/kontakt" className="hover:text-blue-500 transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-blue-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-4 flex flex-col space-y-3 text-sm font-medium text-center">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors cursor-pointer">
              Mein Portfolio
            </Link>
            <Link to="/projekte" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors cursor-pointer">
              Projekte
            </Link>
            <Link to="/kontakt" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors cursor-pointer">
              Kontakt
            </Link>
          </div>
        )}
      </nav>
    </div>

    )} 