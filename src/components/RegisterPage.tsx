import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  Eye, 
  EyeOff, 
  Download,
  CheckCircle2,
  HelpCircle,
  ChevronLeft
} from 'lucide-react';

export const RegisterPage = () => {
  const [step, setStep] = useState(2); // Start at step 2 as per screenshot
  const [showPassword, setShowPassword] = useState(false);
  const [verifyTab, setVerifyTab] = useState('mobile');

  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col relative overflow-hidden pt-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 relative z-10">
        
        {/* Step Indicator */}
        <div className="w-full max-w-[400px] mb-12 relative">
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${step >= 1 ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' : 'bg-gray-200 text-gray-400'}`}>1</div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${step >= 1 ? 'text-sky-600' : 'text-gray-400'}`}>Enter Referrer</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all ${step >= 2 ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' : 'bg-gray-200 text-gray-400'}`}>2</div>
              <span className={`text-[10px] font-black uppercase tracking-widest ${step >= 2 ? 'text-sky-600' : 'text-gray-400'}`}>New Account</span>
            </div>
          </div>
          {/* Progress Line */}
          <div className="absolute top-5 left-[15%] right-[15%] h-0.5 bg-gray-100 -z-10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: step === 1 ? '0%' : '100%' }}
              className="h-full bg-sky-500"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-0 max-w-5xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-sky-100/50 overflow-hidden border border-white">
          
          {/* Sidebar: Referrer Info */}
          <div className="lg:w-[280px] bg-gray-50/50 p-8 flex flex-col items-center text-center border-r border-gray-100">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-12">Referrer</span>
            
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-sky-400 to-sky-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-sky-100 rotate-3">
                <div className="text-3xl font-black">W</div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-xl shadow-md">
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-gray-800 uppercase tracking-tight">RescueBonus</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">UID:WI***8OX</p>
            </div>
          </div>

          {/* Main Form Area */}
          <div className="flex-grow p-8 md:p-12">
            <div className="flex justify-between items-center mb-10">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-sky-500 uppercase tracking-widest">Step 2/2</span>
                <h2 className="text-3xl font-black text-gray-800 tracking-tight flex items-center gap-2">
                  New Account <HelpCircle size={20} className="text-sky-300" />
                </h2>
                <p className="text-xs font-medium text-gray-400">Please verify first for new account registration</p>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-xs font-bold text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors">
                <span>EN</span>
                <ChevronLeft size={14} className="-rotate-90" />
              </div>
            </div>

            <form className="space-y-6 max-w-xl">
              {/* UID Input */}
              <div className="flex gap-3">
                <div className="flex-grow">
                  <input 
                    type="text" 
                    placeholder="Please enter new UID"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                </div>
                <button type="button" className="bg-sky-500 text-white px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-sky-600 transition-colors shadow-lg shadow-sky-100">
                  Check
                </button>
              </div>

              {/* Password Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Confirm password"
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-sky-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Verification Section */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-8 border-b border-gray-100">
                  {['mobile', 'email', 'telegram'].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setVerifyTab(tab)}
                      className={`pb-4 text-xs font-black uppercase tracking-widest transition-all relative ${verifyTab === tab ? 'text-sky-500' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      {tab}
                      {verifyTab === tab && (
                        <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500" />
                      )}
                    </button>
                  ))}
                </div>

                {verifyTab === 'mobile' && (
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-24 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex items-center justify-between text-sm font-bold text-gray-600">
                        <span>+60</span>
                        <ChevronLeft size={14} className="-rotate-90 text-gray-400" />
                      </div>
                      <div className="flex-grow">
                        <input 
                          type="tel" 
                          placeholder="Please enter mobile no"
                          className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex gap-3 flex-grow">
                        <div className="w-32 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex items-center justify-center text-sm font-black text-gray-400 tracking-widest italic select-none">
                          NSLz
                        </div>
                        <div className="flex-grow">
                          <input 
                            type="text" 
                            placeholder="Please enter OTP"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                          />
                        </div>
                      </div>
                      <button type="button" className="bg-sky-500 text-white px-6 py-4 md:py-0 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-600 transition-colors shadow-lg shadow-sky-100 whitespace-nowrap">
                        Request OTP
                      </button>
                    </div>
                  </div>
                )}

                {verifyTab === 'email' && (
                  <div className="space-y-4">
                    <div className="flex-grow">
                      <input 
                        type="email" 
                        placeholder="Please enter your email"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                      <div className="flex gap-3 flex-grow">
                        <div className="w-32 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex items-center justify-center text-sm font-black text-gray-400 tracking-widest italic select-none">
                          NSLz
                        </div>
                        <div className="flex-grow">
                          <input 
                            type="text" 
                            placeholder="Please enter OTP"
                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                          />
                        </div>
                      </div>
                      <button type="button" className="bg-sky-500 text-white px-6 py-4 md:py-0 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-600 transition-colors shadow-lg shadow-sky-100 whitespace-nowrap">
                        Request OTP
                      </button>
                    </div>
                  </div>
                )}

                {verifyTab === 'telegram' && (
                  <div className="pt-4">
                    <button 
                      type="button"
                      className="w-full flex items-center justify-center gap-3 bg-[#2ea6da] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-sky-100"
                    >
                      <Send size={20} />
                      Verify Now
                    </button>
                    <p className="text-center text-[10px] font-bold text-gray-400 mt-4 uppercase tracking-widest">
                      Click to verify your account via Telegram
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full bg-gray-200 text-gray-400 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] cursor-not-allowed transition-all"
                >
                  Register
                </button>
              </div>

              <div className="text-center space-y-4">
                <p className="text-[10px] font-medium text-gray-400">
                  By registering, you agree to <a href="#" className="text-sky-500 underline">User agreement</a>
                </p>
                <Link to="/login" className="text-xs font-bold text-gray-500 hover:text-sky-500 transition-colors">
                  Already have an account? <span className="text-sky-500 underline">Click here to log in</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center justify-center gap-8">
        <span>WINBOX 2025.1104.003</span>
        <button className="w-8 h-8 bg-sky-100 text-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-200 transition-colors">
          <Download size={16} />
        </button>
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
