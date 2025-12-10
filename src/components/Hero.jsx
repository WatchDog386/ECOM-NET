// Hero.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  CheckCircle,
  X,
  Globe,
  ShieldCheck,
  HardHat,
  Gauge,
  Headphones,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
  MapPin // ✅ Added MapPin import
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// --- BRAND CONFIGURATION ---
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;

// --- DATA: WIFI PLANS ---
const plans = [
  {
    name: "BASIC",
    speed: "3 Mbps",
    price: "100",
    headerColor: "bg-[#2C66A8]",
    btnColor: "bg-[#FFC107] text-slate-900",
    features: ["Ksh 2,000 Installation", "Average Speed 3 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "STANDARD",
    speed: "5 Mbps",
    price: "1500",
    headerColor: "bg-[#4CAF50]",
    btnColor: "bg-[#9C27B0] text-white",
    features: ["Free Installation", "Average Speed 5 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "PREMIUM PLAN",
    speed: "10 Mbps",
    price: "2000",
    headerColor: "bg-[#E69138]",
    btnColor: "bg-[#0D2C54] text-white",
    features: ["Free Installation", "Average Speed 10 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "ULTRA",
    speed: "20 Mbps",
    price: "3000",
    headerColor: "bg-[#7E57C2]",
    btnColor: "bg-[#F57C00] text-white",
    features: ["Free Installation", "Average Speed 20 Mbps", "Unlimited Data"],
    type: "home"
  },
];

// --- DATA: WHY CHOOSE US CARDS ---
const infoCards = [
  {
    image: "https://vumafiber.com/wp-content/uploads/2025/03/fast-speeds.jpg",
    title: "Blazing Fast Speeds 🚀",
  },
  {
    image: "https://vumafiber.com/wp-content/uploads/2025/03/reliable-connection-1.jpg",
    title: "Reliable & Stable Connection 🔗",
  },
  {
    image: "https://vumafiber.com/wp-content/uploads/2025/03/affordable-wifi.jpg",
    title: "Affordable & Flexible Plans 💰",
  },
  {
    image: "https://vumafiber.com/wp-content/uploads/2025/03/Customer-support.jpg",
    title: "Exceptional Customer Support ☎️",
  },
  {
    image: "https://vumafiber.com/wp-content/uploads/2025/03/wide-coverage.jpg",
    title: "Wide Coverage & Easy Setup",
  }
];

// --- DATA: FEATURE STRIP ---
const featuresList = [
  { icon: <Headphones size={28} className="text-[#FFC107]" />, label: "24/7 Customer Service" },
  { icon: <Globe size={28} className="text-[#004e82]" />, label: "Wide Coverage" },
  { icon: <HardHat size={28} className="text-[#E69138]" />, label: "Qualified Technicians" },
  { icon: <ShieldCheck size={28} className="text-[#4CAF50]" />, label: "Secure Connection" },
  { icon: <Gauge size={28} className="text-[#00a1df]" />, label: "High Speed Internet" },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0, opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const featureIconVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
};

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', email: '' });

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Connection Request: ${selectedPlan?.name} (${selectedPlan?.speed}) by ${formData.name}`;
    window.open(`https://wa.me/+254740943523?text=${encodeURIComponent(message)}`, '_blank');
    setShowForm(false);
  };

  const filteredPlans = plans.filter(p => p.type === 'home');

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans" style={{ fontFamily: FONT_FAMILY }}>
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="/ECOM.png"
                alt="Connectivity Background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* LEFT */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-5 tracking-tight">
                Make Your<br/>
                A Happy  <span className="text-[#FFC107]">Place</span>
              </h1>
              
              <p className="text-sm md:text-base text-black font-medium mb-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Design your digital life with confidence using industry-leading fiber infrastructure for homes and businesses.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                <button 
                  onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow"
                >
                  View Plans
                </button>
                <button 
                  onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-white text-[#004e82] border border-[#004e82] hover:bg-blue-50 transition-colors"
                >
                  Contact Sales
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -top-5 -left-5 z-20">
                <button className="bg-[#FFC107] hover:bg-[#FFB300] text-black text-[10px] font-bold px-4 py-2 rounded-full shadow-md uppercase tracking-wider transition-transform hover:scale-105">
                  Get Connected Now
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[340px] flex items-center justify-center group cursor-pointer border border-[#333]">
                <div className="absolute inset-0 bg-[url('/ecom.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 text-center text-white px-6">
                  <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/10 backdrop-blur-sm">
                      <Wifi size={24} className="text-[#FFC107]" />
                  </div>
                  <h3 className="text-xl font-light tracking-widest mb-1">ECOM NET</h3>
                  <h2 className="text-2xl font-bold mb-3 text-[#FFC107]">GET CONNECTED</h2>
                  <div className="flex flex-wrap justify-center gap-1 text-[9px] font-bold tracking-wider uppercase opacity-90">
                    <span>Pay Bills</span> • <span>Check Speed</span> • <span>Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE STRIP ================= */}
      <section className="hidden md:flex py-8 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center justify-around w-full">
            {featuresList.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-2"
              >
                <motion.div
                  variants={featureIconVariants}
                  whileHover="hover"
                  className="transition-all duration-300"
                >
                  {feature.icon}
                </motion.div>
                <p className="text-black font-medium text-xs sm:text-sm max-w-[100px] leading-tight">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PLANS SECTION ================= */}
      <section id="plans" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-[#1F5493]">
              Ecom Net – Internet Plans for You!
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group w-full max-w-[290px]"
              >
                <div className="bg-white rounded-xl overflow-visible relative flex flex-col border border-slate-100 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className={`${plan.headerColor} text-white pt-6 pb-7 rounded-t-xl rounded-b-[36px] flex flex-col items-center justify-center relative z-10`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">{plan.name}</span>
                    <h3 className="text-3xl font-extrabold mt-1 text-black">{plan.speed}</h3> {/* ✅ Black Mbps */}
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-[12px]">Ksh</span>
                      <span className="text-xl font-bold">{plan.price}</span>
                      <span className="text-[8px]">/month</span>
                    </div>
                  </div>

                  <div className="relative z-20 -mt-3 flex justify-center">
                    <button 
                      onClick={() => handlePlanSelect(plan)}
                      className={`${plan.btnColor} font-bold text-[10px] uppercase px-6 py-2 rounded-full shadow hover:shadow-md hover:scale-[1.02] transition-all duration-200 ring-2 ring-white`}
                    >
                      Get Connected
                    </button>
                  </div>

                  <div className="pt-4 px-5 pb-5">
                    <ul className="space-y-2 text-left">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-slate-600">
                          <CheckCircle size={14} className="text-[#00BCD4] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION (Vuma Style) ================= */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#004e82]">
              Why Choose Ecom Net?
            </h2>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-start gap-8 sm:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {infoCards.map((card, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center text-center max-w-[180px]"
              >
                {/* ✅ Sharp corners: no 'rounded' class on image container */}
                <div className="w-full h-48 mb-3 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{card.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA BANNER (Vuma Style) ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-green-400 to-orange-500 rounded-xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
              <span>🚀</span> Get Blazing-Fast Internet with Ecom Net!
            </h2>
            <p className="text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Reliable, high-speed internet for your home or business. Connect with us today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <button 
                onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                className="bg-white text-[#004e82] font-bold py-2 px-6 rounded-full shadow hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                <Phone size={16} /> Contact Us Now
              </button>
              <button 
                onClick={() => window.open("https://vumafiber.com/", "_blank")} // 🔁 Replace with your coverage URL
                className="border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MapPin size={16} /> Check Coverage
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs">
              <Mail size={14} />
              <span>Call us: <strong>0740943523</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MODAL FORM ================= */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-[#004e82] p-5 flex justify-between items-center text-white">
                <h3 className="font-bold text-base">Order Summary</h3>
                <button onClick={() => setShowForm(false)} className="hover:bg-white/20 p-1 rounded-full">
                  <X size={18} />
                </button>
              </div>
              <div className="p-5">
                <div className="mb-5 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Plan Selected</p>
                  <p className="text-[#004e82] font-bold text-base">{selectedPlan?.name}</p>
                  <p className="text-slate-600 text-sm">{selectedPlan?.speed} @ Ksh {selectedPlan?.price}</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input 
                    className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#004e82] focus:ring-1 focus:ring-[#004e82] outline-none"
                    placeholder="Your Name"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <input 
                    className="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:border-[#004e82] focus:ring-1 focus:ring-[#004e82] outline-none"
                    placeholder="Phone Number"
                    type="tel"
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm">
                    <FaWhatsapp size={16} /> Proceed to WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;