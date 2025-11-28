// Contact.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Navbar from "../components/Navbar";

const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/ECOM.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text — CENTERED ON MOBILE */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#004e82] leading-tight mb-6">
                Let’s Build Your <br />
                <span className="text-[#B8860B]">Digital Future</span>
              </h1>
              <p className="text-base md:text-lg text-slate-700 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Whether you're a home user or enterprise client, our engineers are ready to design your ideal connectivity solution.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <button 
                  onClick={() => window.open("https://wa.me/+254716425483", "_blank")}
                  className="px-6 py-3 text-base font-bold rounded-full bg-[#004e82] text-white hover:bg-[#003c63] transition-colors shadow-md"
                >
                  Chat on WhatsApp
                </button>
                <a 
                  href="tel:+254726818938"
                  className="px-6 py-3 text-base font-bold rounded-full bg-white text-[#004e82] border border-[#004e82] hover:bg-blue-50 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Right: Image Card — HIDDEN ON MOBILE */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[360px] rounded-2xl border border-[#333] overflow-hidden hidden lg:block"
            >
              <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/cdn-website-bolddesk/2024/06/f70aae19-customer-service-compressed.jpg')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Phone className="w-8 h-8 mb-2 text-[#B8860B]" />
                <h3 className="text-xl font-bold mb-1">24/7 Customer Service</h3>
                <p className="text-[12px] opacity-90 max-w-xs">
                  Reach our NOC directly for urgent network issues.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Sales & Installation",
                desc: "New connections, upgrades, quotes",
                phone: "+254 726 818 938",
                email: "sales@ecomnetwork.co.ke",
                icon: <Phone className="w-5 h-5" />,
                color: "bg-[#4F46E5]"
              },
              {
                title: "Technical Support",
                desc: "Outages, speed, billing",
                phone: "+254 726 818 938",
                email: "support@ecomnetwork.co.ke",
                icon: <Mail className="w-5 h-5" />,
                color: "bg-[#EF4444]"
              },
              {
                title: "Headquarters",
                desc: "Visit our office",
                address: "Thoram House, Lucky Summer, Nairobi",
                icon: <MapPin className="w-5 h-5" />,
                color: "bg-[#10B981]"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4"
              >
                <div className={`${item.color} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs mb-2">{item.desc}</p>
                  {item.phone && (
                    <a href={`tel:${item.phone.replace(/\s+/g, '')}`} className="block text-[11px] font-bold text-slate-800 hover:text-[#004e82] leading-tight">
                      {item.phone}
                    </a>
                  )}
                  {item.email && (
                    <a href={`mailto:${item.email}`} className="block text-[10px] text-slate-600 hover:text-[#004e82] mt-1 leading-tight">
                      {item.email}
                    </a>
                  )}
                  {item.address && (
                    <p className="text-[10px] text-slate-600 mt-1 leading-tight">{item.address}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM – DARK CARD ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] rounded-2xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B]"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone (Optional)"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B]"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea 
                name="message"
                placeholder="How can we help you?"
                rows="4"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-300 focus:outline-none focus:border-[#B8860B] resize-none"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 text-base font-bold bg-[#B8860B] hover:bg-[#a67c00] text-white rounded-full shadow-md transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;