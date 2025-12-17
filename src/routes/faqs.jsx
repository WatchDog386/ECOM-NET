import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  User,
  CreditCard,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  Search,
  ChevronRight,
  Rocket,
  Link as LinkIcon,
  DollarSign,
  Headphones,
  Plus,
  Minus
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";

// Animation Variants matching Hero.jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const features = [
  { title: "High-Velocity Fiber", icon: <Rocket size={18} />, desc: "Symmetrical speeds." },
  { title: "99.9% Uptime SLA", icon: <LinkIcon size={18} />, desc: "Redundant backbone." },
  { title: "Cost Efficiency", icon: <DollarSign size={18} />, desc: "Residential pricing." },
  { title: "24/7 Engineering", icon: <Headphones size={18} />, desc: "Direct technical access." }
];

const faqsData = {
  "Account & Billing": {
    icon: <User size={18} />,
    description: "Manage your profile, payments, and invoices.",
    items: [
      {
        question: "How do I create a self-care account?",
        answer: (
          <div className="space-y-3">
            <p>To initialize your client portal access:</p>
            <ol className="list-decimal pl-5 space-y-2 marker:text-[#015B97] marker:font-bold">
              <li>Navigate to <strong>ecomnetwork.co.ke/portal</strong></li>
              <li>Select 'Client Registration'</li>
              <li>Input your Account ID (Found on your invoice)</li>
              <li>Verify via SMS OTP</li>
            </ol>
            <div className="bg-slate-50 p-4 border-l-4 border-[#015B97] text-xs">
              <strong>Note:</strong> Corporate clients please contact your dedicated account manager.
            </div>
          </div>
        ),
      },
      {
        question: "How can I view and pay my invoices?",
        answer: (
          <div className="space-y-4">
            <p><strong>Available Payment Channels:</strong></p>
            <div className="grid gap-2">
              <div className="flex items-center gap-3 p-3 border border-slate-200 bg-slate-50">
                <CreditCard size={16} className="text-[#015B97]" /> 
                <span>M-Pesa Paybill: <strong>4136553</strong></span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-slate-200 bg-slate-50">
                <CreditCard size={16} className="text-[#015B97]" /> 
                <span>Direct Bank Transfer (EFT/RTGS)</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  "Service Configuration": {
    icon: <Settings size={18} />,
    description: "Bandwidth, IPs, and hardware settings.",
    items: [
      { question: "Can I upgrade my bandwidth anytime?", answer: "Yes. Adjustments can be made dynamically via the portal. Changes typically apply within 15 minutes." },
      { question: "Static IP Assignment", answer: "Static IPs are available as an add-on service. Submit a ticket via the 'Technical' tab in your portal." },
    ],
  },
  "Technical Support": {
    icon: <HelpCircle size={18} />,
    description: "Outages, speed tests, and troubleshooting.",
    items: [
      {
        question: "Basic Connection Troubleshooting",
        answer: (
          <ul className="list-disc pl-5 space-y-2">
            <li>Ensure the ONU/Router has power.</li>
            <li>Check for a 'LOS' red light on the device.</li>
            <li>Perform a power cycle (unplug for 30 seconds).</li>
            <li>If the issue persists, open a technical ticket.</li>
          </ul>
        )
      },
      { question: "How to optimize my Wi-Fi signal?", answer: "Place your router in an elevated, central location away from metal objects. Use the 5GHz band for devices within 15ft." },
    ],
  },
};

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState("Account & Billing");
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqsData[activeCategory].items.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#015B97] selection:text-white">
      <Helmet>
        <title>Support | Ecom Net Professional</title>
      </Helmet>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070" className="w-full h-full object-cover" alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#015B97] to-slate-900" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="risa-badge mb-6 inline-block !bg-white/10 !text-white border-white/20">Knowledge Base</div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              How can we <span className="text-[#3288e6]">help you?</span>
            </h1>
            
            <div className="max-w-2xl mx-auto relative mt-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                className="w-full pl-14 pr-6 py-5 bg-white rounded-none border-none shadow-2xl focus:ring-4 focus:ring-[#015B97]/20 text-lg outline-none"
                placeholder="Search for solutions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE STRIP (Sharp) --- */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 border border-slate-200 shadow-lg flex items-start gap-4"
            >
              <div className="p-3 bg-[#015B97] text-white rounded-none">{feature.icon}</div>
              <div>
                <h3 className="font-black text-[#015B97] text-xs uppercase tracking-widest mb-1">{feature.title}</h3>
                <p className="text-slate-500 text-xs">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white border border-slate-200 p-2 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] p-4">Departments</p>
                <div className="space-y-1">
                  {Object.entries(faqsData).map(([key, { icon }]) => (
                    <button
                      key={key}
                      onClick={() => { setActiveCategory(key); setOpenIndex(null); }}
                      className={`w-full flex items-center justify-between p-4 font-bold text-sm transition-all ${
                        activeCategory === key ? "bg-[#015B97] text-white shadow-lg" : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {icon}
                        <span>{key}</span>
                      </div>
                      <ChevronRight size={16} className={activeCategory === key ? "opacity-100" : "opacity-0"} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Engineering Support Box */}
              <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Headphones size={60} /></div>
                <h4 className="text-xl font-black mb-2 uppercase">Direct Support</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">Can't find what you need? Open a direct technical ticket with our engineering team.</p>
                <button 
                  onClick={() => window.open("https://wa.me/+254740943523", "_blank")}
                  className="w-full py-4 bg-[#3288e6] hover:bg-white hover:text-[#015B97] transition-all font-black text-xs uppercase tracking-widest"
                >
                  Request Assistance
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="lg:col-span-8">
            <div className="mb-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#015B97] flex items-center justify-center border border-[#015B97]/20">
                    {faqsData[activeCategory].icon}
                </div>
                <div>
                    <h2 className="text-3xl font-black text-[#015B97] uppercase tracking-tight">{activeCategory}</h2>
                    <p className="text-slate-500 text-sm font-medium">{faqsData[activeCategory].description}</p>
                </div>
            </div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" key={activeCategory} className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, i) => (
                  <motion.div key={i} variants={itemVariants} className="bg-white border border-slate-200">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full p-6 text-left flex justify-between items-center group"
                    >
                      <span className={`font-bold transition-colors ${openIndex === i ? 'text-[#015B97]' : 'text-slate-700 group-hover:text-[#015B97]'}`}>
                        {faq.question}
                      </span>
                      <div className={`p-1 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#015B97]' : 'text-slate-300'}`}>
                        {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-7 border-t border-slate-50">
                            <div className="pt-6">{faq.answer}</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-20 border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-bold uppercase tracking-widest">No articles match your search</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CONTACT STRIP --- */}
      <section className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            <a href="tel:+254740943523" className="flex items-center gap-5 p-8 border border-slate-100 hover:border-[#015B97] transition-all group">
                <Phone className="text-slate-300 group-hover:text-[#015B97]" size={24}/>
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase">Call Center</p>
                    <p className="font-bold text-slate-800">+254 740 943 523</p>
                </div>
            </a>
            <a href="mailto:support@ecomnetwork.co.ke" className="flex items-center gap-5 p-8 border border-slate-100 hover:border-[#015B97] transition-all group">
                <Mail className="text-slate-300 group-hover:text-[#015B97]" size={24}/>
                <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase">Email Support</p>
                    <p className="font-bold text-slate-800">support@ecomnetwork.co.ke</p>
                </div>
            </a>
            <a href="https://wa.me/+254740943523" className="flex items-center gap-5 p-8 bg-[#25D366] text-white group">
                <FaWhatsapp className="text-white/80 group-hover:text-white" size={24}/>
                <div>
                    <p className="text-[10px] font-black text-white/70 uppercase">Live Assistance</p>
                    <p className="font-bold">Chat with Engineering</p>
                </div>
            </a>
        </div>
      </section>
    </div>
  );
}