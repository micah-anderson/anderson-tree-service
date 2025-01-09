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
    <>
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center overflow-hidden bg-white">
        {/* Background Image Container - Hidden on Mobile */}
        <div className="hidden md:block absolute inset-0 z-0">
          <img
            src="/hero-image.png"
            alt="Professional Tree Care in Kelowna"
            className="w-full h-full object-cover"
          />
          {/* Desktop Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 35%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
              Professional Tree Care Services in Kelowna
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-700 leading-relaxed max-w-2xl">
              Proudly serving Kelowna for over 30 years. Expert tree care
              services including tree removal, pruning, tree health and safety
              inspections, and emergency services.
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

        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/pattern.svg")',
              backgroundSize: "30px 30px",
              animation: "slide 20s linear infinite",
            }}
          />
        </div>
      </section>

      {/* Mobile Image Section - Separate section below hero */}
      <section className="md:hidden w-full relative">
        {/* Faded Background Version */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img
            src="/hero-image.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Image */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src="/hero-image.png"
              alt="Professional Tree Care in Kelowna"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gradient Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, white 0%, transparent 5%, transparent 95%, white 100%)",
            }}
          />
        </div>
      </section>

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
    </>
  );
}
