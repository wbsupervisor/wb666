import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LogIn, Send, Eye, EyeOff, ChevronRight, ChevronLeft } from 'lucide-react';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col relative overflow-hidden pt-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
          
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white w-full max-w-[480px] rounded-[2.5rem] shadow-2xl shadow-sky-100/50 p-8 md:p-12 border border-white"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black text-gray-800 tracking-tight">Log In</h2>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-xs font-bold text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors">
                <span>EN</span>
                <ChevronLeft size={14} className="-rotate-90" />
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">UID / Email</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter UID / Email"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter password"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-sky-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-xs font-bold text-sky-500 hover:underline">
                  Forgot Password / UID?
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <button 
                  type="button"
                  className="flex items-center justify-center gap-2 bg-[#2ea6da] text-white py-4 rounded-2xl font-black text-sm hover:opacity-90 transition-all shadow-lg shadow-sky-200"
                >
                  <Send size={18} />
                  Telegram
                </button>
                <button 
                  type="submit"
                  className="bg-gray-200 text-gray-400 py-4 rounded-2xl font-black text-sm cursor-not-allowed"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-50 text-center">
              <Link to="/register" className="text-sm font-bold text-gray-500 hover:text-sky-500 transition-colors flex items-center justify-center gap-2">
                Sign Up for New UID <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Illustration Side (Desktop) */}
          <div className="hidden lg:block flex-grow">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://illuminatelabs.space/asset/images/login.png" 
                alt="Winbox Tech" 
                className="w-full max-w-[600px] mx-auto drop-shadow-[0_35px_60px_-15px_rgba(0,163,255,0.3)] rounded-[3rem]"
                referrerPolicy="no-referrer"
              />
              {/* Floating elements to match the screenshot's tech vibe */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-500">
                  <LogIn size={32} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
        WINBOX 2025.1104.003
      </footer>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-sky-400 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <div className="relative">
          <Send size={28} className="rotate-[-10deg]" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
        </div>
      </button>
    </div>
  );
};
