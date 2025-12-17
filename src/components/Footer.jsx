// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-10 pb-6 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* =========================================
            DESKTOP VIEW (Tablet and Up)
           ========================================= */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* 1. Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/log3.jpg"
                alt="ECOM Network Logo" 
                className="w-12 h-12 rounded-lg object-contain bg-white p-1"
              />
              <div>
                <span className="block font-extrabold text-white text-xl tracking-tight">ECOM</span>
                <span className="block text-xs text-[#cce6f7] uppercase tracking-wide font-bold">Network</span>
              </div>
            </div>
            <p className="text-[#a0d4f7] text-sm leading-relaxed max-w-[220px]">
              Reliable, fast, and affordable internet for homes and businesses across Kenya.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#plans" className="text-[#a0d4f7] hover:text-white transition-colors duration-200">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `text-[#a0d4f7] hover:text-white transition-colors duration-200 ${isActive ? 'text-white' : ''}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-[#a0d4f7] hover:text-white transition-colors duration-200 ${isActive ? 'text-white' : ''}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-[#a0d4f7] hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide text-base">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#a0d4f7]">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#FFC107]" />
                <a 
                  href="tel:+254740943523" 
                  className="hover:text-white transition-colors duration-200"
                >
                  +254 740 943 523
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#FFC107]" />
                <a 
                  href="mailto:support@ecomnetwork.co.ke" 
                  className="hover:text-white transition-colors duration-200 break-words"
                >
                  support@ecomnetwork.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#FFC107]" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* 4. WhatsApp CTA */}
          <div>
            <h4 className="font-bold text-white mb-4 tracking-wide text-base">Get Connected</h4>
            <a
              href="https://wa.me/254740943523"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#128C7E] focus:ring-offset-2 focus:ring-offset-[#003366]"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* =========================================
            MOBILE VIEW (Small Screens)
           ========================================= */}
        <div className="md:hidden flex flex-col items-center space-y-7">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/log3.jpg"
              alt="ECOM Network Logo" 
              className="w-10 h-10 rounded-lg object-contain bg-white p-0.5"
            />
            <div>
              <span className="block font-extrabold text-white text-lg">ECOM</span>
              <span className="block text-xs text-[#cce6f7] uppercase tracking-wide font-bold">Network</span>
            </div>
          </div>

          {/* WhatsApp CTA — Prominent */}
          <a
            href="https://wa.me/254740943523"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#25D366] active:bg-[#1db954] text-white font-bold py-3.5 rounded-full text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>

          {/* Quick Links - Compact */}
          <div className="w-full max-w-xs text-center text-[#a0d4f7] text-sm space-y-1.5">
            <a href="/#plans" className="block hover:text-white transition-colors">Plans & Pricing</a>
            <NavLink to="/about" className="block hover:text-white transition-colors">About Us</NavLink>
            <NavLink to="/contact" className="block hover:text-white transition-colors">Contact</NavLink>
            <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Contact Info - Centered */}
          <div className="text-center text-[#a0d4f7] text-sm space-y-1">
            <p>+254 740 943 523</p>
            <p className="break-words">support@ecomnetwork.co.ke</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* =========================================
            COPYRIGHT
           ========================================= */}
        <div className="mt-8 pt-6 border-t border-[#002244] text-center">
          <p className="text-xs text-[#a0d4f7]">
            © {new Date().getFullYear()} <span className="text-white font-bold">ECOM</span> Network Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}