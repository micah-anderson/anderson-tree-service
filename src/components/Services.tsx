import React from "react";
import {
  TreePine,
  Scissors,
  AlertTriangle,
  Clipboard,
  Shovel,
  Hammer,
  Trees,
  Timer,
  Wrench,
  Flame,
  Search,
  Leaf,
  Trash2,
  Sprout,
} from "lucide-react";

const primaryServices = [
  {
    icon: TreePine,
    title: "Expert Tree Removal",
    description: "Professional tree removal services in Kelowna",
    features: [
      "Emergency & hazardous tree removal",
      "Large tree removal specialists",
      "Complete site cleanup guaranteed",
      "Safe and efficient process",
    ],
  },
  {
    icon: Scissors,
    title: "Tree Trimming & Pruning",
    description: "Enhance your property's beauty and safety",
    features: [
      "Crown reduction and shaping",
      "Dead wood removal",
      "View enhancement cuts",
      "Health maintenance pruning",
    ],
  },
  {
    icon: Scissors,
    title: "Hedge Trimming & Shaping",
    description: "Professional hedge maintenance for pristine landscapes",
    features: [
      "Precise hedge shaping",
      "Regular maintenance programs",
      "Privacy hedge expertise",
      "Clean and defined edges",
    ],
  },
  {
    icon: Search,
    title: "Tree Health Assessments",
    description: "Expert diagnosis and care recommendations",
    features: [
      "Disease identification",
      "Risk assessment",
      "Treatment planning",
      "Preventive care strategies",
    ],
  },
];

const secondaryServices = [
  {
    icon: Sprout,
    title: "Tree Planting",
    description: "Professional tree planting for a greener tomorrow",
  },
  {
    icon: Flame,
    title: "Fire Prevention Services",
    description: "Reduce fire hazards with strategic vegetation management",
  },
  {
    icon: Wrench,
    title: "Cabling & Bracing",
    description: "Structural support for vulnerable trees",
  },
];

const specialtyServices = [
  {
    icon: Trees,
    title: "Wood Chip Mulching",
    description: "Eco-friendly mulching solutions for your landscape",
  },
  {
    icon: Leaf,
    title: "Tree Preservation & Fertilization",
    description: "Comprehensive care programs for long-term tree health",
  },
  {
    icon: Trash2,
    title: "Invasive Plant Removal",
    description: "Protect your property from harmful invasive species",
  },
  {
    icon: Hammer,
    title: "Unique Wood Pieces",
    description: "Custom wood slabs and unique pieces from salvaged trees",
  },
];

export default function Services() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      id="services"
      aria-label="Our Services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Professional Tree Services in Kelowna
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 mb-4">
            From emergency removals to routine maintenance, we're your trusted
            local experts in comprehensive tree care
          </p>
          <p className="text-[#FF6A00] font-semibold text-lg sm:text-xl">
            We handle all your tree needs!
          </p>
        </header>

        {/* Primary Services */}
        <section
          className="mb-12 sm:mb-16 md:mb-20"
          aria-labelledby="primary-services"
        >
          <h3 id="primary-services" className="sr-only">
            Primary Services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {primaryServices.map((service, index) => (
              <article
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl
                          shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                          border border-gray-100
                          hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
                          hover:border-green-100
                          hover:-translate-y-1
                          transition-all duration-300
                          sm:min-h-[24rem]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-xl mb-6 group-hover:bg-green-100 transition-colors duration-300">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600 text-sm sm:text-base"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-xl 
                              hover:bg-[#FF6A00] transition-colors duration-300
                              text-sm sm:text-base"
                    aria-label={`Get a free estimate for ${service.title}`}
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      contactSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get a Free Estimate
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Secondary Services */}
        <section
          className="mb-12 sm:mb-16 md:mb-20"
          aria-labelledby="additional-services"
        >
          <h3
            id="additional-services"
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center"
          >
            Additional Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {secondaryServices.map((service, index) => (
              <article
                key={index}
                className="group bg-white/70 p-4 sm:p-6 rounded-xl border border-gray-100 
                          hover:border-green-100 transition-all duration-300
                          hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-block p-2 bg-green-50 rounded-lg mb-4 group-hover:bg-green-100 transition-colors duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {service.description}
                </p>
                <button
                  className="text-green-600 text-sm sm:text-base font-semibold hover:text-[#FF6A00] transition-colors duration-300"
                  aria-label={`Learn more about ${service.title}`}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More →
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Specialty Services */}
        <section
          className="mb-12 sm:mb-16"
          aria-labelledby="specialty-services"
        >
          <h3
            id="specialty-services"
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center"
          >
            Specialty Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {specialtyServices.map((service, index) => (
              <article
                key={index}
                className="group bg-white/70 p-4 sm:p-6 rounded-xl border border-gray-100 
                          hover:border-green-100 transition-all duration-300
                          hover:shadow-lg hover:-translate-y-1 flex items-center"
              >
                <div
                  className="inline-flex items-center justify-center p-2 bg-green-50 rounded-lg mr-4 
                              group-hover:bg-green-100 transition-colors duration-300 flex-shrink-0"
                >
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Feature Image Section - Standalone */}
        <section className="mb-12 sm:mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden group">
            <img
              src="/Jaden-inside-tree.jpg"
              alt="Expert arborist examining a hollow tree trunk for safety assessment"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Inside the Work: Expert Tree Assessment
              </h3>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                Our certified arborists go above and beyond, performing thorough
                internal cavity inspections to ensure the structural integrity
                and health of your trees.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Call-Out */}
        <aside
          className="bg-green-50 p-6 sm:p-8 rounded-2xl text-center"
          role="complementary"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-xl mb-4 shadow-sm">
            <Timer className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF6A00]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            24/7 Emergency Service Available
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Urgent tree care need? We're here to help any time, day or night.
          </p>
          <a
            href="tel:+12504700478"
            className="inline-flex items-center justify-center gap-2 bg-[#FF6A00] hover:bg-[#FF8533] text-white 
                      font-semibold py-3 px-6 sm:px-8 rounded-xl hover:scale-105
                      transition-all duration-300 text-sm sm:text-base group"
            aria-label="Call now for emergency service"
          >
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-wiggle" />
            Call Now: 250-470-0478
          </a>
        </aside>
      </div>
    </section>
  );
}
