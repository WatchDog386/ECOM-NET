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
  Headphones
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// --- BRAND CONFIGURATION ---
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;
const GOLD = "#FFC107"; // Bright yellow (BASIC plan button color)
const BLUE = "#004e82"; // Deep RISA Blue

// --- DATA ---
const plans = [
  {
    name: "BASIC",
    speed: "10mbps",
    price: "2000",
    headerColor: "bg-[#2C66A8]", 
    btnColor: "bg-[#FFC107] text-slate-900",     
    features: ["Ksh 2,000 Installation", "Average Speed 10 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "STANDARD",
    speed: "20mbps",
    price: "2500",
    headerColor: "bg-[#4CAF50]", 
    btnColor: "bg-[#9C27B0] text-white",     
    features: ["Free Installation", "Average Speed 20 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "PREMIUM PLAN",
    speed: "30mbps",
    price: "3000",
    headerColor: "bg-[#E69138]", 
    btnColor: "bg-[#0D2C54] text-white",     
    features: ["Free Installation", "Average Speed 30 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "ULTRA",
    speed: "40mbps",
    price: "4000",
    headerColor: "bg-[#7E57C2]", 
    btnColor: "bg-[#F57C00] text-white",     
    features: ["Free Installation", "Average Speed 40 Mbps", "Unlimited Data"],
    type: "home"
  },
  {
    name: "SUPER",
    speed: "60mbps",
    price: "5000",
    headerColor: "bg-[#E53935]", 
    btnColor: "bg-[#0D2C54] text-white",     
    features: ["Free Installation", "Average Speed 60 Mbps", "Unlimited Data"],
    type: "home"
  }
];

const featuresList = [
  { icon: <Headphones size={28} />, label: "24/7 Customer Service" },
  { icon: <Globe size={28} />, label: "Wide Coverage" },
  { icon: <HardHat size={28} />, label: "Qualified Technicians" },
  { icon: <ShieldCheck size={28} />, label: "Secure Connection" },
  { icon: <Gauge size={28} />, label: "High Speed Internet" },
];

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
    window.open(`https://wa.me/254726818938?text=${encodeURIComponent(message)}`, '_blank');
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
            
            {/* LEFT: Typography & Buttons */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              {/* Top headline: Blue + Yellow */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-5 tracking-tight">
                Fast and <br/>
                Affordable <span className="text-[#FFC107]">Network</span>
              </h1>
              
              {/* Sub-text: BLACK */}
              <p className="text-sm md:text-base text-black font-medium mb-6 max-w-lg leading-relaxed">
                Design your digital life with confidence using industry-leading fiber infrastructure for homes and businesses.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button 
                  onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow"
                >
                  View Plans
                </button>
                <button 
                  onClick={() => window.open("https://wa.me/254726818938", "_blank")}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-white text-[#004e82] border border-[#004e82] hover:bg-blue-50 transition-colors"
                >
                  Contact Sales
                </button>
              </div>
            </motion.div>

            {/* RIGHT: Feature Card (Client Portal) */}
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

              <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl relative h-[340px] flex items-center justify-center group cursor-pointer border border-[#333]">
                <div className="absolute inset-0 bg-[url('/ECOM.png')] bg-cover bg-center opacity-15 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"></div>

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

      {/* ================= FEATURE STRIP — TEXT IN BLACK ================= */}
      <section className="hidden md:flex py-8 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="flex items-center justify-around w-full">
                {featuresList.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2">
                        <div className="text-black">
                            {feature.icon}
                        </div>
                        <p className="text-black font-medium text-xs sm:text-sm max-w-[100px] leading-tight">
                            {feature.label}
                        </p>
                    </div>
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
                className="w-full max-w-[290px] bg-white rounded-xl shadow-lg overflow-visible relative flex flex-col border border-slate-100"
              >
                <div className={`${plan.headerColor} text-white pt-6 pb-7 rounded-t-xl rounded-b-[36px] flex flex-col items-center justify-center relative z-10`}>
                   <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">{plan.name}</span>
                   <h3 className="text-3xl font-extrabold mt-1">{plan.speed}</h3>
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
              </motion.div>
            ))}
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
                  <button onClick={() => setShowForm(false)} className="hover:bg-white/20 p-1 rounded-full"><X size={18}/></button>
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