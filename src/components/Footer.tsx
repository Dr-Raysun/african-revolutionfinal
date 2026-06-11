import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-xl">A4</span>
              </div>
              <span className="font-bold text-xl">A4IR</span>
            </div>
            <p className="text-gray-400 mb-4">
              Championing African 4th Industrial Revolution through innovative
              technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Key Sectors</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sectors#academy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  A4IR Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors#agriculture"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  A4IR Agriculture
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors#education"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  A4IR Education
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors#health"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  A4IR Health
                </Link>
              </li>
              <li>
                <Link
                  to="/sectors#security"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  A4IR Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  info@african4ir.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gray-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  +234-806-700-7462
                  <br />
                  +234-805-292-0626
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 mt-1" />
                <span className="text-gray-400 text-sm">
                  1A, Block D, Alhaji Adebayo Layout, Apete, Ibadan, Oyo State,
                  Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} A4IR - African 4th Industrial
            Revolution. All rights reserved.
          </p>
          <p className="mt-2">Incorporated: 2021 | RC: 3432957</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
