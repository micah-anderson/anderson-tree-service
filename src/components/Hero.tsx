import React, { useState, useEffect } from "react";
import { PhoneCall, Calendar } from "lucide-react";

export default function Hero() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <img
        src="/hero-image.png"
        alt="Professional Tree Care in Kelowna"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      {/* Animated overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/pattern.svg")',
            backgroundSize: "30px 30px",
            animation: "slide 20s linear infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
            Professional Tree Care Services in Kelowna
          </h1>
          <p className="text-xl mb-8 text-[#181818] leading-relaxed">
            Proudly serving Kelowna for over 30 years. Expert tree care services
            including tree removal, pruning, tree health and safety inspections,
            and emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-[#FF6A00] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Free Estimate
            </a>
            <a
              href="tel:+12504700478"
              className="flex items-center justify-center gap-2 bg-white hover:bg-[#FF6A00] text-green-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              <PhoneCall className="w-5 h-5" />
              250-470-0478
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className={`fixed bottom-4 right-4 bg-[#FF6A00] text-white rounded-full p-3 shadow-lg hover:bg-[#FF8533] transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </section>
  );
}
