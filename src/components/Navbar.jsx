// Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone, 
  Wifi
} from "lucide-react";

// Brand Configuration
const BRAND = {
  blue: "#015B97",
  yellow: "#FFC107",
  green: "#25D366",
};

const FONT_FAMILY = `'Proxima Nova', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;

const MENU_ITEMS = [
  { label: "Home", route: "/", id: "home" },
  { label: "About", route: "/about", id: "about" },
  { label: "Services", route: "/services", id: "services" },
  { label: "FAQs", route: "/faq", id: "faqs" },
  { label: "Contact", route: "/contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200 py-3" 
          : "bg-white py-5 border-b border-transparent"
      }`}
      style={{ fontFamily: FONT_FAMILY }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2 z-50 relative">
          <div className="relative flex items-center justify-center w-10 h-10 bg-slate-50 rounded-xl border border-slate-100 text-[#015B97]">
             <Wifi size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">Ecom</span>
              <span className="text-xl font-bold tracking-tight text-[#015B97]">Network</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] mb-1 ml-0.5 animate-pulse" />
            </div>
          </div>
        </NavLink>

        {/* DESKTOP NAV — BLACK TEXT, BLUE HOVER */}
        <nav className="hidden lg:flex items-center">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `block px-5 py-2 text-sm font-semibold transition-colors duration-200 mx-1 rounded-full ${
                  isActive 
                    ? "bg-[#015B97] text-white" 
                    : "text-slate-900 hover:text-[#015B97] hover:bg-slate-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-3">
          {/* BOLD GREEN PHONE ICON */}
          <a 
            href="tel:+254726818938"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-200 hover:scale-105"
            title="Call Support"
          >
            <Phone size={20} strokeWidth={2.5} />
          </a>

          <div className="h-6 w-px bg-slate-200 mx-1"></div>

          {/* YELLOW "GET CONNECTED" — NO ARROW */}
          <NavLink 
            to="/contact"
            className="px-5 py-2.5 bg-[#FFC107] text-slate-900 hover:bg-[#FFB300] text-sm font-bold rounded-full shadow hover:shadow-md transition-colors"
          >
            Get Connected
          </NavLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Menu size={26} strokeWidth={2.5} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-extrabold text-slate-900">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {MENU_ITEMS.map((item) => (
                  <NavLink 
                    key={item.id}
                    to={item.route}
                    className={({isActive}) => 
                      `block p-4 rounded-2xl text-lg font-semibold transition-colors ${
                        isActive 
                          ? "bg-[#015B97] text-white" 
                          : "text-slate-900 hover:bg-slate-100"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Phone Link */}
              <a 
                href="tel:+254726818938"
                className="flex items-center justify-center gap-3 py-3 w-full bg-[#25D366]/10 text-[#25D366] rounded-xl font-bold mb-4"
              >
                <Phone size={18} strokeWidth={2.5} />
                Call Now
              </a>

              {/* Mobile CTA — Yellow */}
              <NavLink 
                to="/contact" 
                className="flex items-center justify-center py-3 w-full bg-[#FFC107] text-slate-900 rounded-xl font-bold shadow"
              >
                Get Connected Now
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}