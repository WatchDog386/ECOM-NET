import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

// 🔧 Brand Configuration
const BRAND = {
  blue: "#003366",
  yellow: "#F9A825",
  green: "#25D366",
  lightBlue: "#E6F0FF",
};

const MENU_ITEMS = [
  { label: "Home", route: "/", id: "home" },
  { label: "About", route: "/about", id: "about" },
  { label: "Services", route: "/services", id: "services" },
  { label: "Support", route: "/faq", id: "support" },
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-slate-100"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* --- Logo Section --- */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <NavLink to="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-slate-900">Ecom</span>
            <span className="text-2xl font-bold tracking-tighter ml-1" style={{ color: BRAND.blue }}>
              Network
            </span>
            <motion.div
              className="w-2 h-2 rounded-full ml-1.5 shadow-sm"
              style={{ backgroundColor: BRAND.yellow }}
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </NavLink>
        </motion.div>

        {/* --- Desktop Links --- */}
        <nav className="hidden lg:flex items-center bg-slate-50/50 rounded-full px-2 py-1 border border-slate-100">
          {MENU_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                  isActive ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navpill"
                      className="absolute inset-0 z-0 rounded-full shadow-md"
                      style={{ backgroundColor: BRAND.blue }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* --- Actions --- */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href="tel:+254740943523"
            whileHover={{ backgroundColor: BRAND.lightBlue }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-slate-700 transition-colors"
          >
            <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-full">
              <Phone size={14} fill="currentColor" />
            </div>
            <span className="text-sm font-bold">Support</span>
          </motion.a>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
            <NavLink
              to="/contact"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm shadow-lg shadow-yellow-500/20"
              style={{ background: `linear-gradient(135deg, ${BRAND.yellow} 0%, #FFB347 100%)`, color: BRAND.blue }}
            >
              Get Connected
              <ArrowRight size={16} />
            </NavLink>
          </motion.div>
        </div>

        {/* --- Mobile Toggle --- */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-900 border border-slate-200"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] lg:hidden bg-slate-900/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[320px] bg-white p-8 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-slate-50 text-slate-500"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-2">
                {MENU_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={item.route}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-bold transition-all ${
                          isActive 
                            ? "bg-slate-900 text-white shadow-lg" 
                            : "text-slate-700 hover:bg-slate-50"
                        }`
                      }
                    >
                      {item.label}
                      <ArrowRight size={18} className="opacity-20" />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-slate-100 space-y-4">
                <a
                  href="tel:+254740943523"
                  className="flex items-center justify-center gap-3 py-4 w-full bg-emerald-50 text-emerald-700 rounded-2xl font-bold"
                >
                  <Phone size={18} />
                  Call Support
                </a>
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center py-4 w-full rounded-2xl font-black shadow-lg shadow-yellow-500/20"
                  style={{ background: BRAND.yellow, color: BRAND.blue }}
                >
                  Get Started Now
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}