import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";
import Newsletter from "./Newsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Anderson Tree Service
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Professional tree care services in Kelowna and the Okanagan
              Valley. Proudly serving our community for over 30 years.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-[#FF6A00]" />
                <span>Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Award className="w-5 h-5 text-[#FF6A00]" />
                <span>Certified Arborists</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-[#FF6A00]" />
                <span>WorkSafeBC</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Services", "About Us", "Contact", "Emergency Service"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-[#FF6A00] transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-[#FF6A00] transition-colors duration-300">
                        {item}
                      </span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12504700478"
                  className="flex items-center gap-3 text-sm group"
                >
                  <Phone className="w-5 h-5 text-[#FF6A00] group-hover:animate-wiggle" />
                  <span className="group-hover:text-[#FF6A00] transition-colors duration-300">
                    250-470-0478
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@andersontreeservice.com"
                  className="flex items-center gap-3 text-sm group"
                >
                  <Mail className="w-5 h-5 text-[#FF6A00]" />
                  <span className="group-hover:text-[#FF6A00] transition-colors duration-300">
                    info@andersontreeservice.com
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#FF6A00]" />
                <span>Serving Kelowna & The Okanagan</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-[#FF6A00]" />
                <div>
                  <p>Mon-Sat: 7am-6pm</p>
                  <p className="text-[#FF6A00]">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-center">
            © {currentYear} <span className="text-[#FF6A00]">🌲ANDERSON</span>{" "}
            Tree Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
