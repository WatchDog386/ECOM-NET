// ServicesPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  Network, 
  ShieldCheck, 
  Cloud, 
  Server, 
  Wifi, 
  Briefcase, 
  Check, 
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Settings,
  Layers,
  Code2
} from "lucide-react";
import Navbar from "../components/Navbar";

// Font & Brand
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;
const BRAND = {
  primary: "#004e82",
  golden: "#B8860B",
  accent: "#00a1df",
  dark: "#0a0a0a",
};

const services = [
  {
    id: "network",
    title: "Network Infrastructure",
    description: "Enterprise-grade cabling, switching, and routing architecture designed for high-throughput environments.",
    icon: <Network className="w-5 h-5" />,
    features: ["Structured Cabling (Cat6/Fiber)", "Enterprise Wi-Fi Deployment", "SD-WAN Configuration", "Network Audits"],
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Proactive threat mitigation strategies protecting critical assets across physical and digital layers.",
    icon: <ShieldCheck className="w-5 h-5" />,
    features: ["Next-Gen Firewalls", "Endpoint Protection", "Penetration Testing", "Compliance Auditing"],
  },
  {
    id: "cloud",
    title: "Cloud Services",
    description: "Scalable, hybrid cloud environments that ensure business continuity and operational flexibility.",
    icon: <Cloud className="w-5 h-5" />,
    features: ["Azure/AWS Migration", "Private Cloud Hosting", "SaaS Integration", "Disaster Recovery (DRaaS)"],
  },
  {
    id: "data-center",
    title: "Data Center Solutions",
    description: "Secure colocation and managed server services with guaranteed power and cooling redundancy.",
    icon: <Server className="w-5 h-5" />,
    features: ["Rack Colocation", "Virtual Private Servers", "Offsite Backups", "24/7 Monitoring"],
  },
  {
    id: "connectivity",
    title: "Dedicated Connectivity",
    description: "Symmetrical fiber-optic internet access with Service Level Agreements (SLAs) for mission-critical uptime.",
    icon: <Wifi className="w-5 h-5" />,
    features: ["Dedicated Internet Access (DIA)", "MPLS / VPN", "Dark Fiber Leasing", "Redundant Links"],
  },
  {
    id: "consulting",
    title: "Strategic Consulting",
    description: "Aligning technology roadmaps with organizational goals through expert CIO advisory services.",
    icon: <Briefcase className="w-5 h-5" />,
    features: ["Digital Transformation", "IT Budget Optimization", "Vendor Management", "Infrastructure Design"],
  },
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
        <meta name="description" content="Enterprise network infrastructure, security, and connectivity solutions." />
      </Helmet>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full mb-5">
                <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Solutions Portfolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#004e82] leading-tight mb-6">
                Infrastructure for the <br />
                <span className="text-[#B8860B]">Modern Enterprise</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-700 mb-8 max-w-lg leading-relaxed">
                We design, build, and manage the digital foundations that power Kenya's most forward-thinking organizations.
              </p>

              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => window.open("https://wa.me/254726818938", "_blank")}
                  className="px-6 py-3 text-base font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow-md"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 text-base font-bold rounded-full bg-white text-[#004e82] border-2 border-[#004e82] hover:bg-blue-50 transition-colors"
                >
                  View Plans
                </button>
              </div>
            </motion.div>

            {/* Right: Tech Visualization */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[360px] bg-[#0a0a0a] rounded-2xl border border-[#333] p-6 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,78,130,0.15),transparent)]"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                {[
                  { icon: <Server className="w-6 h-6" />, label: "Hosting" },
                  { icon: <Globe className="w-6 h-6" />, label: "Network" },
                  { icon: <ShieldCheck className="w-6 h-6" />, label: "Security" },
                  { icon: <Database className="w-6 h-6" />, label: "Storage" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col items-center text-white text-sm font-medium">
                    <div className="text-[#B8860B] mb-2">{item.icon}</div>
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS STRIP ================= */}
      <section className="bg-[#004e82] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Infrastructure audit & requirement gathering", icon: <Layers className="w-5 h-5" /> },
              { step: "02", title: "Architecture", desc: "Technical design & capacity planning", icon: <Code2 className="w-5 h-5" /> },
              { step: "03", title: "Deployment", desc: "Implementation & configuration", icon: <Settings className="w-5 h-5" /> },
              { step: "04", title: "Management", desc: "24/7 Monitoring & support", icon: <Cpu className="w-5 h-5" /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col border-l-4 border-[#B8860B] pl-5">
                <div className="flex items-center gap-3 mb-2 opacity-90">
                  {item.icon}
                  <span className="font-mono text-sm font-bold">STEP {item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#cce6f7] text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#004e82] mb-4">Core Capabilities</h2>
            <div className="w-16 h-1 bg-[#B8860B] mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              Delivering integrated technology stacks that drive operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-slate-200 p-7 h-full flex flex-col group shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#004e82] transition-colors">
                  <div className="text-[#004e82] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#004e82]">{service.title}</h3>
                <p className="text-slate-600 text-base mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-slate-100 pt-5 mt-auto">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-base text-slate-600">
                        <Check className="w-5 h-5 text-[#00a1df] mt-0.5 mr-3 shrink-0 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-[#004e82] font-bold text-base flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Solution <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA – UPDATED ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#0a0a0a] rounded-2xl p-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B] rounded-full filter blur-[120px] opacity-15"></div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Request Connection</h2>
              <p className="text-[#cce6f7] text-lg">
                Our certified engineers will analyze your location and propose the best fiber solution for your needs.
              </p>
            </div>

            <div className="relative z-10">
              <button 
                onClick={() => window.open("https://wa.me/254726818938", "_blank")}
                className="px-8 py-4 text-base font-bold bg-[#B8860B] hover:bg-[#a67c00] text-white rounded-full shadow-lg transition-colors"
              >
                Schedule Installation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}