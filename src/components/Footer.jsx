// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Wifi, Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Rich gold for premium feel
const GOLD = "#D4AF37";

export default function Footer() {
  return (
    <footer className="bg-[#004e82] text-white pt-12 pb-8 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[#004e82]">
                <Wifi size={24} />
              </div>
              <div>
                <span className="block font-extrabold text-black text-xl tracking-tight">ECOM</span>
                <span className="block text-xs text-[#D4AF37] uppercase tracking-widest font-bold">Network</span>
              </div>
            </div>
            <p className="text-[#cce6f7] text-sm max-w-xs">
              Reliable, fast, and affordable internet for homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-[#D4AF37] mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/#plans" 
                  className="text-[#cce6f7] hover:text-[#FFD700] transition-colors inline-block"
                >
                  Plans & Pricing
                </a>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-[#cce6f7] hover:text-[#FFD700] transition-colors"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-[#cce6f7] hover:text-[#FFD700] transition-colors"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-[#cce6f7] hover:text-[#FFD700] transition-colors inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info — "Nairobi, Kenya" is WHITE */}
          <div>
            <h4 className="font-bold text-lg text-[#D4AF37] mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="tel:+254726818938" className="text-white hover:text-[#FFD700] transition-colors">
                  +254 726 818938
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:support@ecomnetwork.co.ke" className="text-white hover:text-[#FFD700] transition-colors">
                  support@ecomnetwork.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                {/* ✅ Now explicitly white */}
                <span className="text-white">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-bold text-lg text-[#D4AF37] mb-4 tracking-wide">Get Connected</h4>
            <a
              href="https://wa.me/254726818938"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors shadow-lg"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
            <p className="mt-4 text-[#cce6f7] text-xs">
              Send us a message for instant support or to sign up.
            </p>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-10 pt-6 border-t border-[#003c63] text-center">
          <p className="text-xs text-[#a0d4f7]">
            © {new Date().getFullYear()}{" "}
            <span className="text-black font-bold">ECOM</span>{" "}
            <span className="text-[#D4AF37]">Network</span> Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}