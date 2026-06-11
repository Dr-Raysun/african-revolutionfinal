// src/components/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/events", label: "Events" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A4</span>
            </div>
            <span className="font-bold text-xl text-gray-800">A4IR</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary border-b-2 border-primary" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="relative">
              <button
                onMouseEnter={() => setSectorsOpen(true)}
                onMouseLeave={() => setSectorsOpen(false)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                <span>Sectors</span>
                <ChevronDown size={16} />
              </button>
              {sectorsOpen && (
                <div
                  onMouseEnter={() => setSectorsOpen(true)}
                  onMouseLeave={() => setSectorsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50"
                >
                  <Link
                    to="/sectors#academy"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Academy
                  </Link>
                  <Link
                    to="/sectors#agriculture"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Agriculture
                  </Link>
                  <Link
                    to="/sectors#education"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Education
                  </Link>
                  <Link
                    to="/sectors#economy"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Economy
                  </Link>
                  <Link
                    to="/sectors#governance"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Governance
                  </Link>
                  <Link
                    to="/sectors#health"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Health
                  </Link>
                  <Link
                    to="/sectors#industry"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Industry
                  </Link>
                  <Link
                    to="/sectors#security"
                    className="block px-4 py-2 hover:bg-gray-50 text-gray-700"
                  >
                    A4IR Security
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-gray-700 hover:text-primary transition-colors ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <p className="font-semibold text-gray-800 mb-2">Sectors</p>
              <div className="space-y-1 pl-4">
                <Link
                  to="/sectors#academy"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Academy
                </Link>
                <Link
                  to="/sectors#agriculture"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Agriculture
                </Link>
                <Link
                  to="/sectors#education"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Education
                </Link>
                <Link
                  to="/sectors#economy"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Economy
                </Link>
                <Link
                  to="/sectors#governance"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Governance
                </Link>
                <Link
                  to="/sectors#health"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Health
                </Link>
                <Link
                  to="/sectors#industry"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Industry
                </Link>
                <Link
                  to="/sectors#security"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-gray-600"
                >
                  A4IR Security
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
