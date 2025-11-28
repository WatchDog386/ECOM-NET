import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  ArrowRight,
  AlertCircle,
  Loader2,
  Server,
  Activity,
  ShieldCheck,
  Globe,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- STYLES & ASSETS ---
const FONT_FAMILY = `'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif`;

// Corporate Brand Colors
const BRAND = {
  primary: "#004e82",   // Deep RISA Blue
  accent: "#00a1df",    // Cyan
  dark: "#0f172a",      // Slate 900
  light: "#f8fafc",     // Slate 50
  border: "#e2e8f0"     // Slate 200
};

const Login = () => {
  // --- STATE MANAGEMENT ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  
  const navigate = useNavigate();

  // --- API CONFIGURATION ---
  const getApiConfig = () => {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:10000';
    return {
      API_BASE_URL,
      headers: { 'Content-Type': 'application/json' }
    };
  };

  // --- LOGIC: AUTHENTICATION ---
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) verifyToken(token);
  }, []);

  const verifyToken = async (token) => {
    try {
      const { API_BASE_URL, headers } = getApiConfig();
      const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}`, ...headers },
      });
      
      if (response.ok) navigate('/dashboard');
      else localStorage.removeItem('token');
    } catch (err) {
      console.error('Token verification error:', err);
      localStorage.removeItem('token');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      setLoading(false);
      return;
    }

    try {
      const { API_BASE_URL, headers } = getApiConfig();
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error(`Unexpected response format`);
      }

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || `Login failed: ${response.status}`);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Connection refused. Please contact network administrator.');
    } finally {
      setLoading(false);
    }
  };

  // --- RENDER ---
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-[#f1f5f9] p-4 lg:p-0"
      style={{ fontFamily: FONT_FAMILY }}
    >
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: `linear-gradient(${BRAND.primary} 1px, transparent 1px), linear-gradient(90deg, ${BRAND.primary} 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* MAIN CARD CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-[1100px] bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative z-10 border border-slate-200"
      >
        
        {/* LEFT PANEL: FORM */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative bg-white z-20">
          
          <div className="max-w-sm mx-auto w-full">
            {/* Logo Area */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-[#004e82] rounded flex items-center justify-center text-white font-bold shadow-md">
                E
              </div>
              <div className="leading-none">
                <span className="block font-bold text-[#004e82] text-xl tracking-tight">ECOM</span>
                <span className="block text-[10px] font-bold tracking-[0.2em] text-[#00a1df] uppercase">Network</span>
              </div>
            </div>
            
            <div className="mb-8">
               <h1 className="text-2xl font-bold text-slate-800 mb-2">Client Portal Access</h1>
               <p className="text-slate-500 text-sm">Authenticate to view your infrastructure status.</p>
            </div>

            {/* Error State */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="p-3 rounded bg-red-50 border-l-4 border-red-600 flex items-start gap-3 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full px-4 py-3 bg-white border rounded text-slate-800 outline-none transition-all
                    ${focusedInput === 'email' ? 'border-[#004e82] ring-1 ring-[#004e82]' : 'border-slate-300 hover:border-slate-400'}`}
                  placeholder="admin@company.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                  <a href="/forgot-password" class="text-xs font-bold text-[#00a1df] hover:underline">Reset?</a>
                </div>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                    className={`w-full px-4 py-3 bg-white border rounded text-slate-800 outline-none transition-all
                      ${focusedInput === 'password' ? 'border-[#004e82] ring-1 ring-[#004e82]' : 'border-slate-300 hover:border-slate-400'}`}
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-400 hover:text-[#004e82] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                disabled={loading}
                className="w-full py-3.5 bg-[#004e82] hover:bg-[#003c63] text-white rounded font-bold text-sm shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Authenticate System'}
              </motion.button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
               <span>v4.2.0 (Stable)</span>
               <div className="flex items-center gap-1">
                 <ShieldCheck className="w-3 h-3 text-emerald-500" />
                 <span>Secure Connection</span>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: ENGINEERING DASHBOARD VISUAL */}
        <div className="hidden md:flex w-1/2 bg-[#0f172a] relative overflow-hidden flex-col items-center justify-center p-12 text-white">
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 z-0 opacity-10" 
                  style={{ 
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
                    backgroundSize: '30px 30px'
                  }}>
            </div>

            {/* Simulated Server Monitor */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="relative z-10 w-full max-w-sm"
            >
               {/* Header Bar */}
               <div className="bg-[#1e293b] rounded-t-lg border border-slate-700 p-3 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                     <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">network_admin@root</div>
               </div>

               {/* Monitor Body */}
               <div className="bg-[#0f172a]/90 backdrop-blur-sm border-x border-b border-slate-700 rounded-b-lg p-6 font-mono text-xs">
                  
                  <div className="flex justify-between items-center mb-6">
                     <div className="text-emerald-400 font-bold flex items-center gap-2">
                        <Activity className="w-4 h-4 animate-pulse" /> SYSTEM ONLINE
                     </div>
                     <div className="text-slate-500">UPTIME: 99.99%</div>
                  </div>

                  {/* Stat Rows */}
                  <div className="space-y-4">
                     <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                           <span><Server className="w-3 h-3 inline mr-2"/>Core Switch</span>
                           <span className="text-emerald-400">OPTIMAL</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                           <div className="bg-emerald-500 h-full w-[92%]"></div>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                           <span><Globe className="w-3 h-3 inline mr-2"/>Global Latency</span>
                           <span className="text-[#00a1df]">12ms</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                           <motion.div 
                             animate={{ width: ["40%", "60%", "45%"] }}
                             transition={{ repeat: Infinity, duration: 2 }}
                             className="bg-[#00a1df] h-full"
                           ></motion.div>
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between mb-1 text-slate-300">
                           <span><Cpu className="w-3 h-3 inline mr-2"/>Load Balancer</span>
                           <span className="text-amber-400">Active</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                           <div className="bg-amber-400 h-full w-[35%]"></div>
                        </div>
                     </div>
                  </div>

                  {/* Terminal Text */}
                  <div className="mt-6 pt-4 border-t border-slate-800 text-slate-500 space-y-1">
                     <p> initializing secure handshake...</p>
                     <p> verifying tls certificates...</p>
                     <p className="text-white"><span className="text-emerald-500">✔</span> connection established.</p>
                     <p className="animate-pulse">_</p>
                  </div>

               </div>
            </motion.div>

            <div className="absolute bottom-8 text-center">
               <h3 className="text-xl font-bold mb-1">Infrastructure Control</h3>
               <p className="text-slate-400 text-sm">Real-time monitoring and configuration</p>
            </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Login;