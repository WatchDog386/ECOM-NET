// Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock
} from "lucide-react";
import Navbar from "../components/Navbar";

const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;
const BRAND = {
  primary: "#004e82",
  golden: "#B8860B",
  dark: "#0a0a0a"
};

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Sales Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/thank-you");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans" style={{ fontFamily: FONT_FAMILY }}>
      <Helmet>
        <title>Contact Us | Ecom Network Solutions</title>
        <meta name="description" content="Reach our engineering team for fiber internet, support, or business inquiries." />
      </Helmet>

      <Navbar />

      {/* ================= HERO – MATCHES HERO.JSX ================= */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Connectivity Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#004e82] leading-tight mb-4">
                Let’s Build Your <br />
                <span className="text-[#B8860B]">Digital Future</span>
              </h1>
              
              <p className="text-sm md:text-base text-slate-700 mb-6 max-w-lg leading-relaxed">
                Whether you're a home user or enterprise client, our engineers are ready to design your ideal connectivity solution.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <button 
                  onClick={() => window.open("https://wa.me/254726818938", "_blank")}
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow"
                >
                  Chat on WhatsApp
                </button>
                <a 
                  href="tel:+254726818938"
                  className="px-5 py-2.5 text-sm font-bold rounded-full bg-white text-[#004e82] border border-[#004e82] hover:bg-blue-50 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Right: Dark Card (Matches Client Portal) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl relative h-[340px] flex items-center justify-center border border-[#333]">
                <div 
                  className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] 
                             bg-cover bg-center opacity-15"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"></div>

                <div className="relative z-10 text-center text-white px-6">
                  <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/10 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <h3 className="text-xl font-light tracking-widest mb-1">24/7 ENGINEERING</h3>
                  <h2 className="text-2xl font-bold mb-3 text-[#B8860B]">SUPPORT TEAM</h2>
                  <p className="text-[11px] opacity-90 max-w-[160px] mx-auto">
                    Reach our NOC directly for urgent network issues.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO (3-COLUMN GRID) ================= */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Sales & Installation",
                desc: "New connections, upgrades, quotes",
                phone: "+254 726 818 938",
                email: "sales@ecomnetwork.co.ke",
                icon: <Phone className="w-5 h-5" />
              },
              {
                title: "Technical Support",
                desc: "Outages, speed, billing",
                phone: "+254 726 818 938",
                email: "support@ecomnetwork.co.ke",
                icon: <Mail className="w-5 h-5" />
              },
              {
                title: "Headquarters",
                desc: "Visit our office",
                address: "Thoram House, Lucky Summer, Nairobi",
                icon: <MapPin className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                <div className="w-10 h-10 bg-[#004e82] text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#B8860B]">{item.icon}</span>
                </div>
                <h3 className="font-bold text-[#004e82] text-sm mb-1">{item.title}</h3>
                <p className="text-[11px] text-slate-500 mb-2">{item.desc}</p>
                {item.phone && (
                  <a href={`tel:${item.phone.replace(/\s+/g, '')}`} className="block text-[12px] font-bold text-slate-800 hover:text-[#004e82]">
                    {item.phone}
                  </a>
                )}
                {item.email && (
                  <a href={`mailto:${item.email}`} className="block text-[11px] text-slate-600 hover:text-[#004e82] mt-1">
                    {item.email}
                  </a>
                )}
                {item.address && (
                  <p className="text-[11px] text-slate-600 mt-1">{item.address}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM – DARK CARD STYLE ================= */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 text-white">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B]"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone (Optional)"
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B]"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea 
                name="message"
                placeholder="How can we help you?"
                rows="4"
                required
                className="w-full bg-white/10 border border-white/20 rounded px-4 py-2.5 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B] resize-none"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#B8860B] hover:bg-[#a67c00] text-white text-sm font-bold rounded-full transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;