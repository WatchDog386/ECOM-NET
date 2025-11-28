// Faqs.jsx
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
  ChevronDown,
  ChevronRight,
  Rocket,
  Link as LinkIcon,
  DollarSign,
  Headphones,
  FileText,
  Plus,
  Minus,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";

// Font & Brand
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;
const BRAND = {
  primary: "#004e82",
  golden: "#B8860B",
  accent: "#00a1df",
  dark: "#0a0a0a"
};

// Hero Features
const features = [
  {
    title: "High-Velocity Fiber",
    icon: <Rocket className="w-4 h-4 text-white" />,
    desc: "Symmetrical speeds."
  },
  {
    title: "99.9% Uptime SLA",
    icon: <LinkIcon className="w-4 h-4 text-white" />,
    desc: "Redundant backbone."
  },
  {
    title: "Cost Efficiency",
    icon: <DollarSign className="w-4 h-4 text-white" />,
    desc: "Residential pricing."
  },
  {
    title: "24/7 Engineering",
    icon: <Headphones className="w-4 h-4 text-white" />,
    desc: "Direct technical access."
  }
];

// FAQ Data
const faqsData = {
  "Account & Billing": {
    icon: <User className="w-4 h-4" />,
    description: "Manage your profile, payments, and invoices.",
    items: [
      {
        question: "How do I create a self-care account?",
        answer: (
          <div className="space-y-2 text-slate-600 text-[12px] leading-relaxed">
            <p>To initialize your client portal access:</p>
            <ol className="list-decimal pl-4 space-y-1 marker:text-[#004e82] marker:font-bold text-[11px]">
              <li>Navigate to <strong>ecomnetwork.co.ke/portal</strong></li>
              <li>Select 'Client Registration'</li>
              <li>Input your Account ID (Found on your invoice)</li>
              <li>Verify via SMS OTP</li>
            </ol>
            <div className="bg-blue-50 p-2 border-l-2 border-[#004e82] text-[10px] text-slate-700 mt-2 rounded-r">
              <strong>Note:</strong> Corporate clients contact your account manager.
            </div>
          </div>
        ),
      },
      {
        question: "View and Pay Invoices",
        answer: (
          <div className="space-y-2 text-slate-600 text-[12px]">
            <p><strong>Payment Channels:</strong></p>
            <ul className="grid grid-cols-1 gap-2">
              <li className="flex items-start gap-2 p-2 border border-slate-200 rounded bg-slate-50">
                <CreditCard size={14} className="text-[#004e82] mt-0.5" /> 
                <span>Paybill: <strong>4136553</strong></span>
              </li>
              <li className="flex items-start gap-2 p-2 border border-slate-200 rounded bg-slate-50">
                <CreditCard size={14} className="text-[#004e82] mt-0.5" /> 
                <span>Bank Transfer (EFT)</span>
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  "Service Configuration": {
    icon: <Settings className="w-4 h-4" />,
    description: "Bandwidth, IPs, and hardware settings.",
    items: [
      {
        question: "Bandwidth Upgrades",
        answer: "Adjust bandwidth dynamically via portal. Changes apply within 15 minutes.",
      },
      {
        question: "Static IP Assignment",
        answer: "Available as add-on. Submit a ticket via 'Technical' tab in your portal.",
      },
    ],
  },
  "Technical Support": {
    icon: <HelpCircle className="w-4 h-4" />,
    description: "Outages, speed tests, and troubleshooting.",
    items: [
      {
        question: "Troubleshooting Connectivity",
        answer: (
          <ul className="list-disc pl-4 space-y-1 text-[12px] text-slate-600">
            <li>Check ONU/Router power.</li>
            <li>Look for 'LOS' red light.</li>
            <li>Power cycle (30 sec off).</li>
            <li>If unresolved, open a ticket.</li>
          </ul>
        )
      },
      {
        question: "Wi-Fi Optimization",
        answer: "Place router elevated, away from metal. Use 5GHz for devices within 15ft.",
      },
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
    <div className="min-h-screen bg-slate-50 font-sans" style={{ fontFamily: FONT_FAMILY }}>
      <Helmet>
        <title>Support Center | Ecom Network Solutions</title>
        <meta name="description" content="Get help with billing, service setup, and technical issues." />
      </Helmet>

      <Navbar />

      {/* ================= HERO – MATCHES BRAND ================= */}
      <section className="relative w-full pt-24 pb-28 md:pt-28 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.shutterstock.com/image-photo/businessman-hand-browsing-internet-websites-260nw-246869518.jpg"
            alt="Support Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004e82] via-[#004e82]/95 to-[#004e82]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#B8860B] rounded-full"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Help Desk & Resources</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How can we <span className="text-[#B8860B]">assist you?</span>
            </h1>
            
            <p className="text-sm md:text-base text-blue-100 max-w-xl mx-auto mb-6 leading-relaxed">
              Search our knowledge base, manage your account, or connect with our engineering team.
            </p>

            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2.5 bg-white text-slate-900 rounded-lg border-0 shadow-lg ring-1 ring-white/20 focus:ring-2 focus:ring-[#B8860B] placeholder:text-slate-400 text-sm"
                placeholder="Search for answers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURE CARDS – COMPACT ================= */}
      <section className="relative z-20 -mt-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 rounded-lg border border-slate-100 text-center"
              >
                <div className="w-8 h-8 rounded bg-[#004e82] flex items-center justify-center mb-2 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[12px] text-slate-800 mb-1">{feature.title}</h3>
                <p className="text-[10px] text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT – CLEAN SIDEBAR ================= */}
      <section className="py-10 md:py-14 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-slate-200 p-2">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-3 py-2">Categories</h3>
                  <div className="space-y-1">
                    {Object.entries(faqsData).map(([key, { icon }]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setActiveCategory(key);
                          setOpenIndex(null);
                          setSearch("");
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-[13px] font-medium ${
                          activeCategory === key
                            ? "bg-[#004e82] text-white"
                            : "text-slate-600 hover:bg-slate-50 hover:text-[#004e82]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={activeCategory === key ? "text-white" : "text-slate-400"}>
                            {icon}
                          </span>
                          <span>{key}</span>
                        </div>
                        {activeCategory === key && <ChevronRight size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engineering CTA */}
                <div className="mt-5 bg-[#0a0a0a] rounded-xl p-5 text-white">
                  <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center mb-3">
                    <Headphones size={16} />
                  </div>
                  <p className="font-bold text-sm mb-2">Need connection?</p>
                  <p className="text-[11px] text-slate-400 mb-3">Our Team is available 24/7 for critical issues.</p>
                  <button 
                    onClick={() => window.open("https://wa.me/+254716425483", "_blank")}
                    className="w-full py-2 bg-[#B8860B] hover:bg-[#a67c00] text-white rounded text-[12px] font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    Open Ticket
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="mb-6 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 bg-blue-50 text-[#004e82] rounded">
                    {faqsData[activeCategory].icon}
                  </span>
                  <h2 className="text-xl font-bold text-slate-800">{activeCategory}</h2>
                </div>
                <p className="text-slate-500 text-sm ml-8">{faqsData[activeCategory].description}</p>
              </div>

              <div className="space-y-3">
                <AnimatePresence mode="wait">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`border rounded-lg overflow-hidden ${
                          openIndex === i ? 'border-[#B8860B] bg-white' : 'border-slate-200 bg-white'
                        }`}
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full p-4 text-left flex justify-between items-center"
                        >
                          <span className={`text-[13px] font-semibold ${
                            openIndex === i ? 'text-[#004e82]' : 'text-slate-700'
                          }`}>
                            {faq.question}
                          </span>
                          <span className="text-slate-400">
                            {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-4 pb-4 pt-0">
                                <div className="h-px w-full bg-slate-100 mb-3"></div>
                                <div className="text-slate-600 text-[12px] leading-6">
                                  {faq.answer}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300">
                      <Search className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                      <h3 className="text-slate-900 font-medium text-sm">No results found</h3>
                      <p className="text-slate-500 text-[11px]">No articles match "{search}"</p>
                      <button 
                        onClick={() => setSearch('')}
                        className="mt-2 text-[#B8860B] text-[11px] font-bold hover:underline"
                      >
                        Clear Search
                      </button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA – CONSISTENT FOOTER ================= */}
      <section className="bg-white py-10 px-4 md:px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-3">Still experiencing issues?</h2>
          <p className="text-slate-600 text-sm mb-6">
            Our engineers are available 24/7. For urgent matters, call or WhatsApp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="tel:+254726818938" className="flex flex-col items-center bg-white p-4 rounded-xl border border-slate-200 hover:border-[#004e82] transition-colors">
              <div className="w-10 h-10 bg-blue-50 text-[#004e82] rounded-full flex items-center justify-center mb-2">
                <Phone size={18} />
              </div>
              <span className="text-[12px] font-bold">Technical Hotline</span>
              <span className="text-[10px] text-slate-500">+254 716 425 483</span>
            </a>
            
            <a href="mailto:support@ecomnetwork.co.ke" className="flex flex-col items-center bg-white p-4 rounded-xl border border-slate-200 hover:border-[#004e82] transition-colors">
              <div className="w-10 h-10 bg-blue-50 text-[#004e82] rounded-full flex items-center justify-center mb-2">
                <Mail size={18} />
              </div>
              <span className="text-[12px] font-bold">Email Support</span>
              <span className="text-[10px] text-slate-500">support@ecomnetwork.co.ke</span>
            </a>

            <a 
              href="https://wa.me/+254716425483" 
              target="_blank" 
              rel="noreferrer"
              className="flex flex-col items-center bg-[#25D366] p-4 rounded-xl text-white"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <FaWhatsapp size={18} />
              </div>
              <span className="text-[12px] font-bold">Live Chat</span>
              <span className="text-[10px] opacity-90">Instant Response</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}