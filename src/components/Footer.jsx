// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#004e82] text-white pt-10 pb-6 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* =========================================
            DESKTOP VIEW (Hidden on Mobile) 
           ========================================= */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* 1. Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/log3.jpg" // ✅ UPDATED: Use log3.jpg as logo
                alt="ECOM Network Logo" 
                className="w-12 h-12 rounded-lg object-contain bg-white"
              />
              <div>
                <span className="block font-extrabold text-white text-xl tracking-tight">ECOM</span>
                <span className="block text-xs text-white uppercase tracking-widest font-bold">Network</span>
              </div>
            </div>
            <p className="text-[#cce6f7] text-sm max-w-xs leading-relaxed">
              Reliable, fast, and affordable internet for homes and businesses across Kenya.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#plans" className="text-[#cce6f7] hover:text-white hover:underline">Plans & Pricing</a></li>
              <li><NavLink to="/about" className="text-[#cce6f7] hover:text-white hover:underline">About Us</NavLink></li>
              <li><NavLink to="/contact" className="text-[#cce6f7] hover:text-white hover:underline">Contact</NavLink></li>
              <li><a href="/privacy" className="text-[#cce6f7] hover:text-white hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* 3. Contact Info (Desktop) */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="tel:+254740943523" className="text-white hover:underline">+254 740 943 523</a> {/* ✅ UPDATED PHONE */}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <a href="mailto:support@ecomnetwork.co.ke" className="text-white hover:underline">support@ecomnetwork.co.ke</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#D4AF37]" />
                <span className="text-white">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* 4. WhatsApp CTA (Desktop) */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4 tracking-wide">Get Connected</h4>
            <a
              href="https://wa.me/254740943523" // ✅ UPDATED & TRIMMED URL
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all shadow hover:shadow-lg"
            >
              <FaWhatsapp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* =========================================
            MOBILE VIEW (Fixed Colors)
           ========================================= */}
        <div className="md:hidden flex flex-col items-start space-y-8">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <img 
              src="/log3.jpg" // ✅ UPDATED: Consistent with desktop
              alt="ECOM Logo" 
              className="w-10 h-10 rounded-lg object-contain bg-white"
            />
            <div>
              <span className="block font-extrabold text-white text-lg leading-tight">ECOM</span>
              <span className="block text-xs text-white uppercase font-bold tracking-wider">Network</span>
            </div>
          </div>

          {/* Big Green Button */}
          <div className="w-full">
            <a
              href="https://wa.me/254740943523" // ✅ UPDATED & TRIMMED URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full bg-[#25D366] active:bg-[#1db954] text-white font-bold py-3.5 rounded-full text-base shadow-md"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Details (NOW PURE WHITE) */}
          <div className="w-full text-center space-y-2 text-white font-medium text-sm">
            <p>+254 740 943 523</p> {/* ✅ UPDATED PHONE */}
            <p>support@ecomnetwork.co.ke</p>
            <p>Nairobi, Kenya</p>
          </div>

        </div>

        {/* =========================================
            COPYRIGHT (Shared)
           ========================================= */}
        <div className="mt-8 pt-6 border-t border-[#003c63] text-center">
          <p className="text-xs text-[#a0d4f7]">
            © {new Date().getFullYear()} <span className="text-white font-bold">ECOM</span> <span className="text-white">Network</span> Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}