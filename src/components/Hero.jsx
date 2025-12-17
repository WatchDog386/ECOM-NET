import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wifi,
  CheckCircle,
  X,
  Globe,
  ShieldCheck,
  HardHat,
  Zap,
  Headphones,
  Phone,
  Mail,
  Info
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// --- PLAN DATA ---
const plans = [
  {
    name: "BASIC",
    speed: "3 Mbps",
    price: "1000",
    headerColor: "bg-[#2C66A8]",
    btnColor: "bg-[#FFC107] text-slate-900",
    features: ["Ksh 2,000 Installation", "Average Speed 3 Mbps", "Unlimited Data"],
  },
  {
    name: "STANDARD",
    speed: "5 Mbps",
    price: "1500",
    headerColor: "bg-[#4CAF50]",
    btnColor: "bg-[#9C27B0] text-white",
    features: ["Free Installation", "Average Speed 5 Mbps", "Unlimited Data"],
  },
  {
    name: "PREMIUM PLAN",
    speed: "10 Mbps",
    price: "2000",
    headerColor: "bg-[#E69138]",
    btnColor: "bg-[#0D2C54] text-white",
    features: ["Free Installation", "Average Speed 10 Mbps", "Unlimited Data"],
  },
  {
    name: "ULTRA",
    speed: "20 Mbps",
    price: "3000",
    headerColor: "bg-[#7E57C2]",
    btnColor: "bg-[#F57C00] text-white",
    features: ["Free Installation", "Average Speed 20 Mbps", "Unlimited Data"],
  },
];

// --- WHY CHOOSE US ---
const infoCards = [
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/fast-speeds.jpg", title: "BLAZING FAST SPEEDS", desc: "Zero-lag fiber technology." },
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/reliable-connection-1.jpg", title: "RELIABLE CONNECTION", desc: "99.9% uptime guaranteed." },
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/affordable-wifi.jpg", title: "AFFORDABLE PLANS", desc: "Premium internet, fair pricing." },
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/Customer-support.jpg", title: "24/7 DEDICATED SUPPORT", desc: "Always here when you need us." },
];

const featuresList = [
  { icon: <Headphones size={24} className="text-[#FFC107]" />, label: "24/7 Customer Service" },
  { icon: <Globe size={24} className="text-[#004e82]" />, label: "Wide Coverage" },
  { icon: <HardHat size={24} className="text-[#E69138]" />, label: "Qualified Technicians" },
  { icon: <ShieldCheck size={24} className="text-[#4CAF50]" />, label: "Secure Connection" },
  { icon: <Zap size={24} className="text-[#00a1df]" />, label: "High Speed Internet" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({ name: '' });

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

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F9A825]">
      
      {/* HERO SECTION - MODERATE DARK (CHARCOAL/SLATE) */}
      <section className="relative pt-20 pb-16 md:pt-28 overflow-hidden bg-[#334155]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
              Make Your Home <br /> A <span className="text-[#F9A825]">Happy Place</span>
            </h1>
            <p className="text-base md:text-lg text-slate-200 mb-6 max-w-lg font-medium">
              Design your digital life with confidence using industry-leading fiber infrastructure. Fast, stable, and affordable.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2.5 bg-white text-[#334155] font-bold rounded-full text-sm shadow hover:bg-slate-100 transition-colors">
                Learn More
              </button>
              <button 
                onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                className="px-6 py-2.5 bg-[#F9A825] text-white font-bold rounded-full text-sm shadow hover:brightness-110"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
          
          <div className="hidden lg:block relative">
            <div className="w-[480px] h-[320px] bg-slate-700 rounded-[2.5rem] p-5 shadow-2xl relative border border-slate-600">
               <div className="w-full h-full bg-[#1e293b] rounded-xl flex flex-col items-center justify-center text-center p-5 text-white">
                    <Wifi size={44} className="text-[#F9A825] mb-3" />
                    <h2 className="text-3xl font-black tracking-tight uppercase italic">Ecom Net</h2>
                    <p className="text-[#F9A825] font-bold tracking-widest mt-1 text-[9px]">GET CONNECTED</p>
                    <button 
                      onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                      className="mt-4 bg-[#F9A825] text-[#003366] px-5 py-1.5 rounded-full font-black text-[9px]"
                    >
                      ORDER NOW
                    </button>
               </div>
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-12 bg-slate-700 rounded-b-lg shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="hidden md:flex py-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            className="flex items-center justify-around w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {featuresList.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-1.5"
              >
                <div className="transition-transform hover:scale-110">{feature.icon}</div>
                <p className="text-[11px] font-medium text-slate-700 max-w-[90px] leading-tight">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-bold text-[#1F5493]">
              Ecom Net – Internet Plans for You!
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="w-full max-w-[260px] bg-white rounded-xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`${plan.headerColor} text-white pt-5 pb-8 rounded-t-xl rounded-b-[32px] flex flex-col items-center relative z-10`}>
                  <span className="text-[9px] font-bold uppercase tracking-wider opacity-90 mb-1">{plan.name}</span>
                  <h3 className="text-3xl font-black text-white drop-shadow-md">{plan.speed}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-[11px] font-medium">Ksh</span>
                    <span className="text-xl font-bold">{plan.price}</span>
                    <span className="text-[7px] opacity-80 uppercase">/month</span>
                  </div>
                </div>

                <div className="relative z-20 -mt-3 flex justify-center">
                  <button 
                    onClick={() => handlePlanSelect(plan)}
                    className={`${plan.btnColor} font-black text-[9px] uppercase px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform ring-4 ring-white`}
                  >
                    GET CONNECTED
                  </button>
                </div>

                <div className="pt-6 px-4 pb-5">
                  <ul className="space-y-2 text-left">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                        <CheckCircle size={12} className="text-[#00BCD4] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* INSTALLATION TABLE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-12 bg-slate-50 p-6 border border-slate-200"
          >
            <div className="flex items-center gap-2 mb-4">
              <HardHat size={20} className="text-[#E69138]" />
              <h3 className="text-lg font-bold text-[#003366]">One-Time Installation Fee</h3>
            </div>
            
            <div className="overflow-hidden border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="px-4 py-3 font-bold">Item Description</th>
                    <th className="px-4 py-3 font-bold text-right">Cost (Ksh)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 text-slate-600">Dual-Band WiFi Router</td>
                    <td className="px-4 py-3 text-right font-semibold">1,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-600">Installation & Cabling Labor</td>
                    <td className="px-4 py-3 text-right font-semibold">500</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-3 font-bold text-[#003366]">Total Installation Package</td>
                    <td className="px-4 py-3 text-right font-black text-[#003366]">Ksh 2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-start gap-2 bg-yellow-50 p-3 border border-yellow-100">
              <Info size={16} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-[12px] text-yellow-800 leading-snug">
                <strong>Note:</strong> The installation fee is a one-time payment. Monthly WiFi package subscriptions are paid <strong>separately</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-[#003366] uppercase tracking-tight">Why Choose Ecom Net?</h2>
            <div className="w-12 h-0.5 bg-[#F9A825] mx-auto mt-2"></div>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col border border-slate-200 overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#003366] flex-grow flex flex-col justify-center">
                  <h4 className="font-black text-[12px] text-[#F9A825] mb-1">{card.title}</h4>
                  <p className="text-[10px] text-white/80">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12 border border-slate-200"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-3">
                Ready for <span className="text-[#F9A825]">Blazing Fast</span> Internet?
              </h2>
              <p className="text-slate-600 mb-6 text-sm md:text-base">
                Join thousands of satisfied customers who trust Ecom Net for their internet needs.
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-green-500" />
                  <span>Call us 24/7: <strong>0740 943 523</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-blue-500" />
                  <span>Email: <strong>sales@ecomnet.ke</strong></span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-[#003366] p-6 md:p-8 text-white border border-slate-300">
              <h3 className="text-lg font-bold mb-4 text-center">Get Connected Today</h3>
              <button 
                onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                className="w-full bg-[#F9A825] text-[#003366] font-bold py-3 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors"
              >
                <FaWhatsapp size={18} />
                ORDER ON WHATSAPP →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL FORM */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 bg-[#003366]/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white w-full max-w-md border-t-4 border-[#F9A825] p-6 rounded-xl shadow-xl relative"
            >
              <button onClick={() => setShowForm(false)} className="absolute top-3 right-3 text-slate-400 hover:text-red-500">
                <X size={24}/>
              </button>
              
              <h3 className="text-xl font-black text-[#003366] mb-4">Order Summary</h3>
              <p className="text-slate-600 text-sm mb-4">
                Selected: <span className="font-bold">{selectedPlan?.name} ({selectedPlan?.speed})</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  required 
                  className="w-full border border-slate-200 p-3 text-sm rounded-lg"
                  placeholder="Your Full Name"
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <button className="w-full bg-[#25D366] text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 hover:brightness-110">
                  <FaWhatsapp size={18} /> Confirm on WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;