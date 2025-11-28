// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const GOLD = "#D4AF37";
const BLUE = "#004e82";

export default function Footer() {
  return (
    <footer className="bg-[#004e82] text-white pt-10 pb-6 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop+ Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/ECOM.png" 
                alt="ECOM Network Logo" 
                className="w-12 h-12 rounded-lg object-contain bg-white"
                // 👉 No padding or extra bg — logo renders as-is
              />
              <div>
                <span className="block font-extrabold text-white text-xl tracking-tight">ECOM</span>
                <span className="block text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Network</span>
              </div>
            </div>
            <p className="text-[#cce6f7] text-sm max-w-xs leading-relaxed">
              Reliable, fast, and affordable internet for homes and businesses across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-[#D4AF37] mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#plans" className="text-[#cce6f7] hover:text-[#FFD700] transition-colors hover:underline">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <NavLink to="/about" className="text-[#cce6f7] hover:text-[#FFD700] transition-colors hover:underline">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-[#cce6f7] hover:text-[#FFD700] transition-colors hover:underline">
                  Contact
                </NavLink>
              </li>
              <li>
                <a href="/privacy" className="text-[#cce6f7] hover:text-[#FFD700] transition-colors hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-[#D4AF37] mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="tel:+254716425483" className="text-white hover:text-[#FFD700] transition-colors hover:underline">
                  +254 716 425483
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:support@ecomnetwork.co.ke" className="text-white hover:text-[#FFD700] transition-colors hover:underline">
                  support@ecomnetwork.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-white">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-bold text-lg text-[#D4AF37] mb-4 tracking-wide">Get Connected</h4>
            <a
              href="https://wa.me/+254716425483"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow hover:shadow-lg"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
            <p className="mt-4 text-[#cce6f7] text-xs leading-relaxed">
              Send us a message for instant support or to sign up.
            </p>
          </div>
        </div>

        {/* Mobile-Only Layout (Simplified) */}
        <div className="md:hidden space-y-8">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3">
            <img 
              src="/ECOM.png" 
              alt="ECOM Network Logo" 
              className="w-10 h-10 rounded-lg object-contain bg-white"
            />
            <div>
              <span className="block font-extrabold text-white text-lg">ECOM</span>
              <span className="block text-xs text-[#D4AF37] uppercase font-bold">Network</span>
            </div>
          </div>

          {/* WhatsApp CTA — the most critical action */}
          <div className="text-center">
            <a
              href="https://wa.me/+254716425483"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-full text-sm w-full max-w-xs mx-auto transition-colors"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Compact Contact Info */}
          <div className="text-center text-[#cce6f7] text-xs space-y-1">
            <p>++254 716 425483</p>
            <p>support@ecomnetwork.co.ke</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* Legal Bar — Same on All Devices */}
        <div className="mt-8 pt-6 border-t border-[#003c63] text-center">
          <p className="text-xs text-[#a0d4f7]">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-bold">ECOM</span>{" "}
            <span className="text-[#D4AF37]">Network</span> Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}