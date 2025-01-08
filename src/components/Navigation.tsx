import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className={`text-xl font-bold tracking-tight ${
              isScrolled ? "text-gray-900" : "text-gray-900 drop-shadow-md"
            }`}
          >
            <span className="text-[#FF6A00]">🌲ANDERSON</span> Tree Service
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div
              className={`flex items-center gap-1 transition-all duration-500 ${
                isScrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
            >
              {["Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg font-extrabold transition-all duration-300 ${
                    isScrolled
                      ? "text-green-600 hover:text-[#FF6A00]"
                      : "text-gray-100 hover:text-[#FF6A00] drop-shadow-md"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="tel:+12504700478"
              className="ml-4 inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#FF8533] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              <span>250-470-0478</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-900 hover:bg-white/20"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden bg-white/95 backdrop-blur-md`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {["Services", "Gallery", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-4 py-2 text-gray-900 hover:text-[#FF6A00] font-medium rounded-lg hover:bg-white/50 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+12504700478"
            className="block px-4 py-2 text-[#FF6A00] hover:text-[#FF8533] font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              250-470-0478
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
