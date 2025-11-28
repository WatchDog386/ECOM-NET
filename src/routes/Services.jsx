// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  Network, 
  Wifi, 
  Briefcase, 
  Check, 
  Cpu,
  ShieldCheck,
  Zap,
  Server
} from "lucide-react";
import Navbar from "../components/Navbar";

// Font & Brand
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;

// Service-specific accent colors
const serviceColors = {
  network: "#2C66A8",
  connectivity: "#4CAF50",
  consulting: "#E69138",
};

// Button colors
const serviceBtnColors = {
  network: "bg-[#FFC107] text-slate-900",
  connectivity: "bg-[#9C27B0] text-white",
  consulting: "bg-[#0D2C54] text-white",
};

const services = [
  {
    id: "network",
    title: "Network Infrastructure",
    description: "Enterprise-grade cabling, switching, and routing architecture designed for high-throughput environments.",
    icon: <Network className="w-6 h-6" />,
    features: ["Structured Cabling (Cat6/Fiber)", "Enterprise Wi-Fi Deployment", "SD-WAN Configuration", "Network Audits"],
  },
  {
    id: "connectivity",
    title: "Dedicated Connectivity",
    description: "Symmetrical fiber-optic internet access with Service Level Agreements (SLAs) for mission-critical uptime.",
    icon: <Wifi className="w-6 h-6" />,
    features: ["Dedicated Internet Access (DIA)", "MPLS / VPN", "Dark Fiber Leasing", "Redundant Links"],
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    description: "Aligning technology roadmaps with organizational goals through expert CIO advisory services.",
    icon: <Briefcase className="w-6 h-6" />,
    features: ["Digital Transformation", "IT Budget Optimization", "Vendor Management", "Infrastructure Design"],
  },
];

// Feature cards — Benefits focus
const featureCards = [
  {
    icon: <Cpu className="w-5 h-5" />,
    color: "bg-[#4F46E5]",
    title: "High Performance",
    desc: "Next-gen hardware for maximum throughput."
  },
  {
    icon: <Server className="w-5 h-5" />,
    color: "bg-[#EF4444]",
    title: "Reliable Uptime",
    desc: "99.9% SLA guaranteed availability."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    color: "bg-[#10B981]",
    title: "Fast Deployment",
    desc: "Rapid installation and configuration."
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "bg-[#059669]",
    title: "Secure by Design",
    desc: "Enterprise-grade security protocols."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans" style={{ fontFamily: FONT_FAMILY }}>
      <Helmet>
        <title>Services | Ecom Network Solutions</title>
        <meta name="description" content="Enterprise network infrastructure, dedicated connectivity, and strategic IT consulting." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* LEFT: Text — Centered on mobile, left on lg */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full mb-5 mx-auto lg:mx-0">
                <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Solutions Portfolio</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#004e82] leading-tight mb-6">
                Infrastructure for the <br />
                <span className="text-[#B8860B]">Modern Enterprise</span>
              </h1>
              <p className="text-base md:text-lg text-slate-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                We design, build, and manage the digital foundations that power Kenya's most forward-thinking organizations.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <button 
                  onClick={() => window.open("https://wa.me/+254716425483", "_blank")}
                  className="px-6 py-3 text-base font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow-md"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>

            {/* RIGHT: Image — Hidden on mobile, shown from lg up */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[360px] rounded-2xl border border-[#333] overflow-hidden hidden lg:block"
            >
              <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/0810/5138/6158/files/Network_Infrastructure.png?v=1692712398')] bg-cover bg-center"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Cpu className="w-8 h-8 mb-2 text-[#B8860B]" />
                <h3 className="text-xl font-bold mb-1">Engineered Reliability</h3>
                <p className="text-[12px] opacity-90 max-w-xs">
                  End-to-end fiber infrastructure for business continuity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
              >
                <div className={`${card.color} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{card.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#004e82] mb-4">Core Capabilities</h2>
            <div className="w-16 h-1 bg-[#B8860B] mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Delivering integrated technology stacks that drive operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const accentColor = serviceColors[service.id];
              const bgColor = `${accentColor}0D`;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: `0 12px 24px ${accentColor}30`,
                    translateY: -5
                  }}
                  className={`bg-[${bgColor}] rounded-xl border border-[${accentColor}20] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
                >
                  <div className="p-6 pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <div 
                        className="w-8 h-8 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: accentColor }}
                      >
                        <span className="text-white">
                          {service.icon}
                        </span>
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <div className="px-6 py-2 flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-2 text-[12px] text-slate-600"
                        >
                          <Check 
                            className="w-4 h-4 mt-0.5 flex-shrink-0" 
                            style={{ color: accentColor }} 
                          />
                          <span className="leading-tight">{feat}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 pt-2">
                    <a 
                      href="/contact"
                      className={`${serviceBtnColors[service.id]} w-full text-center font-bold text-[11px] uppercase px-4 py-2.5 rounded-lg shadow hover:shadow-md transition-all duration-200`}
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#004e82] rounded-xl p-6 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8860B] rounded-full filter blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Request a Consultation</h2>
              <p className="text-[#cce6f7] text-sm md:text-base">
                Our certified engineers will analyze your infrastructure and propose the best solution for your business.
              </p>
            </div>
            <div className="relative z-10">
              <button 
                onClick={() => window.open("https://wa.me/+254716425483", "_blank")}
                className="px-6 py-3 text-sm md:text-base font-bold bg-[#B8860B] hover:bg-[#a67c00] text-white rounded-lg shadow-md transition-colors group-hover:scale-105 transform transition-transform duration-200"
              >
                Contact Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}