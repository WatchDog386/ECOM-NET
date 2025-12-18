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

const infoCards = [
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/fast-speeds.jpg", title: "BLAZING FAST SPEEDS", desc: "Zero-lag fiber technology." },
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/reliable-connection-1.jpg", title: "RELIABLE CONNECTION", desc: "99.9% uptime guaranteed." },
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/affordable-wifi.jpg", title: "AFFORDABLE PLANS", desc: "Premium internet, fair pricing." },
  { image: "https://vumafiber.com/wp-content/uploads/2025/03/Customer-support.jpg", title: "24/7 DEDICATED SUPPORT", desc: "Always here when you need us." },
];

const featuresList = [
  { icon: <Headphones size={20} className="text-[#FFC107]" />, label: "24/7 Customer Service" },
  { icon: <Globe size={20} className="text-[#004e82]" />, label: "Wide Coverage" },
  { icon: <HardHat size={20} className="text-[#E69138]" />, label: "Qualified Technicians" },
  { icon: <ShieldCheck size={20} className="text-[#4CAF50]" />, label: "Secure Connection" },
  { icon: <Zap size={20} className="text-[#00a1df]" />, label: "High Speed Internet" },
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    email: '',
    message: ''
  });

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#F9A825]">
      
      {/* HERO SECTION — WHITE BACKGROUND */}
      <section className="relative pt-8 pb-12 md:pt-16 md:pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8 items-center min-h-[300px] md:min-h-[400px] lg:min-h-[520px]">
          {/* Text Content — Centered on Mobile/Tablet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#003366] leading-tight mb-4 tracking-tight">
              Make Your Home <br /> A <span className="text-[#F9A825]">Happy Place</span>
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-slate-600 mb-6 max-w-lg mx-auto lg:mx-0 font-medium">
              Design your digital life with confidence using industry-leading fiber infrastructure. Fast, stable, and affordable.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button className="px-4 py-2 bg-[#003366] text-white font-bold rounded-full text-xs md:text-sm shadow hover:bg-[#002244] transition-colors">
                Learn More
              </button>
              <button 
                onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                className="px-4 py-2 bg-[#F9A825] text-[#003366] font-bold rounded-full text-xs md:text-sm shadow hover:brightness-110"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
          
          {/* Floating Card — Unchanged */}
          <div className="hidden lg:block relative">
            <div className="w-[460px] h-[300px] bg-slate-700 rounded-2xl p-5 shadow-2xl relative border border-slate-600">
               <div className="w-full h-full bg-[#1e293b] rounded-xl flex flex-col items-center justify-center text-center p-5 text-white">
                    <Wifi size={42} className="text-[#F9A825] mb-3" />
                    <h2 className="text-3xl font-black tracking-tight uppercase">Ecom Net</h2>
                    <p className="text-[#F9A825] font-bold tracking-widest mt-1 text-[9px]">GET CONNECTED</p>
                    <button 
                      onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                      className="mt-4 bg-[#F9A825] text-[#003366] px-5 py-1.5 rounded-full font-black text-[9px]"
                    >
                      ORDER NOW
                    </button>
               </div>
               <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-16 h-11 bg-slate-700 rounded-b-lg shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="hidden md:flex py-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 w-full">
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
                className="flex flex-col items-center text-center gap-1"
              >
                <div className="transition-transform hover:scale-110">{feature.icon}</div>
                <p className="text-[10px] font-medium text-slate-700 max-w-[80px] leading-tight">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WIFI PLANS SECTION */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-black text-[#1F5493]">
              Ecom Net – Internet Plans for You!
            </h2>
            <p className="text-slate-500 text-sm mt-1">High-speed fiber for every home</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="w-full max-w-[280px] bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${plan.headerColor} text-white pt-6 pb-10 rounded-t-xl rounded-b-3xl flex flex-col items-center relative z-10`}>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-90 mb-2">{plan.name}</span>
                  <h3 className="text-3xl font-black">{plan.speed}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-xs font-bold">Ksh</span>
                    <span className="text-2xl font-black">{plan.price}</span>
                    <span className="text-[10px] opacity-80 uppercase font-bold">/mo</span>
                  </div>
                </div>

                <div className="relative z-20 -mt-4 flex justify-center">
                  <button 
                    onClick={() => handlePlanSelect(plan)}
                    className={`${plan.btnColor} font-black text-[10px] uppercase px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform ring-4 ring-white`}
                  >
                    GET CONNECTED
                  </button>
                </div>

                <div className="pt-8 px-5 pb-6">
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle size={14} className="text-[#00BCD4] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mt-10 bg-slate-50 p-5 border border-slate-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <HardHat size={18} className="text-[#E69138]" />
              <h3 className="text-base font-bold text-[#003366]">One-Time Installation Fee</h3>
            </div>
            
            <div className="overflow-hidden border border-slate-200 bg-white">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-[#003366] text-white">
                  <tr>
                    <th className="px-3 py-2.5 font-bold">Item Description</th>
                    <th className="px-3 py-2.5 font-bold text-right">Cost (Ksh)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-3 py-2.5 text-slate-600">Dual-Band WiFi Router</td>
                    <td className="px-3 py-2.5 text-right font-semibold">1,500</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 text-slate-600">Installation & Cabling Labor</td>
                    <td className="px-3 py-2.5 text-right font-semibold">500</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-3 py-2.5 font-bold text-[#003366]">Total Installation Package</td>
                    <td className="px-3 py-2.5 text-right font-bold text-[#003366]">Ksh 2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex items-start gap-2 bg-yellow-50 p-2.5 border border-yellow-100">
              <Info size={14} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-[11px] text-yellow-800 leading-snug">
                <strong>Note:</strong> The installation fee is a one-time payment. Monthly WiFi package subscriptions are paid <strong>separately</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-xl font-black text-[#003366] uppercase tracking-tight">Why Choose Ecom Net?</h2>
            <div className="w-10 h-0.5 bg-[#F9A825] mx-auto mt-1.5"></div>
          </div>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
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
                    src={card.image.trim()}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-[#003366] flex-grow flex flex-col justify-center">
                  <h4 className="font-bold text-[11px] text-[#F9A825] mb-1">{card.title}</h4>
                  <p className="text-[9px] text-white/90">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-5 md:p-6 flex flex-col md:flex-row items-center gap-5 md:gap-10 border border-slate-200"
          >
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-black text-[#003366] mb-2">
                Ready for <span className="text-[#F9A825]">Blazing Fast</span> Internet?
              </h2>
              <p className="text-slate-600 mb-5 text-sm">
                Join thousands of satisfied customers who trust Ecom Net for their internet needs.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-green-500" />
                  <span>Call us 24/7: <strong>0740 943 523</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-500" />
                  <span>Email: <strong>sales@ecomnet.ke</strong></span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-[#003366] p-5 md:p-6 text-white border border-slate-300">
              <h3 className="text-base font-bold mb-3 text-center">Get Connected Today</h3>
              <button 
                onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                className="w-full bg-[#F9A825] text-[#003366] font-bold py-2.5 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors text-sm"
              >
                <FaWhatsapp size={16} /> ORDER ON WHATSAPP →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL: SHARP, CLEAN FORM — MATCHING PAGE DESIGN */}
      <AnimatePresence>
        {showForm && selectedPlan && (
          <div className="fixed inset-0 bg-[#003366]/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md border-t-4 border-[#F9A825] p-5 rounded-xl shadow-xl relative"
            >
              <button 
                onClick={() => setShowForm(false)} 
                className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-500"
              >
                <X size={20} />
              </button>

              <h3 className="text-lg font-black text-[#003366] mb-2">Connection Request</h3>
              <p className="text-xs text-slate-600 mb-4">Fill in your details below</p>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formattedDate = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY
                  const message = `
OPTIMAS FIBER - INTERNET CONNECTION REQUEST

CUSTOMER DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Email: ${formData.email || "Not provided"}

SELECTED PLAN:
Plan: ${selectedPlan.name}
Speed: ${selectedPlan.speed}
Price: Ksh ${selectedPlan.price}/month

FEATURES:
${selectedPlan.features.map(f => `- ${f}`).join('\n')}

REQUEST:
${formData.message || "Please contact me to schedule installation."}

Submitted: ${formattedDate}
                  `.trim();

                  window.open(`https://wa.me/+254740943523?text=${encodeURIComponent(message)}`, '_blank');
                  setShowForm(false);
                  setFormData({ name: '', phone: '', location: '', email: '', message: '' });
                }}
                className="space-y-3"
              >
                <div className="space-y-3">
                  <input
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-slate-200 p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                    placeholder="Full Name"
                  />
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full border border-slate-200 p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                    placeholder="Phone Number (e.g. 0726896562)"
                  />
                  <input
                    required
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                    className="w-full border border-slate-200 p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                    placeholder="Location (e.g. Kahawa West)"
                  />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-slate-200 p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                    placeholder="Email (optional)"
                  />

                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-xs">
                    <p className="font-bold text-[#003366]">Selected Plan: {selectedPlan.name}</p>
                    <p>Speed: {selectedPlan.speed} • Price: Ksh {selectedPlan.price}/month</p>
                  </div>

                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-slate-200 p-2.5 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-400"
                    placeholder="Your request message (e.g. ‘I want to install this plan at my location...’)"
                    rows="3"
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 py-2 text-sm border border-slate-300 rounded hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#25D366] text-white font-bold py-2 rounded flex items-center justify-center gap-2 hover:brightness-110 transition-all text-sm"
                  >
                    <FaWhatsapp size={16} /> Send Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;