// AboutPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  Target, 
  Lightbulb, 
  Users, 
  Shield, 
  Zap, 
  ChevronRight, 
  CheckCircle2,
  Globe,
  Award,
  BarChart3,
  Cpu
} from "lucide-react";

// Brand & Font
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;
const BRAND = {
  primary: "#004e82",
  golden: "#B8860B",
  accent: "#00a1df",
  dark: "#0a0a0a"
};

const values = [
  { 
    icon: <Shield className="w-5 h-5" />, 
    title: "Integrity", 
    description: "Uncompromising honesty and ethical engineering practices in every connection we build.",
    color: "bg-[#004e82]"
  },
  { 
    icon: <Lightbulb className="w-5 h-5" />, 
    title: "Innovation", 
    description: "Leveraging cutting-edge fiber optics to solve complex connectivity challenges.",
    color: "bg-[#00a1df]"
  },
  { 
    icon: <Award className="w-5 h-5" />, 
    title: "Excellence", 
    description: "We set the industry standard for speed, stability, and technical support SLAs.",
    color: "bg-[#B8860B]"
  },
  { 
    icon: <Users className="w-5 h-5" />, 
    title: "Collaboration", 
    description: "Partnering with communities and businesses to build sustainable digital infrastructure.",
    color: "bg-[#006064]"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans" style={{ fontFamily: FONT_FAMILY }}>
      <Helmet>
        <title>About Us | Ecom Network Solutions</title>
        <meta name="description" content="Engineering the future of connectivity in Kenya." />
      </Helmet>

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left: Text — CENTERED ON MOBILE */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full mb-5 mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-[#B8860B] rounded-full"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Company Profile</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#004e82] leading-tight mb-5">
                Reliability <br />
                <span className="text-[#B8860B]">You Can Trust</span>
              </h1>
              
              <p className="text-sm md:text-base text-slate-700 mb-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Ecom Network is more than an ISP. We are a digital infrastructure company dedicated to bridging urban centers and communities through precision engineering.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                <button 
                  onClick={() => window.open("https://wa.me/+254716425483", "_blank")}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow"
                >
                  Our Solutions
                </button>
                <a 
                  href="/contact"
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-white text-[#004e82] border border-[#004e82] hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Right: Image — HIDDEN ON MOBILE, VISIBLE FROM LG UP */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[340px] rounded-2xl border border-[#333] overflow-hidden hidden lg:block"
            >
              <div 
                className="absolute inset-0 bg-[url('https://www.shutterstock.com/image-photo/gadgets-addiction-young-black-family-260nw-2015527172.jpg')] 
                           bg-cover bg-center"
              ></div>
              
              {/* Plain floating text — no background, no blur */}
              <div className="absolute bottom-6 left-6 text-white">
                <Cpu className="w-8 h-8 mb-2 text-[#B8860B]" />
                <h3 className="text-xl font-bold mb-1">Infrastructure First</h3>
                <p className="text-[12px] opacity-90 max-w-xs">
                  We own and operate our fiber network, ensuring end-to-end quality control.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Left: Narrative */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#004e82] mb-5">Our Story -</h2>
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  Established to solve the "last-mile" connectivity challenge, Ecom Network has grown from a neighborhood ISP to a regional telecommunications leader.
                </p>
                <p>
                  Our engineering philosophy is simple: <strong>Redundancy, Speed, and Stability.</strong> We deploy 100% pure fiber-optic networks directly to the premise (FTTP).
                </p>
                <p>
                  Today, we serve thousands of clients across Nairobi with the uptime required for modern commerce, education, and entertainment.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="text-xl font-bold text-[#004e82]">5k+</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Active Connections</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <h4 className="text-xl font-bold text-[#B8860B]">99.9%</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Network Uptime</p>
                </div>
              </div>
            </div>

            {/* Right: Mission & Vision */}
            <div className="space-y-5">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h3 className="font-bold text-[#004e82] text-base mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Mission Statement
                </h3>
                <p className="text-slate-600 text-[12px] leading-relaxed">
                  To empower businesses and communities through reliable, innovative digital infrastructure.
                </p>
              </div>

              <div className="bg-[#004e82] p-5 rounded-xl text-white">
                <h3 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Vision Statement
                </h3>
                <p className="text-blue-100 text-[12px] leading-relaxed">
                  To be the catalyst for Kenya's digital revolution through world-class fiber infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES – COMPACT CARDS ================= */}
      <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#004e82] mb-2">Engineering Principles</h2>
            <div className="w-12 h-0.5 bg-[#B8860B] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-xl border border-slate-200 group"
              >
                <div className={`${value.color} w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white`}>
                  {value.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-[#004e82]">
                  {value.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#004e82] mb-4">Partner with a Reliable Provider</h2>
          <p className="text-slate-600 mb-6 text-sm md:text-base">
            Join the network designed for high-performance business and residential needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <button 
              onClick={() => window.open("https://wa.me/+254716425483", "_blank")}
              className="px-5 py-2.5 text-sm font-bold bg-[#004e82] text-white rounded-full hover:bg-[#003c63] transition-colors"
            >
              Contact Sales
            </button>
            <a 
              href="/plans" 
              className="px-5 py-2.5 text-sm font-bold bg-white text-[#004e82] border border-[#004e82] rounded-full hover:bg-blue-50 transition-colors"
            >
              View Plans
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}